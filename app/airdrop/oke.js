'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import 'boxicons/css/boxicons.min.css';
import "../globals.css";
import Cta from '../cta';
import Footer from '../Footer';

export default function PublicTable() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('id')
      setProjects(data || [])
    }
    fetchProjects()
  }, [])

  const filtered = projects.filter((item) =>
    item.project.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="absolute inset-0 -z-10 h-max w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
      <div className='p-6 sm:p-12 max-w-6xl mx-auto text-center mt-24'>
        <a
          href="https://github.com/ibelick/background-snippets"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex pb-4"
        >
          <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full  px-3 py-1 text-xs font-medium leading-5  backdrop-blur-xl bg-black text-slate-200">
              Node & Validator ⚡️
              <span className="inline-flex items-center pl-2 text-white">
                by Prolinkmoon 🡢{' '}
              </span>
            </div>
          </span>
        </a>
        <h2 className="text-center text-2xl sm:text-6xl font-medium text-gray-50">
          Stop Being Poor,{` `}
          <span className="animate-text-gradient inline-flex bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent from-neutral-100 via-slate-400 to-neutral-400">
            Find the Alpha Drop today !!!
          </span>
        </h2>
        <p className="mt-4 sm:mt-6 text-center text-sm sm:text-lg leading-6 text-gray-200">
          Built for true alpha hunters. Explore high-quality airdrops{' '}
          <span className="cursor-wait opacity-70">with concise info </span>
          and take action instantly.
        </p>

        <Cta/>
      </div>




      <div className="px-4 pb-18 max-w-6xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">Alpha Today! 🔥</h1>

        <div className="mb-4 text-gray-300">
          <input
            type="text"
            placeholder="Search project or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300/70 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="w-full overflow-x-auto rounded-lg border border-gray-200/60">
          <table className="min-w-full bg-white/50 text-xs sm:text-sm">
            <thead className="bg-neutral-800 text-gray-200">
              <tr>
                <th className="px-2 py-2 sm:px-3 text-left"></th>
                <th className="px-2 py-2 sm:px-3 text-left">Projects</th>
                <th className="px-2 py-2 sm:px-3 text-left">Raised</th>
                <th className="px-2 py-2 sm:px-3 text-left">Category</th>
                <th className="px-2 py-2 sm:px-3 text-left">Guide</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {filtered.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-400">
                  <td className="px-2 py-1 sm:px-3 sm:py-2">
                    <img
                      src={item.logo}
                      alt={item.project}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm font-medium">
                    {item.project}
                  </td>
                  <td className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
                    {item.raised}
                  </td>
                  <td className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
                    {item.category}
                  </td>
                  <td className="px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm">
                    <a
                      href={item.guide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:underline"
                    >
                      View 🡥
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No matching projects found.
            </p>
          )}
        </div>
      </div>
      < Footer />
    </div>
  )
}
