"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const globalNews = [
  {
    id: 1,
    title: "E-ticaret Lojistiğinde Yapay Zeka Devrimi",
    excerpt: "Dünya genelinde e-ticaret lojistiği, yapay zeka teknolojileriyle nasıl dönüşüyor? Sektörün önde gelen şirketlerinin AI uygulamaları ve başarı hikayeleri...",
    image: "/ai_logistics.jpg",
    date: "15 Mart 2024",
    author: "Mehmet Yılmaz",
    readTime: "8 dk",
    category: "Teknoloji"
  },
  {
    id: 2,
    title: "Sürdürülebilir Tedarik Zinciri Yönetimi",
    excerpt: "Küresel ısınma ve iklim değişikliğiyle mücadelede lojistik sektörünün rolü ve sürdürülebilir tedarik zinciri uygulamaları...",
    image: "/sustainable_logistics.jpg",
    date: "12 Mart 2024",
    author: "Ayşe Kaya",
    readTime: "6 dk",
    category: "Sürdürülebilirlik"
  },
  {
    id: 3,
    title: "Avrupa'da Son Kilometre Teslimat Trendleri",
    excerpt: "Avrupa'nın önde gelen e-ticaret pazarlarında son kilometre teslimat çözümleri ve inovatif yaklaşımlar...",
    image: "/last_mile.jpg",
    date: "10 Mart 2024",
    author: "Can Demir",
    readTime: "5 dk",
    category: "Trendler"
  }
]

export default function GlobalNews() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Global Haberler</h1>
          <p className="text-xl text-gray-600">Lojistik dünyasından en güncel global gelişmeler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-600 font-medium">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {news.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {news.author[0]}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{news.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Haberi Oku
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 