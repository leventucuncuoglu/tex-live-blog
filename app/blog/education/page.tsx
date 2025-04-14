"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'Liderlik Gelişim Programı',
    description: 'Yönetici adayları için kapsamlı liderlik ve yönetim becerileri eğitimi.',
    image: '/education/leadership.jpg',
    duration: '12 Hafta',
    level: 'İleri Seviye',
    category: 'Yönetim',
    instructor: 'Dr. Ayşe Yılmaz',
    startDate: '1 Nisan 2024',
    status: 'Kayıtlar Açık'
  },
  {
    id: 2,
    title: 'Kurye Güvenlik Eğitimi',
    description: 'Saha ekiplerimiz için temel güvenlik, ilk yardım ve güvenli sürüş teknikleri eğitimi.',
    image: '/education/safety.jpg',
    duration: '2 Hafta',
    level: 'Başlangıç',
    category: 'Güvenlik',
    instructor: 'Mehmet Demir',
    startDate: '15 Mart 2024',
    status: 'Devam Ediyor'
  },
  {
    id: 3,
    title: 'Veri Analizi ve Raporlama',
    description: 'İş analitiği, veri görselleştirme ve raporlama tekniklerini öğrenin.',
    image: '/education/data-analysis.jpg',
    duration: '8 Hafta',
    level: 'Orta Seviye',
    category: 'Teknoloji',
    instructor: 'Zeynep Kaya',
    startDate: '20 Mart 2024',
    status: 'Kayıtlar Açık'
  },
  {
    id: 4,
    title: 'Müşteri İlişkileri Yönetimi',
    description: 'Etkili iletişim, problem çözme ve müşteri memnuniyeti teknikleri.',
    image: '/education/customer-relations.jpg',
    duration: '4 Hafta',
    level: 'Başlangıç',
    category: 'Müşteri Hizmetleri',
    instructor: 'Can Öztürk',
    startDate: '1 Nisan 2024',
    status: 'Yakında'
  },
  {
    id: 5,
    title: 'Depo Yönetimi ve Optimizasyon',
    description: 'Modern depo yönetimi teknikleri ve verimlilik optimizasyonu.',
    image: '/education/warehouse.jpg',
    duration: '6 Hafta',
    level: 'Orta Seviye',
    category: 'Operasyon',
    instructor: 'Ali Yıldız',
    startDate: '10 Nisan 2024',
    status: 'Kayıtlar Açık'
  },
  {
    id: 6,
    title: 'Dijital Pazarlama Temelleri',
    description: 'Sosyal medya, içerik pazarlama ve dijital reklam stratejileri.',
    image: '/education/digital-marketing.jpg',
    duration: '8 Hafta',
    level: 'Başlangıç',
    category: 'Pazarlama',
    instructor: 'Selin Demir',
    startDate: '5 Nisan 2024',
    status: 'Yakında'
  },
  {
    id: 7,
    title: 'Proje Yönetimi Sertifikası',
    description: 'Agile metodolojiler ve modern proje yönetimi teknikleri.',
    image: '/education/project-management.jpg',
    duration: '10 Hafta',
    level: 'İleri Seviye',
    category: 'Yönetim',
    instructor: 'Dr. Murat Kaya',
    startDate: '15 Nisan 2024',
    status: 'Kayıtlar Açık'
  },
  {
    id: 8,
    title: 'Sürdürülebilirlik Uygulamaları',
    description: 'Çevre dostu operasyonlar ve sürdürülebilir iş modelleri.',
    image: '/education/sustainability.jpg',
    duration: '4 Hafta',
    level: 'Orta Seviye',
    category: 'Sürdürülebilirlik',
    instructor: 'Elif Şahin',
    startDate: '1 Mayıs 2024',
    status: 'Yakında'
  },
  {
    id: 9,
    title: 'İş İngilizcesi',
    description: 'Profesyonel iş ortamında İngilizce iletişim becerileri.',
    image: '/education/business-english.jpg',
    duration: '12 Hafta',
    level: 'Başlangıç',
    category: 'Dil',
    instructor: 'Sarah Johnson',
    startDate: '10 Nisan 2024',
    status: 'Kayıtlar Açık'
  },
  {
    id: 10,
    title: 'Finansal Okuryazarlık',
    description: 'Temel finans, bütçe yönetimi ve finansal analiz eğitimi.',
    image: '/education/finance.jpg',
    duration: '6 Hafta',
    level: 'Orta Seviye',
    category: 'Finans',
    instructor: 'Ahmet Yılmaz',
    startDate: '20 Nisan 2024',
    status: 'Yakında'
  }
]

export default function Education() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'kayıtlar açık':
        return 'bg-green-500'
      case 'devam ediyor':
        return 'bg-blue-500'
      case 'yakında':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'başlangıç':
        return 'bg-green-100 text-green-800'
      case 'orta seviye':
        return 'bg-blue-100 text-blue-800'
      case 'ileri seviye':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Eğitim ve Gelişim</h1>
            <p className="text-lg text-gray-600">Express Akademi'nin sunduğu eğitim ve gelişim fırsatları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/education/${course.id}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{course.startDate}</span>
                      <span className={`px-2 py-1 rounded-full text-white text-xs ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-500">{course.duration}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-orange-600">
                          {course.instructor[0]}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 