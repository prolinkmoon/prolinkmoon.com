import { NextResponse } from 'next/server'

export function middleware(request) {
  const isLoggedIn = request.cookies.get('admin_session')?.value === 'true'

  if (request.nextUrl.pathname.startsWith('/airdrop/admin') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/airdrop/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/airdrop/admin/:path*'],
}
