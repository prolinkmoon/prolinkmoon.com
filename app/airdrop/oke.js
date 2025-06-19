'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (password === process.env.ADMIN_PASSWORD) {
      document.cookie = 'admin_session=true; path=/'
      router.push('/airdrop/admin')
    } else {
      alert('Password salah!')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-xl mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Masukkan password"
          className="border px-3 py-2 rounded w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </div>
    </div>
  )
}
