// app/airdrop/api/login/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { password } = await request.json()

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ message: 'Login berhasil' })
    response.cookies.set({
      name: 'admin_session',
      value: 'true',
      httpOnly: true,
      path: '/',
      maxAge: 3600,
      sameSite: 'strict',
      secure: true, // aktifkan jika pakai HTTPS
    })
    return response
  }

  return NextResponse.json({ message: 'Password salah' }, { status: 401 })
}
