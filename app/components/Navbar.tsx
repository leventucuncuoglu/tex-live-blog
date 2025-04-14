"use client"

import { useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#2D3748] text-white z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link href="/blog/home" className="flex items-baseline">
              <span className="text-2xl font-bold text-white">TEX</span>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-orange-500 ml-1">LIVE</span>
                <div className="ml-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </div>
              </div>
            </Link>

            {/* Ana Menü */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link href="/blog/home" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Anasayfa
              </Link>
              <Link href="/blog/global" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Global Haberler
              </Link>
              <Link href="/blog/field" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Sahadan Haberler
              </Link>
              <Link href="/blog/interviews" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Ekip / Lider Röportajları
              </Link>
              <Link href="/blog/events" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                Sosyal Etkinlik Haberleri
              </Link>
              <Link href="/blog/dictionary" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                TEX Sözlük
              </Link>
              {user?.role === 'editor' && (
                <Link href="/blog/editor" className="px-3 py-1 text-sm text-gray-300 hover:text-white">
                  Editör Paneli
                </Link>
              )}
            </div>
          </div>

          {/* Sağ Taraf */}
          <div className="flex items-center space-x-4">
            {/* Arama Butonu */}
            <button className="p-1 text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Kullanıcı Menüsü */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-sm font-medium">{user.name[0]}</span>
                  </div>
                  <span>Merhaba {user.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profil
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm text-gray-300 hover:text-white"
              >
                Giriş Yap
              </Link>
            )}

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/blog/home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              Anasayfa
            </Link>
            <Link href="/blog/global" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              Global Haberler
            </Link>
            <Link href="/blog/field" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              Sahadan Haberler
            </Link>
            <Link href="/blog/interviews" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              Ekip / Lider Röportajları
            </Link>
            <Link href="/blog/events" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              Sosyal Etkinlik Haberleri
            </Link>
            <Link href="/blog/dictionary" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              TEX Sözlük
            </Link>
            {user?.role === 'editor' && (
              <Link href="/blog/editor" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                Editör Paneli
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
} 