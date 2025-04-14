"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

const stories = [
  {
    id: 1,
    title: 'Kuryelikten Bölge Müdürlüğüne: Başarı Hikayem',
    description: 'Trendyol Express\'te kurye olarak başladığım kariyerimde, şimdi İstanbul Avrupa Yakası Bölge Müdürü olarak görev yapıyorum. İşte benim hikayem...',
    image: '/stories/success-story-1.jpg',
    date: '5 Mart 2024',
    author: 'Ahmet Yılmaz',
    role: 'Bölge Müdürü',
    readTime: '8 dk'
  },
  {
    id: 2,
    title: 'Teknoloji Ekibimizin Başarı Öyküsü',
    description: 'Rota optimizasyon algoritmamızı geliştirirken karşılaştığımız zorlukları nasıl aştık? İşte ekip olarak başarıya ulaşma hikayemiz...',
    image: '/stories/tech-team.jpg',
    date: '4 Mart 2024',
    author: 'Zeynep Kaya',
    role: 'Yazılım Takım Lideri',
    readTime: '6 dk'
  },
  {
    id: 3,
    title: 'Express Market\'te Yenilikçi Yaklaşımlar',
    description: 'Mağaza operasyonlarımızı nasıl daha verimli hale getirdik? İşte bizim yenilikçi çözümlerimiz ve başarı hikayemiz...',
    image: '/stories/market-operations.jpg',
    date: '3 Mart 2024',
    author: 'Mehmet Demir',
    role: 'Operasyon Müdürü',
    readTime: '5 dk'
  },
  {
    id: 4,
    title: 'Müşteri Deneyiminde Fark Yaratanlar',
    description: 'Müşteri hizmetleri ekibimizin başarılı çözüm öyküleri ve mutlu müşteri hikayeleri...',
    image: '/stories/customer-experience.jpg',
    date: '2 Mart 2024',
    author: 'Ayşe Yıldız',
    role: 'Müşteri Deneyimi Lideri',
    readTime: '7 dk'
  },
  {
    id: 5,
    title: 'Sürdürülebilirlik Projelerimizin Arkasındaki Ekip',
    description: 'Çevre dostu teslimat projelerimizi hayata geçiren ekibimizin ilham verici hikayesi...',
    image: '/stories/sustainability.jpg',
    date: '1 Mart 2024',
    author: 'Can Öztürk',
    role: 'Sürdürülebilirlik Müdürü',
    readTime: '6 dk'
  },
  {
    id: 6,
    title: 'Stajyerlikten Yöneticiliğe: Kariyer Yolculuğum',
    description: 'Trendyol Express\'te stajyer olarak başladığım kariyerimde, şimdi bir ekibi yönetiyorum. İşte benim gelişim hikayem...',
    image: '/stories/career-journey.jpg',
    date: '28 Şubat 2024',
    author: 'Elif Şahin',
    role: 'İK Yöneticisi',
    readTime: '5 dk'
  },
  {
    id: 7,
    title: 'Depolarımızın Dijital Dönüşümü',
    description: 'Depo operasyonlarımızı nasıl dijitalleştirdik? İşte otomasyon projemizin başarı hikayesi...',
    image: '/stories/warehouse-automation.jpg',
    date: '27 Şubat 2024',
    author: 'Burak Aydın',
    role: 'Depo Operasyonları Direktörü',
    readTime: '7 dk'
  },
  {
    id: 8,
    title: 'Express Akademi\'den Mezun Olanlar',
    description: 'Express Akademi\'de eğitim alan çalışanlarımızın başarı hikayeleri ve kariyer gelişimleri...',
    image: '/stories/academy-graduates.jpg',
    date: '26 Şubat 2024',
    author: 'Selin Yılmaz',
    role: 'Eğitim Müdürü',
    readTime: '6 dk'
  },
  {
    id: 9,
    title: 'Avrupa\'ya Açılma Sürecimiz',
    description: 'Avrupa operasyonlarımızı kurarken yaşadığımız deneyimler ve başarı hikayemiz...',
    image: '/stories/europe-expansion.jpg',
    date: '25 Şubat 2024',
    author: 'Murat Kaya',
    role: 'Uluslararası Operasyonlar Direktörü',
    readTime: '8 dk'
  },
  {
    id: 10,
    title: 'İnovasyon Ekibimizin Başarıları',
    description: 'AR-GE merkezimizde geliştirdiğimiz yenilikçi projelerin arkasındaki ekip ve başarı hikayeleri...',
    image: '/stories/innovation-team.jpg',
    date: '24 Şubat 2024',
    author: 'Deniz Arslan',
    role: 'İnovasyon Direktörü',
    readTime: '7 dk'
  }
]

export default function Stories() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Çalışan Hikayeleri</h1>
            <p className="text-lg text-gray-600">Trendyol Express ailesinin ilham veren başarı hikayeleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/stories/${story.id}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">
                        {story.role}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{story.date}</span>
                      <span className="mx-2">•</span>
                      <span>{story.readTime} okuma</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {story.description}
                    </p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-orange-600">
                          {story.author[0]}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{story.author}</p>
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