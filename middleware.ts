import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Kullanıcı oturumu
  const hasUserSession = request.cookies.has('user')

  // Ana sayfa isteğini login'e yönlendir
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Login sayfasında oturum varsa blog/home'a yönlendir
  if (pathname === '/login' && hasUserSession) {
    return NextResponse.redirect(new URL('/blog/home', request.url))
  }

  // Blog sayfalarına oturum yoksa erişimi engelle
  if (pathname.startsWith('/blog') && !hasUserSession) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/blog/:path*'
  ]
} 