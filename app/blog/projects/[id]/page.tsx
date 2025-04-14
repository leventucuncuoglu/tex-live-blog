"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'

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
    readTime: '5 dk',
    content: `
      <h2>Proje Hakkında</h2>
      <p>Elektrikli Araç Filosu projesi, sürdürülebilir teslimat operasyonlarımız için önemli bir dönüm noktasını temsil etmektedir. 100 adet elektrikli araçtan oluşan filomuz ile karbon emisyonlarımızı azaltmayı ve çevre dostu bir teslimat ağı oluşturmayı hedefliyoruz.</p>

      <h2>Proje Hedefleri</h2>
      <ul>
        <li>Karbon emisyonlarında %40 azalma</li>
        <li>Operasyonel maliyetlerde %25 tasarruf</li>
        <li>Sürdürülebilir teslimat altyapısının oluşturulması</li>
        <li>Şehir içi hava kirliliğine katkının azaltılması</li>
      </ul>

      <h2>Proje Fazları</h2>
      <ol>
        <li>Araç seçimi ve tedarik süreci (Tamamlandı)</li>
        <li>Şarj istasyonu altyapısının kurulumu (Devam Ediyor)</li>
        <li>Pilot bölge uygulamaları (Devam Ediyor)</li>
        <li>Filo yönetim sisteminin entegrasyonu (Planlama)</li>
        <li>Tam ölçekli operasyona geçiş (Planlama)</li>
      </ol>

      <h2>Başarılar ve Kazanımlar</h2>
      <ul>
        <li>İlk 25 elektrikli aracın teslimatı ve operasyona başlaması</li>
        <li>10 şarj istasyonunun kurulumu ve devreye alınması</li>
        <li>Pilot bölgede %35 emisyon azaltımı</li>
        <li>Operasyonel maliyetlerde %20 iyileşme</li>
      </ul>

      <h2>Zorluklar ve Çözümler</h2>
      <p>Projenin en büyük zorluklarından biri şarj istasyonu altyapısının kurulumu ve optimizasyonu olmuştur. Bu sorunu çözmek için:</p>
      <ul>
        <li>Stratejik noktalarda şarj istasyonları konumlandırıldı</li>
        <li>Akıllı şarj yönetim sistemi geliştirildi</li>
        <li>Rota optimizasyonu ile şarj ihtiyaçları planlandı</li>
      </ul>

      <h2>Gelecek Planları</h2>
      <p>Önümüzdeki 6 ay içinde:</p>
      <ul>
        <li>Kalan 75 aracın teslimatı ve devreye alınması</li>
        <li>20 yeni şarj istasyonunun kurulumu</li>
        <li>Filo yönetim sisteminin tam entegrasyonu</li>
        <li>Sürücü eğitim programlarının tamamlanması</li>
      </ul>
    `
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
    readTime: '4 dk',
    content: `
      <h2>Proje Hakkında</h2>
      <p>Yapay Zeka Destekli Rota Optimizasyonu projesi, teslimat operasyonlarımızı daha verimli hale getirmek için geliştirilmiş yenilikçi bir çözümdür. Makine öğrenimi algoritmaları kullanarak teslimat rotalarını optimize eden sistem, hem operasyonel verimliliği artırmakta hem de çevresel etkimizi azaltmaktadır.</p>

      <h2>Teknolojik Altyapı</h2>
      <ul>
        <li>Makine Öğrenimi Modelleri</li>
        <li>Gerçek Zamanlı Trafik Analizi</li>
        <li>GPS ve Konum Bazlı Hizmetler</li>
        <li>Büyük Veri İşleme Sistemleri</li>
      </ul>

      <h2>Proje Fazları</h2>
      <ol>
        <li>Veri Toplama ve Analiz (Tamamlandı)</li>
        <li>AI Modelinin Geliştirilmesi (Tamamlandı)</li>
        <li>Pilot Uygulama ve Test (Tamamlandı)</li>
        <li>Sistem Entegrasyonu (Tamamlandı)</li>
        <li>Tam Ölçekli Kullanıma Geçiş (Tamamlandı)</li>
      </ol>

      <h2>Elde Edilen Sonuçlar</h2>
      <ul>
        <li>Teslimat sürelerinde %25 azalma</li>
        <li>Yakıt tüketiminde %20 tasarruf</li>
        <li>Kurye başına günlük teslimat sayısında %30 artış</li>
        <li>Müşteri memnuniyetinde %15 iyileşme</li>
      </ul>

      <h2>Sistem Özellikleri</h2>
      <ul>
        <li>Dinamik rota optimizasyonu</li>
        <li>Gerçek zamanlı trafik verisi entegrasyonu</li>
        <li>Hava durumu bazlı rota ayarlaması</li>
        <li>Teslimat önceliklendirme</li>
        <li>Kurye performans analizi</li>
      </ul>

      <h2>Gelecek Geliştirmeler</h2>
      <p>Sistem sürekli olarak geliştirilmeye devam edecek:</p>
      <ul>
        <li>Yapay zeka modelinin iyileştirilmesi</li>
        <li>Yeni veri kaynaklarının entegrasyonu</li>
        <li>Kullanıcı arayüzü geliştirmeleri</li>
        <li>Performans optimizasyonları</li>
      </ul>
    `
  }
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const project = projects.find(p => p.id === parseInt(params.id))

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user || !project) return null

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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-3">
                  {project.team}
                </span>
                <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-lg font-medium text-orange-600">
                      {project.team[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sorumlu Ekip</p>
                    <p className="font-medium text-gray-900">{project.team}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Başlangıç</p>
                  <p className="font-medium text-gray-900">{project.date}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">İlerleme</p>
                  <p className="font-medium text-gray-900">{project.progress}%</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Okuma Süresi</p>
                  <p className="font-medium text-gray-900">{project.readTime}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Proje İlerlemesi</span>
                  <span className="font-medium text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getProgressColor(project.progress)} transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />

              <div className="mt-8 flex justify-center space-x-4">
                <button
                  className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors flex items-center"
                  onClick={() => window.open('https://twitter.com/intent/tweet', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter'da Paylaş
                </button>
                <button
                  className="px-6 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors flex items-center"
                  onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn'de Paylaş
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 