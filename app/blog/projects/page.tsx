"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Elektrikli Araç Filosu',
    description: 'Sürdürülebilir teslimat için 100 elektrikli araçtan oluşan filomuzun kurulumu ve operasyonu.',
    image: '/projects/electric-fleet.jpg',
    date: 'Mart 2024',
    team: 'Operasyon Ekibi',
    status: 'Devam Ediyor',
    progress: 75,
    readTime: '5 dk'
  },
  {
    id: 2,
    title: 'Yapay Zeka Destekli Rota Optimizasyonu',
    description: 'Teslimat sürelerini kısaltan ve yakıt tüketimini azaltan AI destekli rota optimizasyon sistemi.',
    image: '/projects/ai-route.jpg',
    date: 'Şubat 2024',
    team: 'Teknoloji Ekibi',
    status: 'Tamamlandı',
    progress: 100,
    readTime: '4 dk'
  },
  {
    id: 3,
    title: 'Express Market Genişleme',
    description: 'İstanbul\'da 5 yeni Express Market mağazasının açılışı ve operasyonel entegrasyonu.',
    image: '/projects/market-expansion.jpg',
    date: 'Nisan 2024',
    team: 'İş Geliştirme',
    status: 'Planlama',
    progress: 30,
    readTime: '3 dk'
  },
  {
    id: 4,
    title: 'Müşteri Deneyimi İyileştirme',
    description: 'Mobil uygulama ve web sitesi kullanıcı deneyiminin modernizasyonu ve iyileştirilmesi.',
    image: '/projects/ux-improvement.jpg',
    date: 'Mart 2024',
    team: 'UX Ekibi',
    status: 'Test',
    progress: 90,
    readTime: '6 dk'
  },
  {
    id: 5,
    title: 'Sürdürülebilir Paketleme',
    description: 'Geri dönüştürülebilir ve çevre dostu paketleme malzemelerine geçiş projesi.',
    image: '/projects/sustainable-packaging.jpg',
    date: 'Mayıs 2024',
    team: 'Sürdürülebilirlik',
    status: 'Planlama',
    progress: 20,
    readTime: '4 dk'
  },
  {
    id: 6,
    title: 'Dijital Eğitim Platformu',
    description: 'Çalışanlarımız için kapsamlı online eğitim ve gelişim platformunun geliştirilmesi.',
    image: '/projects/digital-learning.jpg',
    date: 'Nisan 2024',
    team: 'İK & Teknoloji',
    status: 'Devam Ediyor',
    progress: 60,
    readTime: '5 dk'
  },
  {
    id: 7,
    title: 'Depo Otomasyon Sistemi',
    description: 'Depo operasyonlarının otomasyonu ve robotik sistemlerin entegrasyonu.',
    image: '/projects/warehouse-automation.jpg',
    date: 'Haziran 2024',
    team: 'Operasyon',
    status: 'Planlama',
    progress: 15,
    readTime: '7 dk'
  },
  {
    id: 8,
    title: 'Mobil Kurye Uygulaması',
    description: 'Kuryelerimiz için yeni nesil mobil uygulama geliştirme projesi.',
    image: '/projects/courier-app.jpg',
    date: 'Mart 2024',
    team: 'Mobil Ekip',
    status: 'Test',
    progress: 85,
    readTime: '4 dk'
  },
  {
    id: 9,
    title: 'Avrupa Pazarına Giriş',
    description: 'Avrupa\'daki ilk operasyonlarımızın başlatılması ve yerel ortaklıkların kurulması.',
    image: '/projects/europe-expansion.jpg',
    date: 'Temmuz 2024',
    team: 'Strateji',
    status: 'Planlama',
    progress: 10,
    readTime: '6 dk'
  },
  {
    id: 10,
    title: 'Soğuk Zincir Altyapısı',
    description: 'Gıda teslimatları için soğuk zincir altyapısının güçlendirilmesi projesi.',
    image: '/projects/cold-chain.jpg',
    date: 'Mayıs 2024',
    team: 'Operasyon',
    status: 'Devam Ediyor',
    progress: 40,
    readTime: '5 dk'
  }
]

export default function Projects() {
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
      case 'tamamlandı':
        return 'bg-green-500'
      case 'devam ediyor':
        return 'bg-blue-500'
      case 'planlama':
        return 'bg-yellow-500'
      case 'test':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    if (progress >= 30) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h1>
            <p className="text-lg text-gray-600">Express'in geleceğini şekillendiren inovatif projeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/projects/${project.id}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {project.team}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{project.date}</span>
                      <span className={`px-2 py-1 rounded-full text-white text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">İlerleme</span>
                        <span className="font-medium text-gray-900">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressColor(project.progress)} transition-all duration-500`}
                          style={{ width: `${project.progress}%` }}
                        />
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