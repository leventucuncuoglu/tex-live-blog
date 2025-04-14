"use client"

import { useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isUser, setIsUser] = useState(true)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password, !isUser)
      router.push('/blog/home')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black/5 to-black/40">
      {/* Pattern arka plan */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/values-pattern.jpg)',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          opacity: 0.15
        }}
      />

      {/* Login formu */}
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full max-w-md z-10">
        <div className="flex justify-center mb-8">
          <Image
            src="/trendyol-express-logo.png"
            alt="TEX Live Logo"
            width={300}
            height={90}
            priority
            className="h-auto w-auto"
          />
        </div>
        <p className="text-center text-gray-600 mb-8">
          TEX Live blog platformuna giriş yapın
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isUser ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setIsUser(true)}
          >
            Kullanıcı Girişi
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              !isUser ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setIsUser(false)}
          >
            Editör Girişi
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-posta adresi"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Şifre"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  )
} 