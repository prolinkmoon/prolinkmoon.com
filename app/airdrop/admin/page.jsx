'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase' // pastikan sudah buat supabase client

export default function AdminPage() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({ logo: '', project: '', raised: '', category: '', guide: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    setLoading(true)
    const { data, error } = await supabase.from('projects').select('*').order('id')
    if (error) alert('Gagal mengambil data: ' + error.message)
    else setProjects(data || [])
    setLoading(false)
  }

  const addProject = async () => {
    if (!newProject.project.trim()) return alert('Project harus diisi')
    await supabase.from('projects').insert([newProject])
    setNewProject({ logo: '', project: '', raised: '', category: '', guide: '' })
    fetchProjects()
  }

  const updateProject = async (id, key, value) => {
    await supabase.from('projects').update({ [key]: value }).eq('id', id)
    fetchProjects()
  }

  const deleteProject = async (id) => {
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  const handleLogout = async () => {
    await fetch('/airdrop/api/logout', { method: 'POST' })
    router.push('/airdrop/login')
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-2 mb-4">
            <input type="text" placeholder="Logo URL" value={newProject.logo} onChange={(e) => setNewProject({ ...newProject, logo: e.target.value })} className="border px-2 py-1 rounded" />
            <input type="text" placeholder="Project" value={newProject.project} onChange={(e) => setNewProject({ ...newProject, project: e.target.value })} className="border px-2 py-1 rounded" />
            <input type="text" placeholder="Raised" value={newProject.raised} onChange={(e) => setNewProject({ ...newProject, raised: e.target.value })} className="border px-2 py-1 rounded" />
            <input type="text" placeholder="Category" value={newProject.category} onChange={(e) => setNewProject({ ...newProject, category: e.target.value })} className="border px-2 py-1 rounded" />
            <input type="text" placeholder="Guide Link" value={newProject.guide} onChange={(e) => setNewProject({ ...newProject, guide: e.target.value })} className="border px-2 py-1 rounded" />
            <button onClick={addProject} className="col-span-5 bg-green-500 text-white px-4 py-2 rounded mt-2">Tambah</button>
          </div>

          <table className="w-full table-auto border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Logo</th>
                <th className="border px-4 py-2">Project</th>
                <th className="border px-4 py-2">Raised</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Guide</th>
                <th className="border px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((item) => (
                <tr key={item.id}>
                  <td className="border px-2 py-1 text-center">
                    <img src={item.logo} alt="logo" className="w-[50px] h-[50px] rounded-full object-cover mx-auto" />
                    <input type="text" value={item.logo} onChange={(e) => updateProject(item.id, 'logo', e.target.value)} className="w-full border px-2 py-1 mt-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <input type="text" value={item.project} onChange={(e) => updateProject(item.id, 'project', e.target.value)} className="w-full border px-2 py-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <input type="text" value={item.raised} onChange={(e) => updateProject(item.id, 'raised', e.target.value)} className="w-full border px-2 py-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <input type="text" value={item.category} onChange={(e) => updateProject(item.id, 'category', e.target.value)} className="w-full border px-2 py-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <input type="text" value={item.guide} onChange={(e) => updateProject(item.id, 'guide', e.target.value)} className="w-full border px-2 py-1" />
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <button onClick={() => deleteProject(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
