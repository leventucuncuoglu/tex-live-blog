"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: "TEX Yıl Sonu Değerlendirme Toplantısı",
    excerpt: "2023 yılının başarılarını kutladığımız ve 2024 hedeflerimizi paylaştığımız yıl sonu değerlendirme toplantımız...",
    image: "/year_end_meeting.jpg",
    date: "20 Aralık 2023",
    author: "Etkinlik Komitesi",
    readTime: "5 dk",
    category: "Kurumsal Etkinlik"
  },
  {
    id: 2,
    title: "TEX Spor Şenlikleri 2024",
    excerpt: "Farklı lokasyonlardan ekiplerimizin bir araya geldiği, dostluk ve takım ruhunun öne çıktığı spor şenliklerimiz...",
    image: "/sports_event.jpg",
    date: "5 Mart 2024",
    author: "Spor Komitesi",
    readTime: "4 dk",
    category: "Spor Etkinliği"
  },
  {
    id: 3,
    title: "TEX Teknoloji Günleri",
    excerpt: "Teknoloji ekiplerimizin düzenlediği, yeni teknolojileri ve projeleri tartıştığımız bilgi paylaşım etkinliği...",
    image: "/tech_days.jpg",
    date: "12 Mart 2024",
    author: "Teknoloji Ekibi",
    readTime: "6 dk",
    category: "Teknoloji Etkinliği"
  }
]

export default function Events() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sosyal Etkinlik Haberleri</h1>
          <p className="text-xl text-gray-600">TEX ailesinin keyifli anları ve etkinlikleri</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-orange-600 font-medium">
                      {event.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {event.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {event.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {event.author[0]}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{event.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Etkinliği İncele
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 