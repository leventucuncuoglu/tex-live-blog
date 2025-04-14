"use client"

import { useAuth } from '@/app/context/AuthContext'
import { useRouter, useParams } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import { motion } from 'framer-motion'

const stories = [
  {
    id: 1,
    title: 'Kuryelikten Bölge Müdürlüğüne: Başarı Hikayem',
    description: 'Trendyol Express\'te kurye olarak başladığım kariyerimde, şimdi İstanbul Avrupa Yakası Bölge Müdürü olarak görev yapıyorum. İşte benim hikayem...',
    image: '/stories/success-story-1.jpg',
    date: '5 Mart 2024',
    author: 'Ahmet Yılmaz',
    role: 'Bölge Müdürü',
    readTime: '8 dk',
    content: `
      2018 yılında Trendyol Express'te kurye olarak başladığım kariyerim, bugün İstanbul Avrupa Yakası Bölge Müdürü olarak devam ediyor. Bu yolculukta öğrendiğim en önemli şey, her zorluğun aslında yeni bir fırsat olduğu.

      Kurye olarak çalışırken edindiğim saha deneyimi, bugün yöneticilik pozisyonumda bana büyük avantaj sağlıyor. Müşterilerimizin beklentilerini, sahada yaşanan zorlukları ve operasyonel süreçleri bizzat deneyimlemiş olmak, daha etkili kararlar almama yardımcı oluyor.

      Kariyer Yolculuğum:
      • 2018: Kurye olarak başladım
      • 2019: Saha Süpervizörü oldum
      • 2020: Operasyon Yöneticiliğine yükseldim
      • 2022: Bölge Müdür Yardımcısı pozisyonuna atandım
      • 2023: Bölge Müdürü olarak atandım

      Bu süreçte Trendyol Express'in sunduğu eğitim ve gelişim fırsatlarından maksimum düzeyde yararlandım:
      • Express Akademi'de liderlik eğitimleri aldım
      • Mentorluk programlarına katıldım
      • Yönetim becerilerimi geliştiren sertifika programlarını tamamladım

      Bugün 200 kişilik bir ekibi yönetiyorum ve her gün yeni başarılara imza atıyoruz. Ekibimle birlikte:
      • Teslimat sürelerimizi %30 iyileştirdik
      • Müşteri memnuniyet skorumuzu 4.8'e yükselttik
      • Operasyonel maliyetlerimizi %25 azalttık

      Genç arkadaşlarıma tavsiyem, her pozisyonda ellerinden gelenin en iyisini yapmaları ve kendilerini sürekli geliştirmeleri. Trendyol Express gibi fırsatlar sunan bir şirkette, başarı için gereken tek şey azim ve çalışkanlık.

      Gelecek hedeflerim arasında:
      • Operasyonel süreçlerde dijital dönüşümü hızlandırmak
      • Ekip üyelerimin kariyer gelişimlerine daha fazla katkı sağlamak
      • Sürdürülebilir büyüme stratejileri geliştirmek var

      Bu yolculukta bana destek olan tüm ekip arkadaşlarıma ve yöneticilerime teşekkür ediyorum. Trendyol Express'te her gün yeni bir başarı hikayesi yazılıyor ve ben bu hikayelerin bir parçası olmaktan gurur duyuyorum.
    `
  },
  {
    id: 2,
    title: 'Teknoloji Ekibimizin Başarı Öyküsü',
    description: 'Rota optimizasyon algoritmamızı geliştirirken karşılaştığımız zorlukları nasıl aştık? İşte ekip olarak başarıya ulaşma hikayemiz...',
    image: '/stories/tech-team.jpg',
    date: '4 Mart 2024',
    author: 'Zeynep Kaya',
    role: 'Yazılım Takım Lideri',
    readTime: '6 dk',
    content: `
      Trendyol Express'in teknoloji ekibi olarak, teslimat operasyonlarımızı daha verimli hale getirmek için yapay zeka destekli rota optimizasyon projemizi hayata geçirdik. Bu projede yaşadığımız deneyimleri ve başarı hikayemizi sizlerle paylaşmak istiyorum.

      Projenin Başlangıcı:
      2023 yılının başında, günlük 1 milyon teslimatı daha verimli yönetmek için yeni bir rota optimizasyon sistemine ihtiyaç duyduk. 10 kişilik bir ekiple bu zorlu göreve başladık.

      Karşılaştığımız Zorluklar:
      • Büyük veri yönetimi
      • Gerçek zamanlı trafik verilerinin entegrasyonu
      • Dinamik rota güncellemeleri
      • Farklı teslimat önceliklerinin optimizasyonu

      Çözüm Yaklaşımımız:
      1. Makine öğrenmesi modellerini geliştirdik
      2. Mikroservis mimarisine geçiş yaptık
      3. Gerçek zamanlı veri işleme altyapısı kurduk
      4. A/B testleri ile sürekli iyileştirmeler yaptık

      Proje Sonuçları:
      • Teslimat sürelerinde %30 iyileşme
      • Yakıt tüketiminde %25 azalma
      • Kurye başına günlük teslimat sayısında %20 artış
      • Müşteri memnuniyetinde belirgin artış

      Ekip olarak en büyük başarımız, teorik bilgilerimizi sahada uygulanabilir çözümlere dönüştürmek oldu. Her bir takım üyesinin özverili çalışması ve yaratıcı fikirleri, projenin başarıya ulaşmasında kritik rol oynadı.

      Gelecek Hedeflerimiz:
      • Yapay zeka modellerimizi daha da geliştirmek
      • Otonom teslimat sistemleri üzerinde çalışmak
      • Yeşil teslimat çözümleri geliştirmek

      Bu proje, teknoloji ve inovasyonun lojistik sektöründe nasıl fark yaratabileceğinin güzel bir örneği oldu. Trendyol Express'in teknoloji ekibi olarak, gelecekte de benzer başarı hikayelerine imza atmaya devam edeceğiz.
    `
  }
  // ... Diğer hikayeler için benzer içerikler eklenecek
]

export default function StoryDetail() {
  const { user } = useAuth()
  const router = useRouter()
  const params = useParams()
  const storyId = parseInt(params.id as string)
  
  const story = stories.find(item => item.id === storyId)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user || !story) return null

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
              {story.role}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{story.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{story.date}</span>
              <span className="mx-2">•</span>
              <span>{story.readTime} okuma</span>
            </div>
            <div className="flex items-center mb-8">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-sm font-medium text-orange-600">
                  {story.author[0]}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{story.author}</p>
                <p className="text-sm text-gray-500">{story.role}</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {story.content.split('\n').map((paragraph, index) => (
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