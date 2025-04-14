"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const fieldNews = [
  {
    id: 1,
    title: "İstanbul Hub'ında Yeni Teknoloji Yatırımları",
    excerpt: "İstanbul dağıtım merkezimizde hayata geçirilen yeni teknoloji yatırımları ve operasyonel iyileştirmeler...",
    image: "/istanbul_hub.jpg",
    date: "14 Mart 2024",
    author: "Ali Yıldız",
    readTime: "7 dk",
    category: "Operasyon"
  },
  {
    id: 2,
    title: "Ege Bölgesi Dağıtım Ağı Genişliyor",
    excerpt: "Ege Bölgesi'nde artan e-ticaret hacmiyle birlikte dağıtım ağımıza eklenen yeni transfer merkezleri...",
    image: "/ege_network.jpg",
    date: "13 Mart 2024",
    author: "Zeynep Ak",
    readTime: "5 dk",
    category: "Büyüme"
  },
  {
    id: 3,
    title: "Saha Ekiplerimizden Başarı Hikayeleri",
    excerpt: "Müşteri memnuniyetini en üst seviyede tutan saha ekiplerimizin örnek başarı hikayeleri...",
    image: "/field_success.jpg",
    date: "11 Mart 2024",
    author: "Murat Demir",
    readTime: "6 dk",
    category: "Başarı Hikayeleri"
  },
  {
    id: 4,
    title: "Elektrikli Araç Filomuza Yeni Katılımlar",
    excerpt: "Sürdürülebilirlik hedeflerimiz doğrultusunda elektrikli araç filomuza eklenen yeni araçlar...",
    image: "/electric_vehicles.jpg",
    date: "9 Mart 2024",
    author: "Deniz Yılmaz",
    readTime: "4 dk",
    category: "Sürdürülebilirlik"
  }
]

export default function FieldNews() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sahadan Haberler</h1>
          <p className="text-xl text-gray-600">Operasyonel başarılarımız ve saha gelişmeleri</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fieldNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="md:flex h-full">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="md:w-3/5 p-6">
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
                  <div className="flex items-center justify-between mt-auto">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 