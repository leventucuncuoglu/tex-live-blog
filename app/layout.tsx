'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    // Ana sayfaya gelindiğinde login sayfasına yönlendir
    if (window.location.pathname === '/') {
      router.push('/login')
    }
  }, [router])

  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 