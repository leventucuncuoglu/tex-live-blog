import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const { pathname } = request.nextUrl

  // Refresh session if expired
  const { data: { session } } = await supabase.auth.getSession()

  // Ana sayfa isteğini login'e yönlendir
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Login sayfasında oturum varsa blog/home'a yönlendir
  if (pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/blog/home', request.url))
  }

  // Blog sayfalarına oturum yoksa erişimi engelle (auth callback hariç)
  if (pathname.startsWith('/blog') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Auth callback sayfasına her zaman erişim izni ver
  if (pathname.startsWith('/auth/callback')) {
    return res
  }

  return res
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/blog/:path*',
    '/auth/callback'
  ]
} 