// 'use client';

// import { useEffect, useState } from 'react';
// import { supabase } from '@/lib/supabase';
// import 'boxicons/css/boxicons.min.css';
// import "../globals.css";
// import { ArrowRight, MoveUpRight } from 'lucide-react';
// import Cta from '../cta';
// import Footer from '../Footer';

// export default function PublicTable() {
//   const [projects, setProjects] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const { data } = await supabase.from('projects').select('*').order('id');
//       setProjects(data || []);
//     };
//     fetchProjects();
//   }, []);

//   const filtered = projects.filter((item) =>
//     item.project.toLowerCase().includes(search.toLowerCase()) ||
//     item.category.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="absolute inset-0 -z-10 h-max w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
//       <div className='p-6 sm:p-12 max-w-6xl mx-auto text-center mt-24'>
//         <a
//           href="https://github.com/ibelick/background-snippets"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex pb-4"
//         >
//           <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
//             <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full  px-3 py-1 text-xs font-medium leading-5  backdrop-blur-xl bg-black text-slate-200">
//               Node & Validator ⚡️
//               <span className="inline-flex gap-1.5 items-center pl-2 text-white">
//                 by Prolinkmoon <ArrowRight size={16}/>
//               </span>
//             </div>
//           </span>
//         </a>
//         <h2 className="text-center text-2xl sm:text-6xl font-medium text-gray-50">
//           Stop Being Poor,{` `}
//           <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">
//             Find the Alpha Drop today !!!
//           </span>
//         </h2>
//         <p className="mt-4 sm:mt-6 text-center text-sm sm:text-lg leading-6 text-gray-200">
//           Built for true alpha hunters. Explore high-quality airdrops{' '}
//           <span className="cursor-wait opacity-70">with concise info </span>
//           and take action instantly.
//         </p>

//         <Cta />
//       </div>

//       <div className="px-4 pb-18 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">Alpha Today! 🔥</h1>

//         <div className="mb-4 text-gray-300">
//           <input
//             type="text"
//             placeholder="Search project or category..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-1/2 border border-gray-300/70 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           />
//         </div>

//         <div className="w-full overflow-x-auto rounded-lg border border-gray-200/60">
//           <table className="min-w-full bg-white/40 text-[14px] md:text-[18px] backdrop-blur-md rounded-md">
//   <thead className="bg-neutral-800 text-gray-200">
//     <tr>
//       <th className="sticky left-0 z-10 bg-neutral-800 px-3 py-2 text-left">Project</th>
//       <th className="px-3 py-2 text-left whitespace-nowrap">Raised</th>
//       <th className="px-3 py-2 text-left whitespace-nowrap">Category</th>
//       <th className="px-3 py-2 text-left whitespace-nowrap">Guide</th>
//     </tr>
//   </thead>
//   <tbody className="text-black">
//     {filtered.map((item) => (
//       <tr key={item.id} className="border-t border-gray-300/40 hover:bg-gray-400/20">
//         <td className="sticky left-0 z-20 bg-white/60 backdrop-blur px-3 py-2 min-w-[140px] sm:min-w-[180px] pr-2">
//   <div className="flex items-center gap-2">
//     <img
//       src={item.logo}
//       alt={item.project}
//       className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
//     />
//     <span className="text-[14px] sm:text-[18px] font-medium truncate max-w-[100px] sm:max-w-none">
//       {item.project}
//     </span>
//   </div>
//         </td>
//         <td className="px-3 py-2 whitespace-nowrap bg-white/60 backdrop-blur">{item.raised}</td>
//         <td className="px-3 py-2 whitespace-nowrap bg-white/60 backdrop-blur">{item.category}</td>
//         <td className="px-3 py-2 whitespace-nowrap bg-white/60 backdrop-blur">
//           <a
//             href={item.guide}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-900 hover:underline"
//           >
//             View
//           </a>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//           {filtered.length === 0 && (
//             <p className="text-center text-gray-500 mt-4">
//               No matching projects found.
//             </p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// import "../globals.css";
// import { ArrowRight } from 'lucide-react';
// import Cta from '../cta';
// import Footer from '../Footer';

// export default function PublicTable() {
//   const [projects, setProjects] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch('/api/airdrops');
//         const data = await res.json();

//         // 🔁 mapping DB → format lama UI
//         const mapped = data.map((item) => ({
//           id: item.id,
//           logo: item.image_url,
//           project: item.project_name,
//           category: Array.isArray(item.tags) ? item.tags.join(', ') : '',
//           raised: `${item.rating} ⭐`,
//           guide: item.campaign_url,
//           stage: item.stage,
//         }));

//         setProjects(mapped);
//       } catch (err) {
//         console.error('Failed fetch airdrops:', err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const filtered = projects.filter((item) =>
//     item.project.toLowerCase().includes(search.toLowerCase()) ||
//     item.category.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="absolute inset-0 -z-10 h-max w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
//       <div className='p-6 sm:p-12 max-w-6xl mx-auto text-center mt-24'>
        // <a
        //   href="https://github.com/ibelick/background-snippets"
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="inline-flex pb-4"
        // >
        //   <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
        //     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
        //     <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl bg-black text-slate-200">
        //       Node & Validator ⚡️
        //       <span className="inline-flex gap-1.5 items-center pl-2 text-white">
        //         by Prolinkmoon <ArrowRight size={16} />
        //       </span>
        //     </div>
        //   </span>
        // </a>

//         <h2 className="text-center text-2xl sm:text-6xl font-medium text-gray-50">
//           Stop Being Poor,{` `}
//           <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">
//             Find the Alpha Drop today !!!
//           </span>
//         </h2>

//         <p className="mt-4 sm:mt-6 text-center text-sm sm:text-lg leading-6 text-gray-200">
//           Built for true alpha hunters. Explore high-quality airdrops{' '}
//           <span className="cursor-wait opacity-70">with concise info </span>
//           and take action instantly.
//         </p>

//         <Cta />
//       </div>

//       <div className="px-4 pb-18 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
//           Alpha Today! 🔥
//         </h1>

//         <div className="mb-4 text-gray-300">
//           <input
//             type="text"
//             placeholder="Search project or category..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-1/2 border border-gray-300/70 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//           />
//         </div>

//         <div className="w-full overflow-x-auto rounded-lg border border-gray-200/60">
//           <table className="min-w-full bg-white/40 text-[14px] md:text-[18px] backdrop-blur-md rounded-md">
//             <thead className="bg-neutral-800 text-gray-200">
//               <tr>
//                 <th className="sticky left-0 z-10 bg-neutral-800 px-3 py-2 text-left">Project</th>
//                 <th className="px-3 py-2 text-left">Raised</th>
//                 <th className="px-3 py-2 text-left">Category</th>
//                 <th className="px-3 py-2 text-left">Guide</th>
//               </tr>
//             </thead>
//             <tbody className="text-black">
//               {filtered.map((item) => (
//                 <tr key={item.id} className="border-t border-gray-300/40 hover:bg-gray-400/20">
//                   <td className="sticky left-0 z-20 bg-white/60 backdrop-blur px-3 py-2">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={item.logo}
//                         alt={item.project}
//                         className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
//                       />
//                       <span className="font-medium">{item.project}</span>
//                     </div>
//                   </td>
//                   <td className="px-3 py-2 bg-white/60">{item.raised}</td>
//                   <td className="px-3 py-2 bg-white/60">{item.category}</td>
//                   <td className="px-3 py-2 bg-white/60">
//                     <a href={item.guide} target="_blank" className="text-blue-900 hover:underline">
//                       View
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {filtered.length === 0 && (
//             <p className="text-center text-gray-500 mt-4">
//               No matching projects found.
//             </p>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// import '../globals.css';
// import { ArrowRight } from 'lucide-react';
// import Cta from '../cta';
// import Footer from '../Footer';

// export default function PublicTable() {
//   const [projects, setProjects] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch('/api/airdrops');
//         const data = await res.json();

//         // mapping DB → UI
//         const mapped = data.map((item) => ({
//           id: item.id,
//           logo: item.image_url,
//           project: item.project_name,
//           category: Array.isArray(item.tags) ? item.tags.join(', ') : '',
//           raised: `${item.rating} ⭐`,
//           guide: item.campaign_url,
//           stage: item.stage,
//         }));

//         setProjects(mapped);
//       } catch (err) {
//         console.error('Failed fetch airdrops:', err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const filtered = projects.filter(
//     (item) =>
//       item.project.toLowerCase().includes(search.toLowerCase()) ||
//       item.category.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="absolute inset-0 -z-10 min-h-screen w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
//       {/* HERO */}
//       <div className="p-6 sm:p-12 max-w-6xl mx-auto text-center mt-24">
        // <a
        //   href="https://github.com/ibelick/background-snippets"
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="inline-flex pb-4"
        // >
        //   <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
        //     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
        //     <div className="inline-flex h-full w-full justify-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-xl bg-black text-slate-200">
        //       Node & Validator ⚡️
        //       <span className="inline-flex gap-1.5 items-center pl-2 text-white">
        //         by Prolinkmoon <ArrowRight size={16} />
        //       </span>
        //     </div>
        //   </span>
        // </a>

//         <h2 className="text-2xl sm:text-6xl font-medium text-gray-50">
//           Stop Being Poor{' '}
//           <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent from-neutral-100 via-slate-400 to-neutral-400">
//             Find the Alpha Drop Today !!!
//           </span>
//         </h2>

//         <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-200">
//           Built for true alpha hunters. Explore high-quality airdrops with concise info.
//         </p>

//         <Cta />
//       </div>

//       {/* TABLE SECTION */}
//       <div className="px-4 pb-24 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200">
//           Alpha Today 🔥
//         </h1>

//         <input
//           type="text"
//           placeholder="Search project or category..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-1/2 mb-6 border border-gray-300/70 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* ================= DESKTOP TABLE ================= */}
//         <div className="hidden md:block w-full overflow-x-auto rounded-lg border border-gray-200/60">
//           <table className="min-w-full bg-white/40 backdrop-blur-md text-sm">
//             <thead className="bg-neutral-800 text-gray-200">
//               <tr>
//                 <th className="px-4 py-3 text-left">Project</th>
//                 <th className="px-4 py-3 text-left">Rating</th>
//                 <th className="px-4 py-3 text-left">Tags</th>
//                 <th className="px-4 py-3 text-left">Stage</th>
//                 <th className="px-4 py-3 text-left">Link</th>
//               </tr>
//             </thead>

//             <tbody className="text-black">
//               {filtered.map((item) => (
//                 <tr key={item.id} className="border-t hover:bg-gray-400/20">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <img src={item.logo} className="w-8 h-8 rounded-full" />
//                       <span className="font-medium">{item.project}</span>
//                     </div>
//                   </td>

//                   <td className="px-4 py-3">{item.raised}</td>

//                   <td className="px-4 py-3">
//                     <div className="flex flex-wrap gap-1">
//                       {item.category.split(',').map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-0.5 text-xs rounded bg-black/80 text-white"
//                         >
//                           {tag.trim()}
//                         </span>
//                       ))}
//                     </div>
//                   </td>

//                   <td className="px-4 py-3">
//                     <span className="px-2 py-1 rounded text-xs bg-blue-900 text-white">
//                       {item.stage}
//                     </span>
//                   </td>

//                   <td className="px-4 py-3">
//                     <a
//                       href={item.guide}
//                       target="_blank"
//                       className="text-blue-900 font-medium hover:underline"
//                     >
//                       View →
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* ================= MOBILE CARDS ================= */}
//         <div className="md:hidden space-y-3">
//           {filtered.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white/60 backdrop-blur rounded-lg p-4 border border-gray-300/40"
//             >
//               <div className="flex items-center gap-3">
//                 <img src={item.logo} className="w-8 h-8 rounded-full" />
//                 <div className="flex-1">
//                   <p className="font-semibold">{item.project}</p>
//                   <p className="text-sm opacity-70">{item.raised}</p>
//                 </div>
//                 <a
//                   href={item.guide}
//                   target="_blank"
//                   className="text-blue-900 font-bold"
//                 >
//                   →
//                 </a>
//               </div>

//               <div className="flex flex-wrap gap-1 mt-2">
//                 {item.category.split(',').map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-2 py-0.5 text-xs rounded bg-black/80 text-white"
//                   >
//                     {tag.trim()}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-2">
//                 <span className="inline-block px-2 py-1 text-xs rounded bg-blue-900 text-white">
//                   {item.stage}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <p className="text-center text-gray-400 mt-6">
//             No matching projects found.
//           </p>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../globals.css';
import { ArrowRight } from 'lucide-react';
import Cta from '../cta';
import Footer from '../Footer';

export default function PublicTable() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/airdrops');
        const data = await res.json();

        // DB → UI mapping
        const mapped = data.map((item) => ({
          id: item.id,
          logo: item.image_url,
          project: item.project_name,
          category: Array.isArray(item.tags) ? item.tags.join(', ') : '',
          raised: renderFireRating(item.rating),
          guide: item.campaign_url,
          stage: item.stage,
        }));

        setProjects(mapped);
      } catch (err) {
        console.error('Failed fetch airdrops:', err);
      }
    };

    fetchProjects();
  }, []);

  const filtered = projects.filter(
    (item) =>
      item.project.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderFireRating = (rating) => {
  const count = Number(rating) || 0;
  return '🔥'.repeat(Math.min(count, 5));
  };


  // === STAGE COLOR (DefiLlama style) ===
  const stageStyle = (stage) => {
    switch (stage) {
      case 'new':
        return 'bg-green-600/90 text-white';
      case 'mid':
        return 'bg-yellow-400 text-black';
      case 'late':
        return 'bg-red-500/40 text-white';
      case 'end':
        return 'bg-red-700 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="absolute inset-0 -z-10 min-h-max w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
      {/* HERO */}
      <div className="p-6 sm:p-12 max-w-6xl mx-auto text-center mt-24">
        <a
          href="/node"
          // target="_blank"
          rel="noopener noreferrer"
          className="inline-flex pb-4"
        >
          <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl bg-black text-slate-200">
              Node & Validator ⚡️
              <span className="inline-flex gap-1.5 items-center pl-2 text-white">
                by Prolinkmoon <ArrowRight size={16} />
              </span>
            </div>
          </span>
        </a>
        <h2 className="text-2xl sm:text-6xl font-medium text-gray-50">
          Stop Being Poor{' '}
          <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent from-neutral-100 via-slate-400 to-neutral-400">
            Find the Alpha Drop Today !!!
          </span>
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-200">
          Built for true alpha hunters. Explore high-quality airdrops with concise info.
        </p>

        <Cta />
      </div>

      {/* TABLE */}
      <div className="px-4 pb-24 max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200">
          Alpha Today 🔥
        </h1>

        <input
          type="text"
          placeholder="Search project or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 mb-6 border border-gray-300/70 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
        />

        {/* ===== DESKTOP TABLE ===== */}
        <div className="hidden md:block w-full overflow-x-auto rounded-lg border border-gray-200/60">
          <table className="min-w-full bg-white/40 backdrop-blur-md text-sm">
            <thead className="bg-neutral-800 text-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">Project</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Tags</th>
                <th className="px-4 py-3 text-left">Stage</th>
                <th className="px-4 py-3 text-left">Link</th>
              </tr>
            </thead>

            <tbody className="text-black">
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-400/20 transition"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.logo}
                        alt={item.project}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium">{item.project}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3">{item.raised}</td>

                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {item.category.split(',').map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded bg-black/80 text-white"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${stageStyle(
                        item.stage
                      )}`}
                    >
                      {item.stage.toUpperCase()}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <a
                      href={item.guide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 font-medium hover:underline"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

{/* ===== MOBILE CARDS (CLICKABLE) ===== */}
<div className="md:hidden space-y-4">
  {filtered.map((item) => (
    <a
      key={item.id}
      href={item.guide}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur p-4 shadow-lg active:scale-[0.98] transition">
        {/* TOP */}
        <div className="flex items-center gap-3">
          <img
            src={item.logo}
            alt={item.project}
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate">
              {item.project}
            </p>
            <p className="text-sm text-orange-400">
              {item.raised}
            </p>
          </div>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-1 mt-3">
          {item.category.split(",").slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] rounded bg-white/10 text-gray-300"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-3">
          <span
            className={`px-2.5 py-1 text-[11px] rounded font-semibold ${stageStyle(
              item.stage
            )}`}
          >
            {item.stage.toUpperCase()}
          </span>

          <span className="text-xs text-gray-400">
            Tap to view →
          </span>
        </div>
      </div>
    </a>
  ))}
</div>



        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-6">
            No matching projects found.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
