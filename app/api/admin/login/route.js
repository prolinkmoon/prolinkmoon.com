// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const { password } = await req.json();

//   if (password !== process.env.ADMIN_PASSWORD) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   const res = NextResponse.json({ success: true });

//   res.cookies.set('admin', 'true', {
//     httpOnly: true,
//     sameSite: 'strict',
//     path: '/'
//   });

//   return res;
// }



// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST(req) {
//   const { password } = await req.json();

//   if (password !== process.env.ADMIN_SECRET) {
//     return NextResponse.json({ error: "Wrong password" }, { status: 401 });
//   }

//   const cookieStore = await cookies();
//   cookieStore.set("admin_token", password, {
//     httpOnly: true,
//     sameSite: "strict",
//     path: "/",
//   });

//   return NextResponse.json({ success: true });
// }



import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_SECRET) {
    return NextResponse.json(
      { error: "Wrong password" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ success: true });

  res.cookies.set({
    name: "admin_token",
    value: process.env.ADMIN_SECRET,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res;
}

