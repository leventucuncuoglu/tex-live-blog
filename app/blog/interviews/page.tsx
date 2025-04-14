"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const interviews = [
  {
    id: 1,
    title: "Teknoloji ve İnovasyonla Geleceği Şekillendiriyoruz",
    interviewee: "Ahmet Yılmaz",
    role: "Teknoloji Direktörü",
    excerpt: "Teknoloji direktörümüz Ahmet Yılmaz ile dijital dönüşüm yolculuğumuz ve gelecek vizyonumuz üzerine keyifli bir sohbet...",
    image: "/tech_director.jpg",
    date: "15 Mart 2024",
    readTime: "12 dk",
    category: "Teknoloji Liderliği"
  },
  {
    id: 2,
    title: "Sürdürülebilir Lojistik için Çalışıyoruz",
    interviewee: "Ayşe Kaya",
    role: "Operasyon Müdürü",
    excerpt: "Operasyon müdürümüz Ayşe Kaya ile sürdürülebilir lojistik uygulamalarımız ve çevre dostu yaklaşımlarımız hakkında konuştuk...",
    image: "/ops_manager.jpg",
    date: "13 Mart 2024",
    readTime: "10 dk",
    category: "Operasyon Liderliği"
  },
  {
    id: 3,
    title: "Başarılı Ekip Yönetiminin Sırları",
    interviewee: "Mehmet Demir",
    role: "İK Direktörü",
    excerpt: "İK direktörümüz Mehmet Demir ile ekip yönetimi, çalışan memnuniyeti ve kariyer gelişimi üzerine samimi bir röportaj...",
    image: "/hr_director.jpg",
    date: "10 Mart 2024",
    readTime: "15 dk",
    category: "İK Liderliği"
  }
]

export default function Interviews() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ekip ve Lider Röportajları</h1>
          <p className="text-xl text-gray-600">Başarı hikayeleri ve deneyim paylaşımları</p>
        </div>

        <div className="space-y-12">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={interview.image}
                    alt={interview.interviewee}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-orange-500 font-medium">
                      {interview.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {interview.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {interview.title}
                  </h2>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-lg font-medium text-gray-600">
                        {interview.interviewee[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{interview.interviewee}</h3>
                      <span className="text-sm text-orange-600 font-medium">
                        {interview.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {interview.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Röportajı Oku
                    </button>
                    <span className="text-sm text-gray-500">{interview.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 