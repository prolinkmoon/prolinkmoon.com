// import { db } from "@/lib/db";



// import { NextResponse } from "next/server";

// export async function GET() {
//   const [rows] = await db.query(`
//     SELECT
//       id,
//       image_url,
//       project_name,
//       tags,
//       rating,
//       campaign_url,
//       stage
//     FROM airdrops
//     ORDER BY created_at DESC
//   `);

//   return NextResponse.json(rows);
// }

// import { db } from "@/lib/db";
import { db } from "../../../lib/db";

export async function GET() {
  const [rows] = await db.query(`
    SELECT *
    FROM airdrops
    ORDER BY order_index ASC, id DESC
  `);

  return Response.json(rows);
}
