'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin() {
    setLoading(true)
    try {
      const res = await fetch('/airdrop/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/airdrop/admin')
      } else {
        alert('Password salah!')
      }
    } catch (error) {
      alert('Terjadi kesalahan, coba lagi nanti')
    }
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Masukkan password"
          className="border px-3 py-2 rounded w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </div>
  )
}
