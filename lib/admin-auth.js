// import { cookies } from "next/headers";

// export async function requireAdmin() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("admin_token")?.value;

//   if (token !== process.env.ADMIN_SECRET) {
//     throw new Response(
//       JSON.stringify({ error: "Unauthorized" }),
//       { status: 401 }
//     );
//   }
// }


// lib/admin-auth.js
// import { cookies } from "next/headers";

// export async function requireAdmin() {
//   const cookieStore = cookies();
//   const token = cookieStore.get("admin_token");

//   if (!token || token.value !== process.env.ADMIN_SECRET) {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   return null; // ✅ authorized
// }



import { cookies } from "next/headers";

export async function requireAdmin() {
  const cookieStore = await cookies(); // ✅ WAJIB await
  const token = cookieStore.get("admin_token");

  if (!token || token.value !== process.env.ADMIN_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  return null;
}
