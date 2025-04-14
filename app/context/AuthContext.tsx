"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: string
  name: string
  email: string
  role: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string, isEditor: boolean) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string, isEditor: boolean = false): Promise<void> => {
    setIsLoading(true)
    try {
      // Simüle edilmiş login işlemi
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser = {
        id: '1',
        name: isEditor ? 'Editor User' : 'Test User',
        email,
        role: isEditor ? 'editor' : 'user'
      }
      
      setUser(mockUser)
      
      // Cookie'ye kullanıcı bilgisini kaydet
      document.cookie = `user=${JSON.stringify(mockUser)}; path=/; max-age=86400; secure; samesite=strict`
      
      // Editör ise panele, değilse ana sayfaya yönlendir
      router.push('/blog/home')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    // Cookie'yi sil
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; secure; samesite=strict'
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 