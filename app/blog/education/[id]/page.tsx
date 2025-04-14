"use client"

import { motion } from 'framer-motion'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'

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
    status: 'Kayıtlar Açık',
    content: `
      <h2>Program Hakkında</h2>
      <p>Liderlik Gelişim Programı, geleceğin yöneticilerini hazırlamak için tasarlanmış kapsamlı bir eğitim programıdır. Program boyunca katılımcılar, modern liderlik yaklaşımları, ekip yönetimi, stratejik düşünme ve karar verme konularında derinlemesine bilgi ve deneyim kazanacaklar.</p>

      <h2>Program İçeriği</h2>
      <ul>
        <li>Liderlik Teorileri ve Uygulamaları</li>
        <li>Stratejik Yönetim ve Karar Verme</li>
        <li>Ekip Yönetimi ve Motivasyon</li>
        <li>Değişim Yönetimi</li>
        <li>İletişim ve Sunum Becerileri</li>
        <li>Proje Yönetimi</li>
        <li>Performans Yönetimi</li>
        <li>Çatışma Yönetimi</li>
      </ul>

      <h2>Eğitim Yöntemi</h2>
      <p>Program, teorik eğitimler, vaka çalışmaları, rol oynama egzersizleri ve mentorluk seanslarını içermektedir. Katılımcılar, gerçek iş dünyasından örnekler üzerinde çalışarak pratik deneyim kazanacaklar.</p>

      <h2>Kimler Katılabilir?</h2>
      <p>Program, yönetici adayları ve mevcut yöneticiler için uygundur. Katılımcıların en az 3 yıl iş deneyimine sahip olmaları beklenmektedir.</p>

      <h2>Program Çıktıları</h2>
      <ul>
        <li>Etkili liderlik becerileri</li>
        <li>Stratejik düşünme yetkinliği</li>
        <li>Ekip yönetimi deneyimi</li>
        <li>Problem çözme becerileri</li>
        <li>İletişim ve sunum yetenekleri</li>
      </ul>

      <h2>Sertifikasyon</h2>
      <p>Program sonunda katılımcılar, Express Akademi onaylı Liderlik Gelişim Programı sertifikası almaya hak kazanacaklardır.</p>
    `
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
    status: 'Devam Ediyor',
    content: `
      <h2>Eğitim Hakkında</h2>
      <p>Kurye Güvenlik Eğitimi, saha ekiplerimizin güvenliğini en üst düzeyde tutmak için tasarlanmış kapsamlı bir eğitim programıdır. Bu program, temel güvenlik önlemleri, ilk yardım ve güvenli sürüş teknikleri konularında pratik bilgiler sunmaktadır.</p>

      <h2>Eğitim İçeriği</h2>
      <ul>
        <li>Temel Güvenlik Protokolleri</li>
        <li>İlk Yardım Teknikleri</li>
        <li>Güvenli Sürüş Eğitimi</li>
        <li>Acil Durum Yönetimi</li>
        <li>Risk Değerlendirmesi</li>
        <li>Kişisel Koruyucu Ekipman Kullanımı</li>
      </ul>

      <h2>Eğitim Yöntemi</h2>
      <p>Program, teorik eğitimler ve pratik uygulamalardan oluşmaktadır. Katılımcılar, simülasyon ortamında güvenli sürüş teknikleri ve ilk yardım uygulamaları yapma fırsatı bulacaklardır.</p>

      <h2>Kimler Katılmalı?</h2>
      <p>Bu eğitim, tüm kurye ekibi için zorunludur. Yeni başlayan kuryeler ve mevcut ekip üyeleri bu eğitimi tamamlamalıdır.</p>

      <h2>Program Çıktıları</h2>
      <ul>
        <li>Güvenli sürüş sertifikası</li>
        <li>İlk yardım sertifikası</li>
        <li>Temel güvenlik protokolleri bilgisi</li>
        <li>Acil durum yönetimi yetkinliği</li>
      </ul>

      <h2>Sertifikasyon</h2>
      <p>Eğitim sonunda katılımcılar, Güvenli Sürüş ve İlk Yardım sertifikalarını almaya hak kazanacaklardır.</p>
    `
  }
]

export default function CourseDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const course = courses.find(c => c.id === parseInt(params.id))

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  if (!user || !course) return null

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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-3">
                  {course.category}
                </span>
                <h1 className="text-3xl font-bold text-white">{course.title}</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-lg font-medium text-orange-600">
                      {course.instructor[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Eğitmen</p>
                    <p className="font-medium text-gray-900">{course.instructor}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(course.status)}`}>
                  {course.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Başlangıç</p>
                  <p className="font-medium text-gray-900">{course.startDate}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Süre</p>
                  <p className="font-medium text-gray-900">{course.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Seviye</p>
                  <p className={`font-medium ${getLevelColor(course.level)}`}>{course.level}</p>
                </div>
              </div>

              <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: course.content }} />

              <div className="mt-8 flex justify-center">
                <button
                  className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
                  onClick={() => alert('Kayıt işlemi başlatılıyor...')}
                >
                  Eğitime Kayıt Ol
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 