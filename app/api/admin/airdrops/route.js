// // import { db } from '@/lib/db';
// import { db } from "../../../../lib/db";
// import { NextResponse } from 'next/server';

// function unauthorized() {
//   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
// }

// function checkAuth(req) {
//   const key = req.headers.get('x-admin-key');
//   return key === process.env.ADMIN_API_KEY;
// }

// /* ======================
//    CREATE AIRDROP
// ====================== */
// export async function POST(req) {
//   if (!checkAuth(req)) return unauthorized();

//   const body = await req.json();
//   const {
//     project_name,
//     image_url,
//     campaign_url,
//     rating,
//     stage,
//     tags
//   } = body;

//   await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, campaign_url, rating, stage, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       project_name,
//       image_url,
//       campaign_url,
//       rating,
//       stage,
//       JSON.stringify(tags)
//     ]
//   );

//   return NextResponse.json({ success: true });
// }

// /* ======================
//    DELETE AIRDROP
// ====================== */
// export async function DELETE(req) {
//   if (!checkAuth(req)) return unauthorized();

//   const { id } = await req.json();

//   await db.query(`DELETE FROM airdrops WHERE id = ?`, [id]);

//   return NextResponse.json({ success: true });
// }


// import { db } from '@/lib/db';
// import { db } from "../../../../lib/db";
// import { NextResponse } from 'next/server';

// function unauthorized() {
//   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
// }

// function isAdmin(req) {
//   return req.cookies.get('admin')?.value === 'true';
// }

// export async function GET(req) {
//   if (!isAdmin(req)) return unauthorized();

//   const [rows] = await db.query(
//     `SELECT * FROM airdrops ORDER BY id DESC`
//   );
//   return NextResponse.json(rows);
// }

// export async function PUT(req) {
//   if (!isAdmin(req)) return unauthorized();

//   const { id, field, value } = await req.json();

//   await db.query(
//     `UPDATE airdrops SET ${field} = ? WHERE id = ?`,
//     [value, id]
//   );

//   return NextResponse.json({ success: true });
// }

// export async function DELETE(req) {
//   if (!isAdmin(req)) return unauthorized();

//   const { id } = await req.json();
//   await db.query(`DELETE FROM airdrops WHERE id = ?`, [id]);

//   return NextResponse.json({ success: true });
// }


// export async function POST(req) {
//   if (!isAdmin(req)) return unauthorized();

//   const data = await req.json();

//   const [res] = await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, rating, stage, campaign_url, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       data.project_name,
//       data.image_url,
//       data.rating,
//       data.stage,
//       data.campaign_url,
//       data.tags
//     ]
//   );

//   return NextResponse.json({
//     id: res.insertId,
//     ...data
//   });
// }


// import { db } from '@/lib/db';
// import { db } from "../../../../lib/db";
// import { cookies } from 'next/headers';

// // 🔐 simple auth guard
// function isAuthed() {
//   const token = cookies().get('admin_token');
//   return token && token.value === process.env.ADMIN_SECRET;
// }

// // ================= GET =================
// export async function GET() {
//   if (!isAuthed()) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const [rows] = await db.query(
//     'SELECT * FROM airdrops ORDER BY id DESC'
//   );

//   return Response.json(rows);
// }

// // ================= POST (ADD) =================
// export async function POST(req) {
//   if (!isAuthed()) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const body = await req.json();

//   const tags = Array.isArray(body.tags)
//     ? JSON.stringify(body.tags)
//     : JSON.stringify([]);

//   await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, rating, stage, campaign_url, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       body.project_name || '',
//       body.image_url || '',
//       body.rating || 1,
//       body.stage || 'new',
//       body.campaign_url || '',
//       tags
//     ]
//   );

//   return Response.json({ success: true });
// }

// // ================= PUT (EDIT) =================
// export async function PUT(req) {
//   if (!isAuthed()) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const body = await req.json();

//   const tags = Array.isArray(body.tags)
//     ? JSON.stringify(body.tags)
//     : JSON.stringify([]);

//   await db.query(
//     `UPDATE airdrops SET
//       project_name=?,
//       image_url=?,
//       rating=?,
//       stage=?,
//       campaign_url=?,
//       tags=?
//      WHERE id=?`,
//     [
//       body.project_name,
//       body.image_url,
//       body.rating,
//       body.stage,
//       body.campaign_url,
//       tags,
//       body.id
//     ]
//   );

//   return Response.json({ success: true });
// }

// // ================= DELETE =================
// export async function DELETE(req) {
//   if (!isAuthed()) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const { id } = await req.json();

//   await db.query('DELETE FROM airdrops WHERE id=?', [id]);

//   return Response.json({ success: true });
// }


// import { db } from '@/lib/db';
// import { db } from "../../../../lib/db";
// import { cookies } from 'next/headers';

// // 🔐 async auth guard (Next 16 compatible)
// async function isAuthed() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('admin_token');
//   return token && token.value === process.env.ADMIN_SECRET;
// }

// // ================= GET =================
// export async function GET() {
//   if (!(await isAuthed())) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const [rows] = await db.query(
//     'SELECT * FROM airdrops ORDER BY id DESC'
//   );

//   return Response.json(rows);
// }

// // ================= POST =================
// export async function POST(req) {
//   if (!(await isAuthed())) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const body = await req.json();

//   const tags = Array.isArray(body.tags)
//     ? JSON.stringify(body.tags)
//     : JSON.stringify([]);

//   await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, rating, stage, campaign_url, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       body.project_name || '',
//       body.image_url || '',
//       body.rating || 1,
//       body.stage || 'new',
//       body.campaign_url || '',
//       tags
//     ]
//   );

//   return Response.json({ success: true });
// }

// // ================= PUT =================
// export async function PUT(req) {
//   if (!(await isAuthed())) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const body = await req.json();

//   const tags = Array.isArray(body.tags)
//     ? JSON.stringify(body.tags)
//     : JSON.stringify([]);

//   await db.query(
//     `UPDATE airdrops SET
//       project_name=?,
//       image_url=?,
//       rating=?,
//       stage=?,
//       campaign_url=?,
//       tags=?
//      WHERE id=?`,
//     [
//       body.project_name,
//       body.image_url,
//       body.rating,
//       body.stage,
//       body.campaign_url,
//       tags,
//       body.id
//     ]
//   );

//   return Response.json({ success: true });
// }

// // ================= DELETE =================
// export async function DELETE(req) {
//   if (!(await isAuthed())) {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   const { id } = await req.json();

//   await db.query('DELETE FROM airdrops WHERE id=?', [id]);

//   return Response.json({ success: true });
// }



// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { db } from "../../../../lib/db";
// // import { db } from "@/lib/db";

// /* =========================
//    AUTH HELPER
// ========================= */
// async function isAuthed() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("admin_token");
//   return token?.value === process.env.ADMIN_SECRET;
// }

// /* =========================
//    GET
// ========================= */
// export async function GET() {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const [rows] = await db.query(
//     "SELECT * FROM airdrops ORDER BY created_at DESC"
//   );

//   return NextResponse.json(rows);
// }

// /* =========================
//    POST (ADD DATA)
// ========================= */
// export async function POST(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const {
//     project_name,
//     image_url,
//     rating,
//     stage,
//     campaign_url,
//     tags = [],
//   } = await req.json();

//   await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, rating, stage, campaign_url, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       project_name,
//       image_url,
//       rating,
//       stage,
//       campaign_url,
//       JSON.stringify(tags), // 🔥 WAJIB JSON STRING
//     ]
//   );

//   return NextResponse.json({ success: true });
// }

// /* =========================
//    PUT (EDIT)
// ========================= */
// export async function PUT(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const {
//     id,
//     project_name,
//     image_url,
//     rating,
//     stage,
//     campaign_url,
//     tags = [],
//   } = await req.json();

//   await db.query(
//     `UPDATE airdrops SET
//       project_name=?,
//       image_url=?,
//       rating=?,
//       stage=?,
//       campaign_url=?,
//       tags=?
//      WHERE id=?`,
//     [
//       project_name,
//       image_url,
//       rating,
//       stage,
//       campaign_url,
//       JSON.stringify(tags),
//       id,
//     ]
//   );

//   return NextResponse.json({ success: true });
// }

// /* =========================
//    DELETE
// ========================= */
// export async function DELETE(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { id } = await req.json();
//   await db.query("DELETE FROM airdrops WHERE id=?", [id]);

//   return NextResponse.json({ success: true });
// }



// import { NextResponse } from "next/server";
// import { db } from "../../../../lib/db";
// import { cookies } from "next/headers";
// // import db from "@/lib/db";

// // 🔐 simple cookie auth
// async function isAuthed() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("admin_token");
//   return token?.value === process.env.ADMIN_SECRET;
// }

// // ================== GET ==================
// export async function GET() {
//   const [rows] = await db.query(`
//     SELECT *
//     FROM airdrops
//     ORDER BY order_index ASC, id DESC
//   `);

//   return Response.json(rows);
// }


// // ================== POST (ADD) ==================
// export async function POST(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const body = await req.json();

//   const {
//     project_name = "",
//     image_url = "",
//     rating = 1,
//     stage = "new",
//     campaign_url = "",
//     tags = [],
//   } = body;

//   await db.query(
//     `INSERT INTO airdrops
//      (project_name, image_url, rating, stage, campaign_url, tags)
//      VALUES (?, ?, ?, ?, ?, ?)`,
//     [
//       project_name,
//       image_url,
//       rating,
//       stage,
//       campaign_url,
//       JSON.stringify(tags), // ✅ ALWAYS JSON
//     ]
//   );

//   return NextResponse.json({ success: true });
// }



// // ================== PUT (EDIT / REORDER) ==================
// export async function PUT(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const body = await req.json();

//   // ================= REORDER MODE =================
//   if (Array.isArray(body.items)) {
//     for (const item of body.items) {
//       await db.query(
//         "UPDATE airdrops SET order_index=? WHERE id=?",
//         [item.order_index, item.id]
//       );
//     }

//     return NextResponse.json({ success: true, mode: "reorder" });
//   }

//   // ================= EDIT MODE =================
//   const {
//     id,
//     project_name,
//     image_url,
//     rating,
//     stage,
//     campaign_url,
//     tags,
//   } = body;

//   if (!id) {
//     return NextResponse.json(
//       { error: "Missing ID" },
//       { status: 400 }
//     );
//   }

//   const [res] = await db.query(
//     `
//     UPDATE airdrops SET
//       project_name = ?,
//       image_url = ?,
//       rating = ?,
//       stage = ?,
//       campaign_url = ?,
//       tags = ?
//     WHERE id = ?
//     `,
//     [
//       project_name,
//       image_url,
//       rating,
//       stage,
//       campaign_url,
//       JSON.stringify(tags ?? []),
//       id,
//     ]
//   );

//   return NextResponse.json({
//     success: true,
//     mode: "edit",
//     affectedRows: res.affectedRows,
//   });
// }



// // ================== DELETE ==================
// export async function DELETE(req) {
//   if (!(await isAuthed())) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const { id } = await req.json();
//   await db.query("DELETE FROM airdrops WHERE id=?", [id]);

//   return NextResponse.json({ success: true });
// }




// import { db } from "@/lib/db";
import { db } from "../../../../lib/db";
import { requireAdmin } from "../../../../lib/admin-auth";

// ================= GET =================
export async function GET() {
  const auth = await requireAdmin();
if (auth) return auth;


  const [rows] = await db.query(`
    SELECT *
    FROM airdrops
    ORDER BY order_index ASC, id DESC
  `);

  return Response.json(rows);
}


// ================= POST (ADD) =================
export async function POST(req) {
  const auth = await requireAdmin();
if (auth) return auth;


  const body = await req.json();

  const {
    project_name = "",
    image_url = "",
    rating = 1,
    stage = "new",
    campaign_url = "",
    tags = [],
  } = body;

  await db.query(
    `INSERT INTO airdrops
     (project_name, image_url, rating, stage, campaign_url, tags)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      project_name,
      image_url,
      rating,
      stage,
      campaign_url,
      JSON.stringify(tags),
    ]
  );

  return Response.json({ success: true });
}

// ================= PUT (EDIT DATA) =================
export async function PUT(req) {
  const auth = await requireAdmin();
if (auth) return auth;


  const body = await req.json();

  // EDIT DATA (bukan reorder)
  if (body.id) {
    const {
      id,
      project_name,
      image_url,
      rating,
      stage,
      campaign_url,
      tags,
    } = body;

    await db.query(
      `UPDATE airdrops
       SET project_name=?,
           image_url=?,
           rating=?,
           stage=?,
           campaign_url=?,
           tags=?
       WHERE id=?`,
      [
        project_name,
        image_url,
        rating,
        stage,
        campaign_url,
        JSON.stringify(tags),
        id,
      ]
    );

    return Response.json({ success: true });
  }

  // REORDER
  if (Array.isArray(body.items)) {
    for (const item of body.items) {
      await db.query(
        "UPDATE airdrops SET order_index=? WHERE id=?",
        [item.order_index, item.id]
      );
    }

    return Response.json({ success: true });
  }

  return Response.json({ error: "Invalid payload" }, { status: 400 });
}

// ================= DELETE =================
export async function DELETE(req) {
  const auth = await requireAdmin();
if (auth) return auth;


  const { id } = await req.json();
  await db.query("DELETE FROM airdrops WHERE id=?", [id]);

  return Response.json({ success: true });
}
