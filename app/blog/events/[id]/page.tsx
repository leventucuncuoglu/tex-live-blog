"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'

const events = [
  {
    id: 1,
    title: 'Express Tech Summit 2024',
    description: 'Lojistik teknolojilerindeki son yenilikler ve gelecek trendleri hakkında kapsamlı bir teknoloji zirvesi.',
    image: '/events/tech-summit.jpg',
    date: '15 Nisan 2024',
    location: 'İstanbul Kongre Merkezi',
    type: 'Konferans',
    readTime: '5 dk',
    status: 'Yakında',
    content: `
      <h2>Etkinlik Hakkında</h2>
      <p>Express Tech Summit 2024, lojistik ve teknoloji dünyasının önde gelen isimlerini bir araya getiriyor. Bu yıl "Dijital Dönüşüm ve Sürdürülebilir Lojistik" temasıyla düzenlenecek zirve, sektörün geleceğini şekillendirecek teknolojileri ve trendleri masaya yatıracak.</p>

      <h2>Program</h2>
      <h3>09:00 - Kayıt ve Kahvaltı</h3>
      <h3>10:00 - Açılış Konuşması</h3>
      <ul>
        <li>Express CEO'su - "Lojistikte Dijital Dönüşüm Vizyonu"</li>
      </ul>

      <h3>10:30 - Ana Oturum: Yapay Zeka ve Lojistik</h3>
      <ul>
        <li>Dr. Mehmet Yılmaz - "AI Destekli Rota Optimizasyonu"</li>
        <li>Sarah Johnson - "Machine Learning in Supply Chain"</li>
        <li>Ali Kaya - "Predictive Analytics in Logistics"</li>
      </ul>

      <h3>12:00 - Öğle Yemeği ve Networking</h3>

      <h3>13:30 - Paralel Oturumlar</h3>
      <p>Salon A: Sürdürülebilir Lojistik</p>
      <ul>
        <li>Elektrikli Araç Filosu Dönüşümü</li>
        <li>Yeşil Depo Uygulamaları</li>
        <li>Karbon Ayak İzi Azaltma Stratejileri</li>
      </ul>

      <p>Salon B: Dijital Teknolojiler</p>
      <ul>
        <li>Blockchain ve Tedarik Zinciri</li>
        <li>IoT Uygulamaları</li>
        <li>Robotik Süreç Otomasyonu</li>
      </ul>

      <h3>15:30 - Kapanış Paneli</h3>
      <p>"Lojistiğin Geleceği: 2030 Vizyonu"</p>

      <h2>Konuşmacılar</h2>
      <ul>
        <li>Prof. Dr. Ayşe Demir - Boğaziçi Üniversitesi</li>
        <li>John Smith - Microsoft Türkiye</li>
        <li>Zeynep Yıldız - Express CTO</li>
        <li>Dr. Ahmet Kara - TÜBİTAK</li>
      </ul>

      <h2>Katılım Bilgileri</h2>
      <ul>
        <li>Tarih: 15 Nisan 2024</li>
        <li>Saat: 09:00 - 17:00</li>
        <li>Yer: İstanbul Kongre Merkezi</li>
        <li>Adres: Harbiye, Şişli/İstanbul</li>
      </ul>

      <h2>Kayıt</h2>
      <p>Katılım için erken kayıt avantajlarından yararlanabilirsiniz. Kontenjan sınırlıdır.</p>
    `
  },
  {
    id: 2,
    title: 'Sürdürülebilir Lojistik Paneli',
    description: 'Çevre dostu lojistik çözümleri ve sürdürülebilir tedarik zinciri yönetimi üzerine online panel.',
    image: '/events/sustainability-panel.jpg',
    date: '20 Mart 2024',
    location: 'Online',
    type: 'Panel',
    readTime: '4 dk',
    status: 'Kayıtlar Açık',
    content: `
      <h2>Panel Hakkında</h2>
      <p>Sürdürülebilir Lojistik Paneli, çevre dostu lojistik çözümleri ve sürdürülebilir tedarik zinciri yönetimi konularında uzman isimleri bir araya getiriyor. Online olarak gerçekleşecek panel, katılımcılara interaktif bir öğrenme ve tartışma ortamı sunacak.</p>

      <h2>Program</h2>
      <h3>14:00 - Açılış</h3>
      <ul>
        <li>Moderatör tanıtımı ve panel formatı hakkında bilgilendirme</li>
        <li>Panelistlerin tanıtımı</li>
      </ul>

      <h3>14:15 - Ana Oturum</h3>
      <p>Tartışma Konuları:</p>
      <ul>
        <li>Sürdürülebilir lojistik stratejileri</li>
        <li>Karbon emisyonu azaltma yöntemleri</li>
        <li>Yeşil tedarik zinciri uygulamaları</li>
        <li>Enerji verimliliği çözümleri</li>
      </ul>

      <h3>15:30 - Soru & Cevap</h3>
      <p>Katılımcıların sorularının yanıtlanması</p>

      <h3>16:00 - Kapanış</h3>
      <p>Özet ve gelecek etkinlik duyuruları</p>

      <h2>Panelistler</h2>
      <ul>
        <li>Moderatör: Ayşe Yılmaz - Sürdürülebilirlik Danışmanı</li>
        <li>Dr. Mehmet Demir - Çevre Mühendisi</li>
        <li>Zeynep Kaya - Express Sürdürülebilirlik Direktörü</li>
        <li>Ali Öztürk - Yeşil Lojistik Derneği Başkanı</li>
      </ul>

      <h2>Katılım Bilgileri</h2>
      <ul>
        <li>Tarih: 20 Mart 2024</li>
        <li>Saat: 14:00 - 16:00</li>
        <li>Platform: Zoom</li>
        <li>Dil: Türkçe</li>
        <li>Katılım ücretsizdir</li>
      </ul>

      <h2>Teknik Gereksinimler</h2>
      <ul>
        <li>Stabil internet bağlantısı</li>
        <li>Zoom uygulaması</li>
        <li>Mikrofon ve kamera (isteğe bağlı)</li>
      </ul>
    `
  }
]

export default function EventDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const event = events.find(e => e.id === parseInt(params.id))

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user || !event) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'kayıtlar açık':
        return 'bg-green-500'
      case 'yakında':
        return 'bg-yellow-500'
      case 'tamamlandı':
        return 'bg-gray-500'
      default:
        return 'bg-blue-500'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'konferans':
        return 'bg-purple-100 text-purple-800'
      case 'panel':
        return 'bg-blue-100 text-blue-800'
      case 'tören':
        return 'bg-green-100 text-green-800'
      case 'yarışma':
        return 'bg-red-100 text-red-800'
      case 'eğitim':
        return 'bg-orange-100 text-orange-800'
      case 'workshop':
        return 'bg-indigo-100 text-indigo-800'
      case 'networking':
        return 'bg-pink-100 text-pink-800'
      case 'lansman':
        return 'bg-yellow-100 text-yellow-800'
      case 'toplantı':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <h1 className="text-3xl font-bold text-white">{event.title}</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tarih</p>
                    <p className="font-medium text-gray-900">{event.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-500">Lokasyon</span>
                  </div>
                  <p className="font-medium text-gray-900">{event.location}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-500">Okuma Süresi</span>
                  </div>
                  <p className="font-medium text-gray-900">{event.readTime}</p>
                </div>
              </div>

              <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: event.content }} />

              <div className="mt-8 flex justify-center">
                <button
                  className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
                  onClick={() => alert('Kayıt işlemi başlatılıyor...')}
                >
                  Etkinliğe Kayıt Ol
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 