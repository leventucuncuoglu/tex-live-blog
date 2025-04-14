"use client"

import { useAuth } from '@/app/context/AuthContext'
import { useRouter, useParams } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import { motion } from 'framer-motion'

const newsItems = [
  {
    id: 1,
    title: 'Yeni Elektrikli Araç Filomuzu Tanıttık',
    description: 'Çevre dostu teslimat için 100 yeni elektrikli araç filomuza katıldı. Bu yatırımla birlikte karbon ayak izimizi %25 azaltmayı hedefliyoruz.',
    image: '/news/electric-vehicles.jpg',
    date: '5 Mart 2024',
    author: 'Mehmet Yılmaz',
    category: 'Sürdürülebilirlik',
    readTime: '5 dk',
    content: `
      Trendyol Express olarak sürdürülebilir bir gelecek için önemli bir adım daha attık. Bugün düzenlenen basın toplantısında, filomuza katılan 100 yeni elektrikli aracımızı tanıttık. Bu yatırım, şirketimizin çevre dostu teslimat hedefleri doğrultusunda atılmış önemli bir adım.

      Yeni elektrikli araçlarımız, tek şarjla 300 kilometreye kadar menzil sunuyor ve hızlı şarj özelliği sayesinde 30 dakikada %80 şarj seviyesine ulaşabiliyor. Bu özellikler, teslimat operasyonlarımızın kesintisiz devam etmesini sağlarken, çevre dostu bir yaklaşım benimsememize olanak tanıyor.

      Elektrikli araç filomuzun genişlemesiyle birlikte:
      • Yıllık karbon emisyonumuzu 1.500 ton azaltmayı,
      • Yakıt maliyetlerimizi %40 düşürmeyi,
      • Araç bakım maliyetlerimizi %30 azaltmayı hedefliyoruz.

      Bu yatırım, 2025 yılına kadar filomuzun %50'sini elektrikli araçlara dönüştürme hedefimiz doğrultusunda atılmış önemli bir adım. Önümüzdeki dönemde de sürdürülebilirlik yatırımlarımıza hız kesmeden devam edeceğiz.

      Trendyol Express olarak, çevre dostu teslimat ağımızı genişletmeye ve karbon ayak izimizi azaltmaya yönelik çalışmalarımız devam edecek. Bu kapsamda, şarj istasyonu altyapımızı güçlendirme ve yenilenebilir enerji kullanımını artırma projelerimiz de planlarımız arasında yer alıyor.
    `
  },
  {
    id: 2,
    title: 'Express Market Büyümeye Devam Ediyor',
    description: 'İstanbul\'da 5 yeni Express Market mağazası açtık. Hızlı teslimat ağımızı genişletmeye devam ediyoruz.',
    image: '/news/express-market.jpg',
    date: '4 Mart 2024',
    author: 'Ayşe Demir',
    category: 'Büyüme',
    readTime: '4 dk',
    content: `
      Trendyol Express Market, İstanbul'daki büyümesini sürdürüyor. Bugün itibariyle Kadıköy, Beşiktaş, Şişli, Ataşehir ve Maltepe'de açılan 5 yeni mağazamızla birlikte İstanbul'daki toplam mağaza sayımız 50'ye ulaştı.

      Yeni açılan mağazalarımız, modern tasarımları ve geniş ürün yelpazesiyle dikkat çekiyor. Her bir mağazada:
      • 3.000'den fazla ürün çeşidi
      • Taze meyve sebze reyonu
      • Unlu mamuller bölümü
      • Şarküteri reyonu bulunuyor

      Express Market'in yeni mağazaları, 15 dakika içinde teslimat garantisiyle hizmet verecek. Bu hızlı teslimat hizmeti, özel olarak tasarlanmış soğuk zincir altyapımız sayesinde, taze ürünlerin de güvenle müşterilerimize ulaşmasını sağlıyor.

      Büyüme planlarımız kapsamında:
      • 2024 sonuna kadar İstanbul'da 100 mağazaya ulaşmayı,
      • Ankara ve İzmir'de yeni mağazalar açmayı,
      • Mevcut mağazalarımızın kapasitelerini artırmayı hedefliyoruz.

      Express Market olarak, müşterilerimize en kaliteli hizmeti sunmaya ve büyümeye devam edeceğiz. Yakın zamanda yeni şehirlerde de hizmet vermeye başlayacağız.
    `
  }
  // ... Diğer haberler için benzer içerikler eklenecek
]

export default function NewsDetail() {
  const { user } = useAuth()
  const router = useRouter()
  const params = useParams()
  const newsId = parseInt(params.id as string)
  
  const newsItem = newsItems.find(item => item.id === newsId)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user || !newsItem) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
              {newsItem.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{newsItem.date}</span>
              <span className="mx-2">•</span>
              <span>{newsItem.readTime} okuma</span>
            </div>
            <div className="flex items-center mb-8">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-sm font-medium text-orange-600">
                  {newsItem.author[0]}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{newsItem.author}</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {newsItem.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paylaş</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Twitter'da Paylaş
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                LinkedIn'de Paylaş
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
} 