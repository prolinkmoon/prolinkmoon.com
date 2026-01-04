// 'use client';

// import { useState } from 'react';

// export default function AdminPage() {
//   const [form, setForm] = useState({
//     project_name: '',
//     image_url: '',
//     campaign_url: '',
//     rating: 3,
//     stage: 'Early',
//     tags: ''
//   });

//   const submit = async () => {
//     await fetch('/api/admin/airdrops', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-admin-key': process.env.NEXT_PUBLIC_ADMIN_KEY
//       },
//       body: JSON.stringify({
//         ...form,
//         tags: form.tags.split(',').map(t => t.trim())
//       })
//     });

//     alert('Airdrop added 🚀');
//   };

//   return (
//     <div className="p-8 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

//       {Object.keys(form).map((key) => (
//         <input
//           key={key}
//           placeholder={key}
//           value={form[key]}
//           onChange={(e) =>
//             setForm({ ...form, [key]: e.target.value })
//           }
//           className="w-full mb-3 p-2 border rounded"
//         />
//       ))}

//       <button
//         onClick={submit}
//         className="bg-black text-white px-4 py-2 rounded"
//       >
//         Save
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';

// export default function AdminDashboard() {
//   const [data, setData] = useState([]);

//   const load = async () => {
//     const res = await fetch('/api/admin/airdrops');
//     if (res.status === 401) {
//       window.location.href = '/admin/login';
//       return;
//     }
//     setData(await res.json());
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const update = async (id, field, value) => {
//     await fetch('/api/admin/airdrops', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id, field, value })
//     });
//   };

//   const remove = async (id) => {
//     if (!confirm('Delete this airdrop?')) return;
//     await fetch('/api/admin/airdrops', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id })
//     });
//     load();
//   };

//   return (
//     <div className="p-6 bg-neutral-500">
//       <h1 className="text-2xl font-bold mb-4">Admin Airdrops</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border">
//           <thead className="bg-neutral-800 text-white">
//             <tr>
//               <th className="p-2">Project</th>
//               <th className="p-2">Rating</th>
//               <th className="p-2">Stage</th>
//               <th className="p-2">Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((row) => (
//               <tr key={row.id} className="border-t">
//                 <td className="p-2">
//                   <input
//                     defaultValue={row.project_name}
//                     onBlur={(e) =>
//                       update(row.id, 'project_name', e.target.value)
//                     }
//                     className="w-full border p-1"
//                   />
//                 </td>

//                 <td className="p-2">
//                   <input
//                     type="number"
//                     defaultValue={row.rating}
//                     onBlur={(e) =>
//                       update(row.id, 'rating', e.target.value)
//                     }
//                     className="w-16 border p-1"
//                   />
//                 </td>

//                 <td className="p-2">
//                   <select
//                     defaultValue={row.stage}
//                     onChange={(e) =>
//                       update(row.id, 'stage', e.target.value)
//                     }
//                   >
//                     <option>Early</option>
//                     <option>Mid</option>
//                     <option>Late</option>
//                   </select>
//                 </td>

//                 <td className="p-2">
//                   <button
//                     onClick={() => remove(row.id)}
//                     className="text-red-600"
//                   >
//                     ✕
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import { Plus, Trash } from 'lucide-react';

// export default function AdminDashboard() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const emptyRow = {
//     project_name: '',
//     image_url: '',
//     rating: 1,
//     stage: 'Early',
//     campaign_url: '',
//     tags: ''
//   };

//   const fetchData = async () => {
//     const res = await fetch('/api/admin/airdrops');
//     if (res.status === 401) {
//       window.location.href = '/admin/login';
//       return;
//     }
//     const data = await res.json();
//     setRows(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const update = async (id, field, value) => {
//     await fetch('/api/admin/airdrops', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id, field, value })
//     });
//   };

//   const create = async () => {
//     const res = await fetch('/api/admin/airdrops', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(emptyRow)
//     });

//     const newRow = await res.json();
//     setRows([newRow, ...rows]);
//   };

//   const remove = async (id) => {
//     if (!confirm('Delete this airdrop?')) return;
//     await fetch('/api/admin/airdrops', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id })
//     });
//     setRows(rows.filter((r) => r.id !== id));
//   };

//   if (loading) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Admin · Airdrops</h1>
//         <button
//           onClick={create}
//           className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded"
//         >
//           <Plus size={16} /> Add
//         </button>
//       </div>

//       <div className="overflow-x-auto border rounded">
//         <table className="min-w-full text-sm">
//           <thead className="bg-neutral-900 text-white">
//             <tr>
//               <th className="p-2">Project</th>
//               <th className="p-2">Logo</th>
//               <th className="p-2">🔥</th>
//               <th className="p-2">Stage</th>
//               <th className="p-2">Tags</th>
//               <th className="p-2">Guide</th>
//               <th className="p-2 w-10"></th>
//             </tr>
//           </thead>

//           <tbody>
//             {rows.map((row) => (
//               <tr
//                 key={row.id}
//                 className="border-t hover:bg-gray-100"
//               >
//                 {/* PROJECT */}
//                 <td className="p-2">
//                   <input
//                     defaultValue={row.project_name}
//                     onBlur={(e) =>
//                       update(row.id, 'project_name', e.target.value)
//                     }
//                     className="w-full bg-transparent border-b focus:outline-none"
//                   />
//                 </td>

//                 {/* LOGO */}
//                 <td className="p-2">
//                   <input
//                     defaultValue={row.image_url}
//                     onBlur={(e) =>
//                       update(row.id, 'image_url', e.target.value)
//                     }
//                     className="w-full bg-transparent border-b focus:outline-none"
//                   />
//                 </td>

//                 {/* RATING */}
//                 <td className="p-2 text-center">
//                   <input
//                     type="number"
//                     min="1"
//                     max="5"
//                     defaultValue={row.rating}
//                     onBlur={(e) =>
//                       update(row.id, 'rating', e.target.value)
//                     }
//                     className="w-12 text-center border rounded"
//                   />
//                 </td>

//                 {/* STAGE */}
//                 <td className="p-2">
//                   <select
//                     defaultValue={row.stage}
//                     onChange={(e) =>
//                       update(row.id, 'stage', e.target.value)
//                     }
//                     className="border rounded px-2 py-1"
//                   >
//                     <option>Early</option>
//                     <option>Mid</option>
//                     <option>Late</option>
//                   </select>
//                 </td>

//                 {/* TAGS */}
//                 <td className="p-2">
//                   <input
//                     defaultValue={row.tags}
//                     onBlur={(e) =>
//                       update(row.id, 'tags', e.target.value)
//                     }
//                     className="w-full bg-transparent border-b focus:outline-none"
//                   />
//                 </td>

//                 {/* GUIDE */}
//                 <td className="p-2">
//                   <input
//                     defaultValue={row.campaign_url}
//                     onBlur={(e) =>
//                       update(row.id, 'campaign_url', e.target.value)
//                     }
//                     className="w-full bg-transparent border-b focus:outline-none"
//                   />
//                 </td>

//                 {/* DELETE */}
//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => remove(row.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <Trash size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { Plus, Trash } from 'lucide-react';

// const stageStyle = {
//   new: 'bg-green-600/90 text-white',
//   mid: 'bg-yellow-400 text-black',
//   late: 'bg-red-500/40 text-white',
//   end: 'bg-red-700 text-white'
// };

// export default function AdminDashboard() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const emptyRow = {
//     project_name: '',
//     image_url: '',
//     rating: 1,
//     stage: 'new',
//     campaign_url: '',
//     tags: ''
//   };

//   const fetchData = async () => {
//     const res = await fetch('/api/admin/airdrops');
//     if (res.status === 401) {
//       window.location.href = '/admin/login';
//       return;
//     }
//     const data = await res.json();
//     setRows(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const update = async (id, field, value) => {
//     await fetch('/api/admin/airdrops', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id, field, value })
//     });
//   };

//   const create = async () => {
//     const res = await fetch('/api/admin/airdrops', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(emptyRow)
//     });
//     const newRow = await res.json();
//     setRows([newRow, ...rows]);
//   };

//   const remove = async (id) => {
//     if (!confirm('Delete this airdrop?')) return;
//     await fetch('/api/admin/airdrops', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id })
//     });
//     setRows(rows.filter((r) => r.id !== id));
//   };

//   if (loading) return <div className="p-6 text-white">Loading...</div>;

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-zinc-800 to-neutral-900 text-gray-100 pt-28">
//       <div className="p-6 max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold">Admin · Airdrops</h1>
//           <button
//             onClick={create}
//             className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
//           >
//             <Plus size={16} /> Add
//           </button>
//         </div>

//         <div className="overflow-x-auto rounded-lg border border-white/20 backdrop-blur bg-white/10">
//           <table className="min-w-full text-sm">
//             <thead className="bg-black/60 text-gray-200">
//               <tr>
//                 <th className="p-3 text-left">Project</th>
//                 <th className="p-3 text-left">Logo</th>
//                 <th className="p-3 text-center">🔥</th>
//                 <th className="p-3 text-left">Stage</th>
//                 <th className="p-3 text-left">Tags</th>
//                 <th className="p-3 text-left">Guide</th>
//                 <th className="p-3 w-10"></th>
//               </tr>
//             </thead>

//             <tbody>
//               {rows.map((row) => (
//                 <tr
//                   key={row.id}
//                   className="border-t border-white/10 hover:bg-white/10"
//                 >
//                   {/* PROJECT */}
//                   <td className="p-3">
//                     <input
//                       defaultValue={row.project_name}
//                       onBlur={(e) =>
//                         update(row.id, 'project_name', e.target.value)
//                       }
//                       className="w-full bg-transparent border-b border-white/30 focus:outline-none"
//                     />
//                   </td>

//                   {/* LOGO */}
//                   <td className="p-3">
//                     <input
//                       defaultValue={row.image_url}
//                       onBlur={(e) =>
//                         update(row.id, 'image_url', e.target.value)
//                       }
//                       className="w-full bg-transparent border-b border-white/30 focus:outline-none"
//                     />
//                   </td>

//                   {/* RATING */}
//                   <td className="p-3 text-center">
//                     <input
//                       type="number"
//                       min="1"
//                       max="5"
//                       defaultValue={row.rating}
//                       onBlur={(e) =>
//                         update(row.id, 'rating', e.target.value)
//                       }
//                       className="w-14 text-center bg-black/40 border border-white/20 rounded"
//                     />
//                   </td>

//                   {/* STAGE */}
//                   <td className="p-3">
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`px-2 py-1 rounded text-xs font-semibold ${stageStyle[row.stage]}`}
//                       >
//                         {row.stage}
//                       </span>
//                       <select
//                         defaultValue={row.stage}
//                         onChange={(e) =>
//                           update(row.id, 'stage', e.target.value)
//                         }
//                         className="bg-black/50 border border-white/20 rounded px-2 py-1 text-xs"
//                       >
//                         <option value="new">new</option>
//                         <option value="mid">mid</option>
//                         <option value="late">late</option>
//                         <option value="end">end</option>
//                       </select>
//                     </div>
//                   </td>

//                   {/* TAGS */}
//                   <td className="p-3">
//                     <input
//                       defaultValue={row.tags}
//                       onBlur={(e) =>
//                         update(row.id, 'tags', e.target.value)
//                       }
//                       className="w-full bg-transparent border-b border-white/30 focus:outline-none"
//                     />
//                   </td>

//                   {/* GUIDE */}
//                   <td className="p-3">
//                     <input
//                       defaultValue={row.campaign_url}
//                       onBlur={(e) =>
//                         update(row.id, 'campaign_url', e.target.value)
//                       }
//                       className="w-full bg-transparent border-b border-white/30 focus:outline-none"
//                     />
//                   </td>

//                   {/* DELETE */}
//                   <td className="p-3 text-center">
//                     <button
//                       onClick={() => remove(row.id)}
//                       className="text-red-400 hover:text-red-600"
//                     >
//                       <Trash size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';

// export default function AdminPage() {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     project_name: '',
//     image_url: '',
//     rating: 3,
//     stage: 'new',
//     campaign_url: '',
//     tags: ''
//   });

//   const load = async () => {
//     const res = await fetch('/api/admin/airdrops');
//     if (res.status === 401) {
//       window.location.href = '/admin/login';
//       return;
//     }
//     setData(await res.json());
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const fireEmoji = (n) => '🔥'.repeat(n);

//   const stageColor = (stage) => {
//     if (stage === 'new') return 'bg-green-600';
//     if (stage === 'mid') return 'bg-yellow-500 text-black';
//     if (stage === 'late') return 'bg-red-500/70';
//     return 'bg-red-900';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900 text-white p-6">

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="px-4 py-2 rounded bg-green-600"
//         >
//           + Add Airdrop
//         </button>
//       </div>

//       {/* TABLE */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white/10 backdrop-blur rounded">
//           <thead>
//             <tr className="text-left">
//               <th className="p-3">Project</th>
//               <th className="p-3">Rating</th>
//               <th className="p-3">Stage</th>
//               <th className="p-3">Tags</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row) => (
//               <tr key={row.id} className="border-t border-white/10">
//                 <td className="p-3 flex items-center gap-2">
//                   <img src={row.image_url} className="w-6 h-6 rounded-full" />
//                   {row.project_name}
//                 </td>
//                 <td className="p-3">{fireEmoji(row.rating)}</td>
//                 <td className="p-3">
//                   <span className={`px-2 py-1 rounded text-xs ${stageColor(row.stage)}`}>
//                     {row.stage}
//                   </span>
//                 </td>
//                 <td className="p-3 text-sm">
//                   {JSON.parse(row.tags).join(', ')}
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={async () => {
//                       await fetch('/api/admin/airdrops', {
//                         method: 'DELETE',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify({ id: row.id })
//                       });
//                       load();
//                     }}
//                     className="text-red-400 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ADD POPUP */}
//       {open && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-neutral-900 p-6 rounded-xl w-full max-w-md">
//             <h2 className="text-lg font-bold mb-4">Add Airdrop</h2>

//             {['project_name','image_url','campaign_url','tags'].map((f) => (
//               <input
//                 key={f}
//                 placeholder={f}
//                 className="w-full mb-2 px-3 py-2 rounded bg-black/40"
//                 onChange={(e)=>setForm({...form,[f]:e.target.value})}
//               />
//             ))}

//             <select
//               className="w-full mb-2 px-3 py-2 rounded bg-black/40"
//               onChange={(e)=>setForm({...form,stage:e.target.value})}
//             >
//               <option value="new">new</option>
//               <option value="mid">mid</option>
//               <option value="late">late</option>
//               <option value="end">end</option>
//             </select>

//             <input
//               type="number"
//               min="1"
//               max="5"
//               className="w-full mb-3 px-3 py-2 rounded bg-black/40"
//               value={form.rating}
//               onChange={(e)=>setForm({...form,rating:+e.target.value})}
//             />

//             <button
//               className="w-full py-2 bg-green-600 rounded"
//               onClick={async () => {
//                 await fetch('/api/admin/airdrops', {
//                   method: 'POST',
//                   headers: { 'Content-Type': 'application/json' },
//                   body: JSON.stringify({
//                     ...form,
//                     tags: form.tags
//                       .split(',')
//                       .map(t=>t.trim())
//                       .filter(Boolean)
//                   })
//                 });
//                 setOpen(false);
//                 load();
//               }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";

// // 🔥 SAFE TAG PARSER
// function parseTags(tags) {
//   if (!tags) return [];
//   if (Array.isArray(tags)) return tags;

//   try {
//     return JSON.parse(tags);
//   } catch {
//     return tags
//       .split(",")
//       .map(t => t.trim())
//       .filter(Boolean);
//   }
// }

// export default function AdminPage() {
//   const [rows, setRows] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState(null);

//   async function load() {
//     const res = await fetch("/api/admin/airdrops");
//     const data = await res.json();
//     setRows(data);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   async function save() {
//     const payload = {
//       ...form,
//       tags: parseTags(form.tags),
//     };

//     await fetch("/api/admin/airdrops", {
//       method: form.id ? "PUT" : "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     setOpen(false);
//     setForm(null);
//     load();
//   }

//   async function remove(id) {
//     if (!confirm("Delete this project?")) return;
//     await fetch("/api/admin/airdrops", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     load();
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 p-6 text-white pt-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Admin – Airdrops</h1>
//           <button
//             onClick={() => {
//               setForm({
//                 project_name: "",
//                 image_url: "",
//                 rating: 1,
//                 stage: "new",
//                 campaign_url: "",
//                 tags: "",
//               });
//               setOpen(true);
//             }}
//             className="px-4 py-2 bg-blue-600 rounded"
//           >
//             + Add
//           </button>
//         </div>

//         <div className="overflow-x-auto rounded-lg border border-white/10">
//           <table className="w-full text-sm">
//             <thead className="bg-neutral-800">
//               <tr>
//                 <th className="p-3 text-left">Project</th>
//                 <th>🔥</th>
//                 <th>Stage</th>
//                 <th>Tags</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map(r => (
//                 <tr key={r.id} className="border-t border-white/10">
//                   <td className="p-3">{r.project_name}</td>
//                   <td>{"🔥".repeat(r.rating)}</td>
//                   <td className="capitalize">{r.stage}</td>
//                   <td>
//                     {parseTags(r.tags).map(t => (
//                       <span key={t} className="mr-1 opacity-70">
//                         #{t}
//                       </span>
//                     ))}
//                   </td>
//                   <td className="text-right">
//                     <button
//                       onClick={() => {
//                         setForm({
//                           ...r,
//                           tags: parseTags(r.tags).join(", "),
//                         });
//                         setOpen(true);
//                       }}
//                       className="mr-2 opacity-70 hover:opacity-100"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => remove(r.id)}
//                       className="text-red-400"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* ===== POPUP ===== */}
//         {open && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//             <div className="bg-neutral-900 p-6 rounded-lg w-full max-w-md">
//               <h2 className="font-bold mb-4">
//                 {form.id ? "Edit" : "Add"} Project
//               </h2>

//               {[
//                 ["project_name", "Project Name"],
//                 ["image_url", "Image URL"],
//                 ["campaign_url", "Campaign URL"],
//                 ["tags", "Tags (comma)"],
//               ].map(([k, label]) => (
//                 <input
//                   key={k}
//                   placeholder={label}
//                   value={form[k]}
//                   onChange={e =>
//                     setForm({ ...form, [k]: e.target.value })
//                   }
//                   className="w-full mb-2 px-3 py-2 bg-black border border-white/10 rounded"
//                 />
//               ))}

//               <select
//                 value={form.stage}
//                 onChange={e =>
//                   setForm({ ...form, stage: e.target.value })
//                 }
//                 className="w-full mb-2 bg-black border border-white/10 px-3 py-2"
//               >
//                 <option value="new">New</option>
//                 <option value="mid">Mid</option>
//                 <option value="late">Late</option>
//                 <option value="end">End</option>
//               </select>

//               <input
//                 type="number"
//                 min="1"
//                 max="5"
//                 value={form.rating}
//                 onChange={e =>
//                   setForm({ ...form, rating: Number(e.target.value) })
//                 }
//                 className="w-full mb-4 bg-black border border-white/10 px-3 py-2"
//               />

//               <div className="flex justify-end gap-2">
//                 <button onClick={() => setOpen(false)}>Cancel</button>
//                 <button
//                   onClick={save}
//                   className="px-4 py-2 bg-blue-600 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   DndContext,
//   closestCenter
// } from "@dnd-kit/core";

// import {
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy
// } from "@dnd-kit/sortable";

// import { CSS } from "@dnd-kit/utilities";


// // ===== SAFE TAG PARSER =====
// function parseTags(tags) {
//   if (!tags) return [];
//   if (Array.isArray(tags)) return tags;

//   try {
//     return JSON.parse(tags);
//   } catch {
//     return tags
//       .split(",")
//       .map(t => t.trim())
//       .filter(Boolean);
//   }
// }

// export default function AdminPage() {
//   const router = useRouter();
//   const [rows, setRows] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState(null);

//   async function load() {
//     const res = await fetch("/api/admin/airdrops");

//     // 🔐 HANDLE UNAUTH
//     if (res.status === 401) {
//       router.replace("/admin/login");
//       return;
//     }

//     const data = await res.json();

//     // 🛡️ SAFETY
//     if (!Array.isArray(data)) {
//       setRows([]);
//       return;
//     }

//     setRows(data);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   async function save() {
//     await fetch("/api/admin/airdrops", {
//       method: form.id ? "PUT" : "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         tags: parseTags(form.tags),
//       }),
//     });

//     setOpen(false);
//     setForm(null);
//     load();
//   }

//   async function remove(id) {
//     if (!confirm("Delete this project?")) return;

//     await fetch("/api/admin/airdrops", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });

//     load();
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 p-6 text-white pt-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Prolinkmoon – Admin</h1>
//           <button
//             onClick={() => {
//               setForm({
//                 project_name: "",
//                 image_url: "",
//                 rating: 1,
//                 stage: "new",
//                 campaign_url: "",
//                 tags: "",
//               });
//               setOpen(true);
//             }}
//             className="px-4 py-2 bg-blue-600 rounded"
//           >
//             + Add
//           </button>
//         </div>

// <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
//   <table className="w-full border-collapse text-sm">
//     <thead>
//       <tr className="bg-neutral-800 text-gray-300">
//         <th className="px-4 py-3 text-left w-[22%]">Project</th>
//         <th className="px-4 py-3 text-center w-[8%]">Rate 🔥</th>
//         <th className="px-4 py-3 text-center w-[10%]">Stage</th>
//         <th className="px-4 py-3 text-left w-[45%]">Tags</th>
//         <th className="px-4 py-3 text-right w-[15%]"></th>
//       </tr>
//     </thead>

//     <tbody>
//       {rows.map((r) => (
//         <tr
//           key={r.id}
//           className="border-t border-white/10 hover:bg-white/5 transition"
//         >
//           {/* PROJECT */}
//           <td className="px-4 py-3 font-medium text-white">
//             {r.project_name}
//           </td>

//           {/* RATING */}
//           <td className="px-4 py-3 text-center">
//             <span className="tracking-tight">
//               {"🔥".repeat(r.rating)}
//             </span>
//           </td>

//           {/* STAGE */}
//           <td className="px-4 py-3 text-center">
//             <span
//               className={`px-2 py-1 text-xs rounded font-medium
//                 ${r.stage === "new" && "bg-green-500/20 text-green-400"}
//                 ${r.stage === "mid" && "bg-yellow-500/20 text-yellow-400"}
//                 ${r.stage === "late" && "bg-red-500/20 text-red-400"}
//                 ${r.stage === "end" && "bg-red-600 text-white"}
//               `}
//             >
//               {r.stage.toUpperCase()}
//             </span>
//           </td>

//           {/* TAGS */}
//           <td className="px-4 py-3">
//             <div className="flex flex-wrap gap-1">
//               {parseTags(r.tags).map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-2 py-0.5 text-xs rounded bg-white/10 text-gray-300"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </td>

//           {/* ACTION */}
//           <td className="px-4 py-3 text-right whitespace-nowrap">
//             <button
//               onClick={() => {
//                 setForm({
//                   ...r,
//                   tags: parseTags(r.tags).join(", "),
//                 });
//                 setOpen(true);
//               }}
//               className="mr-3 text-gray-400 hover:text-white"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => remove(r.id)}
//               className="text-red-400 hover:text-red-300"
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       ))}

//       {rows.length === 0 && (
//         <tr>
//           <td colSpan={5} className="py-10 text-center text-gray-500">
//             No data
//           </td>
//         </tr>
//       )}
//     </tbody>
//   </table>
// </div>


//         {/* ===== POPUP ===== */}
//         {open && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//             <div className="bg-neutral-900 p-6 rounded-lg w-full max-w-md">
//               <h2 className="font-bold mb-4">
//                 {form.id ? "Edit" : "Add"} Project
//               </h2>

//               {[
//                 ["project_name", "Project Name"],
//                 ["image_url", "Image URL"],
//                 ["campaign_url", "Campaign URL"],
//                 ["tags", "Tags (comma)"],
//               ].map(([k, label]) => (
//                 <input
//                   key={k}
//                   placeholder={label}
//                   value={form[k]}
//                   onChange={e =>
//                     setForm({ ...form, [k]: e.target.value })
//                   }
//                   className="w-full mb-2 px-3 py-2 bg-black border border-white/10 rounded"
//                 />
//               ))}

//               <select
//                 value={form.stage}
//                 onChange={e =>
//                   setForm({ ...form, stage: e.target.value })
//                 }
//                 className="w-full mb-2 bg-black border border-white/10 px-3 py-2"
//               >
//                 <option value="new">New</option>
//                 <option value="mid">Mid</option>
//                 <option value="late">Late</option>
//                 <option value="end">End</option>
//               </select>

//               <input
//                 type="number"
//                 min="1"
//                 max="5"
//                 value={form.rating}
//                 onChange={e =>
//                   setForm({ ...form, rating: Number(e.target.value) })
//                 }
//                 className="w-full mb-4 bg-black border border-white/10 px-3 py-2"
//               />

//               <div className="flex justify-end gap-2">
//                 <button onClick={() => setOpen(false)}>Cancel</button>
//                 <button
//                   onClick={save}
//                   className="px-4 py-2 bg-blue-600 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

/* ================= SAFE TAG PARSER ================= */
function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;

  try {
    return JSON.parse(tags);
  } catch {
    return tags
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);
  }
}

/* ================= SORTABLE ROW ================= */
function SortableRow({ row, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className="border-t border-white/10 hover:bg-white/5 transition"
    >
      {/* DRAG HANDLE */}
      <td
        {...attributes}
        {...listeners}
        className="px-3 text-gray-500 cursor-grab select-none"
        title="Drag to reorder"
      >
        ☰
      </td>
      {children}
    </tr>
  );
}

/* ================= PAGE ================= */
export default function AdminPage() {
  const router = useRouter();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(null);

  /* ================= LOAD ================= */
  async function load() {
    const res = await fetch("/api/admin/airdrops");

    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }

    const data = await res.json();
    setRows(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
  async function checkAuth() {
    const res = await fetch("/api/admin/airdrops");

    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      setRows([]);
      return;
    }

    setRows(data);
  }

  checkAuth();
}, []);

    
  /* ================= SAVE ADD / EDIT ================= */
  async function save() {
    await fetch("/api/admin/airdrops", {
      method: form.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: parseTags(form.tags),
      }),
    });

    setOpen(false);
    setForm(null);
    load();
  }

  /* ================= DELETE ================= */
  async function remove(id) {
    if (!confirm("Delete this project?")) return;

    await fetch("/api/admin/airdrops", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    load();
  }

  /* ================= DRAG END ================= */
  async function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setRows(prev => {
      const oldIndex = prev.findIndex(i => i.id === active.id);
      const newIndex = prev.findIndex(i => i.id === over.id);

      const reordered = arrayMove(prev, oldIndex, newIndex)
        .map((item, idx) => ({
          ...item,
          order_index: idx,
        }));

      // 🔥 sync order to backend
      fetch("/api/admin/airdrops", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: reordered.map(i => ({
            id: i.id,
            order_index: i.order_index,
          })),
        }),
      });

      return reordered;
    });
  }

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 p-6 text-white pt-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Prolinkmoon – Admin</h1>
          <button
            onClick={() => {
              setForm({
                project_name: "",
                image_url: "",
                rating: 1,
                stage: "new",
                campaign_url: "",
                tags: "",
              });
              setOpen(true);
            }}
            className="px-4 py-2 bg-blue-600 rounded"
          >
            + Add
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={rows.map(r => r.id)}
              strategy={verticalListSortingStrategy}
            >
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-neutral-800 text-gray-300">
                    <th className="w-[3%]"></th>
                    <th className="px-4 py-3 text-left w-[22%]">Project</th>
                    <th className="px-4 py-3 text-center w-[8%]">🔥</th>
                    <th className="px-4 py-3 text-center w-[10%]">Stage</th>
                    <th className="px-4 py-3 text-left w-[42%]">Tags</th>
                    <th className="px-4 py-3 text-right w-[15%]"></th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map(r => (
                    <SortableRow key={r.id} row={r}>
                      {/* PROJECT */}
                      <td className="px-4 py-3 font-medium">
                        {r.project_name}
                      </td>

                      {/* RATING */}
                      <td className="px-4 py-3 text-center">
                        {"🔥".repeat(r.rating)}
                      </td>

                      {/* STAGE */}
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`px-2 py-1 text-xs rounded font-medium
                            ${r.stage === "new" && "bg-green-500/20 text-green-400"}
                            ${r.stage === "mid" && "bg-yellow-500/20 text-yellow-400"}
                            ${r.stage === "late" && "bg-orange-500/20 text-orange-400"}
                            ${r.stage === "end" && "bg-red-600 text-white"}
                          `}
                        >
                          {r.stage.toUpperCase()}
                        </span>
                      </td>

                      {/* TAGS */}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {parseTags(r.tags).map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs rounded bg-white/10 text-gray-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* ACTION */}
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            setForm({
                              ...r,
                              tags: parseTags(r.tags).join(", "),
                            });
                            setOpen(true);
                          }}
                          className="mr-3 text-gray-400 hover:text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => remove(r.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </SortableRow>
                  ))}

                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-10 text-center text-gray-500">
                        No data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </SortableContext>
          </DndContext>
        </div>

        {/* POPUP */}
        {open && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-neutral-900 p-6 rounded-lg w-full max-w-md">
              <h2 className="font-bold mb-4">
                {form.id ? "Edit" : "Add"} Project
              </h2>

              {[
                ["project_name", "Project Name"],
                ["image_url", "Image URL"],
                ["campaign_url", "Campaign URL"],
                ["tags", "Tags (comma)"],
              ].map(([k, label]) => (
                <input
                  key={k}
                  placeholder={label}
                  value={form[k]}
                  onChange={e =>
                    setForm({ ...form, [k]: e.target.value })
                  }
                  className="w-full mb-2 px-3 py-2 bg-black border border-white/10 rounded"
                />
              ))}

              <select
                value={form.stage}
                onChange={e =>
                  setForm({ ...form, stage: e.target.value })
                }
                className="w-full mb-2 bg-black border border-white/10 px-3 py-2"
              >
                <option value="new">New</option>
                <option value="mid">Mid</option>
                <option value="late">Late</option>
                <option value="end">End</option>
              </select>

              <input
                type="number"
                min="1"
                max="5"
                value={form.rating}
                onChange={e =>
                  setForm({ ...form, rating: Number(e.target.value) })
                }
                className="w-full mb-4 bg-black border border-white/10 px-3 py-2"
              />

              <div className="flex justify-end gap-2">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button
                  onClick={save}
                  className="px-4 py-2 bg-blue-600 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
