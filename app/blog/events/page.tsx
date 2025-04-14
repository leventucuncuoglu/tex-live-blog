"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: 'Express Tech Summit 2024',
    description: 'Lojistik teknolojilerinin geleceğini şekillendiren yıllık teknoloji zirvemiz.',
    image: '/events/tech-summit.jpg',
    date: '15 Nisan 2024',
    location: 'İstanbul Kongre Merkezi',
    type: 'Konferans',
    readTime: '5 dk',
    status: 'Yaklaşan'
  },
  {
    id: 2,
    title: 'Sürdürülebilir Lojistik Paneli',
    description: 'Çevre dostu teslimat çözümleri ve sürdürülebilir lojistik uygulamaları hakkında uzman paneli.',
    image: '/events/sustainability-panel.jpg',
    date: '20 Mart 2024',
    location: 'Online',
    type: 'Panel',
    readTime: '4 dk',
    status: 'Yaklaşan'
  },
  {
    id: 3,
    title: 'Express Akademi Mezuniyet Töreni',
    description: 'Express Akademi 2024 dönemi mezunlarımızın başarılarını kutluyoruz.',
    image: '/events/graduation.jpg',
    date: '10 Mart 2024',
    location: 'Trendyol Express Merkez Ofis',
    type: 'Tören',
    readTime: '3 dk',
    status: 'Tamamlandı'
  },
  {
    id: 4,
    title: 'İnovasyon Hackathonu',
    description: 'Teslimat süreçlerini iyileştirecek yenilikçi fikirlerin yarıştığı 48 saatlik hackathon.',
    image: '/events/hackathon.jpg',
    date: '5 Mayıs 2024',
    location: 'Trendyol Tech Hub',
    type: 'Yarışma',
    readTime: '6 dk',
    status: 'Yaklaşan'
  },
  {
    id: 5,
    title: 'Kurye Güvenlik Eğitimi',
    description: 'Kurye arkadaşlarımız için düzenlenen kapsamlı güvenlik ve ilk yardım eğitimi.',
    image: '/events/safety-training.jpg',
    date: '1 Mart 2024',
    location: 'Express Eğitim Merkezi',
    type: 'Eğitim',
    readTime: '4 dk',
    status: 'Tamamlandı'
  },
  {
    id: 6,
    title: 'Müşteri Deneyimi Çalıştayı',
    description: 'Müşteri memnuniyetini artırmak için düzenlenen interaktif çalıştay.',
    image: '/events/customer-workshop.jpg',
    date: '12 Nisan 2024',
    location: 'Hybrid',
    type: 'Çalıştay',
    readTime: '5 dk',
    status: 'Yaklaşan'
  },
  {
    id: 7,
    title: 'Express Market Tedarikçi Günü',
    description: 'Tedarikçilerimizle bir araya geldiğimiz yıllık networking etkinliği.',
    image: '/events/supplier-day.jpg',
    date: '25 Mart 2024',
    location: 'Trendyol Express Merkez Ofis',
    type: 'Networking',
    readTime: '4 dk',
    status: 'Yaklaşan'
  },
  {
    id: 8,
    title: 'Liderlik Gelişim Programı',
    description: 'Yönetici adayları için düzenlenen 3 günlük liderlik gelişim programı.',
    image: '/events/leadership.jpg',
    date: '8-10 Nisan 2024',
    location: 'Express Akademi',
    type: 'Eğitim',
    readTime: '6 dk',
    status: 'Yaklaşan'
  },
  {
    id: 9,
    title: 'Avrupa Operasyonları Lansman Etkinliği',
    description: 'Almanya\'daki ilk Express Market\'in açılış töreni ve networking etkinliği.',
    image: '/events/europe-launch.jpg',
    date: '30 Nisan 2024',
    location: 'Berlin',
    type: 'Lansman',
    readTime: '5 dk',
    status: 'Yaklaşan'
  },
  {
    id: 10,
    title: 'Yıllık Teknoloji Değerlendirme Toplantısı',
    description: '2024 teknoloji yatırımlarımızın değerlendirildiği yıllık toplantı.',
    image: '/events/tech-review.jpg',
    date: '28 Şubat 2024',
    location: 'Online',
    type: 'Toplantı',
    readTime: '4 dk',
    status: 'Tamamlandı'
  }
]

export default function Events() {
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
      case 'yaklaşan':
        return 'bg-blue-500'
      case 'tamamlandı':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Etkinlikler</h1>
            <p className="text-lg text-gray-600">Trendyol Express'in düzenlediği etkinlikler ve organizasyonlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/events/${event.id}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{event.date}</span>
                      <span className={`px-2 py-1 rounded-full text-white text-xs ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
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