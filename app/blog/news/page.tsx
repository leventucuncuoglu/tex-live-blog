"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    title: 'Yeni Elektrikli Araç Filomuzu Tanıttık',
    description: 'Çevre dostu teslimat için 100 yeni elektrikli araç filomuza katıldı. Bu yatırımla birlikte karbon ayak izimizi %25 azaltmayı hedefliyoruz.',
    image: '/news/electric-vehicles.jpg',
    date: '5 Mart 2024',
    author: 'Mehmet Yılmaz',
    category: 'Sürdürülebilirlik',
    readTime: '5 dk'
  },
  {
    id: 2,
    title: 'Express Market Büyümeye Devam Ediyor',
    description: 'İstanbul\'da 5 yeni Express Market mağazası açtık. Hızlı teslimat ağımızı genişletmeye devam ediyoruz.',
    image: '/news/express-market.jpg',
    date: '4 Mart 2024',
    author: 'Ayşe Demir',
    category: 'Büyüme',
    readTime: '4 dk'
  },
  {
    id: 3,
    title: 'Müşteri Memnuniyetinde Yeni Rekor',
    description: 'Zamanında teslimat oranımız %99.5\'e ulaştı. Müşteri memnuniyet skorumuz 4.8/5 olarak güncellendi.',
    image: '/news/customer-satisfaction.jpg',
    date: '3 Mart 2024',
    author: 'Can Kaya',
    category: 'Başarılar',
    readTime: '3 dk'
  },
  {
    id: 4,
    title: 'AR-GE Merkezimiz Faaliyete Geçti',
    description: 'İstanbul\'da açılan yeni AR-GE merkezimizle teknoloji ve inovasyon alanında yatırımlarımıza devam ediyoruz.',
    image: '/news/tech-center.jpg',
    date: '2 Mart 2024',
    author: 'Zeynep Ak',
    category: 'Teknoloji',
    readTime: '6 dk'
  },
  {
    id: 5,
    title: 'Geleceğe Teslimat Programı Başladı',
    description: 'Üniversite öğrencilerine yönelik mentorluk programımız ile geleceğin liderlerini yetiştiriyoruz.',
    image: '/news/future-delivery.jpg',
    date: '1 Mart 2024',
    author: 'Ali Yıldız',
    category: 'Sosyal Sorumluluk',
    readTime: '4 dk'
  },
  {
    id: 6,
    title: 'Yeni Mobil Uygulamamız Yayında',
    description: 'Kurye arkadaşlarımız için geliştirdiğimiz yeni mobil uygulamamız ile teslimat süreçlerini daha da kolaylaştırıyoruz.',
    image: '/news/mobile-app.jpg',
    date: '28 Şubat 2024',
    author: 'Deniz Şahin',
    category: 'Teknoloji',
    readTime: '5 dk'
  },
  {
    id: 7,
    title: 'Sürdürülebilir Paketleme Projesi',
    description: 'Geri dönüştürülebilir paketleme malzemelerine geçiş projemiz ile çevre dostu teslimat hedefimize bir adım daha yaklaşıyoruz.',
    image: '/news/sustainable-packaging.jpg',
    date: '27 Şubat 2024',
    author: 'Elif Yılmaz',
    category: 'Sürdürülebilirlik',
    readTime: '4 dk'
  },
  {
    id: 8,
    title: 'Express Akademi\'den Yeni Eğitimler',
    description: 'Çalışanlarımızın gelişimi için Express Akademi bünyesinde yeni eğitim programları başlattık.',
    image: '/news/express-academy.jpg',
    date: '26 Şubat 2024',
    author: 'Murat Kaya',
    category: 'Eğitim',
    readTime: '3 dk'
  },
  {
    id: 9,
    title: 'Avrupa Operasyonları Genişliyor',
    description: 'Almanya\'da ilk Express Market mağazamızı açtık. Avrupa\'daki büyüme planlarımız devam ediyor.',
    image: '/news/europe-expansion.jpg',
    date: '25 Şubat 2024',
    author: 'Selin Demir',
    category: 'Büyüme',
    readTime: '5 dk'
  },
  {
    id: 10,
    title: 'Yapay Zeka Destekli Rota Optimizasyonu',
    description: 'Yapay zeka teknolojileri ile rota optimizasyonu yaparak teslimat sürelerimizi %30 kısalttık.',
    image: '/news/ai-optimization.jpg',
    date: '24 Şubat 2024',
    author: 'Burak Yıldırım',
    category: 'Teknoloji',
    readTime: '6 dk'
  }
]

export default function News() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Güncel Haberler</h1>
            <p className="text-lg text-gray-600">Trendyol Express'ten en güncel haberler ve gelişmeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/news/${item.id}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.readTime} okuma</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-orange-600">
                          {item.author[0]}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{item.author}</p>
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