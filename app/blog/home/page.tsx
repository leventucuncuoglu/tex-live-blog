"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

// Örnek haberler
const featuredNews = [
  {
    id: 1,
    title: "Yapay Zekâ, Lojistikte Devrim Yaratıyor",
    description: "Yapay zekâ teknolojileri artık yalnızca üretim ve finans gibi alanlarla sınırlı kalmıyor; malzeme akışından rota optimizasyonuna, depo yönetiminden müşteri deneyimine kadar lojistiğin her aşamasında aktif rol alıyor.",
    image: "/lojistik_yapay_zeka.jpg?v=2",
    date: "12 Mart 2024",
    author: "Dr. Ali Yıldız",
    category: "Teknoloji",
    slug: "lojistikte-yapay-zeka-kullanimi"
  },
  {
    id: 2,
    title: "Ağır Ticari Araçlar Sektöründe Sürdürülebilirlik",
    description: "Ağır ticari araçlar, küresel taşımacılığın bel kemiğini oluştururken; artan çevresel farkındalık ve iklim kriziyle birlikte sürdürülebilirlik, sektörün vazgeçilmez önceliği haline geliyor. Hem çevre dostu hem de ekonomik çözümler sunan bu dönüşüm, aynı zamanda sektöre yeni fırsatlar da sunuyor.",
    image: "/surdurebilir_agir_araclar.jpg",
    date: "11 Mart 2024",
    author: "Zeynep Kaya",
    category: "Sürdürülebilirlik",
    slug: "agir-ticari-araclar-surdurulebilirlik"
  },
  {
    id: 3,
    title: "Drone ile Teslimat: Geleceğin Dağıtım Ağı",
    description: "Son yıllarda teknolojinin hızla gelişmesiyle birlikte lojistik sektöründe radikal dönüşümler yaşanıyor. Bu dönüşümlerin en dikkat çekici olanlarından biri ise hiç şüphesiz drone ile yapılan teslimatlar. Artık siparişler, gökyüzünden doğrudan kapınıza geliyor.",
    image: "/dron_teslimat.jpg",
    date: "10 Mart 2024",
    author: "Mert Demir",
    category: "İnovasyon",
    slug: "drone-ile-teslimat-gelecegin-dagitim-agi"
  }
]

const blogPosts = [
  {
    id: 1,
    title: "Lojistikte Yapay Zeka Kullanımı",
    excerpt: "Yapay zeka teknolojileri, lojistik süreçleri nasıl dönüştürüyor? Sektörde verimliliği %40'a kadar artıran bu teknoloji, gelecekte neler vaat ediyor?",
    image: "/lojistik_yapay_zeka.jpg?v=2",
    date: "12 Mart 2024",
    author: "Dr. Ali Yıldız",
    readTime: "8 dk",
    likes: 124,
    comments: 45,
    category: "Teknoloji",
    slug: "lojistikte-yapay-zeka-kullanimi"
  },
  {
    id: 2,
    title: "Ağır Ticari Araçlar Sektöründe Sürdürülebilirlik: Geleceğe Yeşil Bir Yolculuk",
    excerpt: "Ağır ticari araçlar, küresel taşımacılığın bel kemiğini oluştururken; artan çevresel farkındalık ve iklim kriziyle birlikte sürdürülebilirlik, sektörün vazgeçilmez önceliği haline geliyor.",
    image: "/surdurebilir_agir_araclar.jpg",
    date: "11 Mart 2024",
    author: "Zeynep Kaya",
    readTime: "7 dk",
    likes: 98,
    comments: 32,
    category: "Sürdürülebilirlik",
    slug: "agir-ticari-araclar-surdurulebilirlik"
  },
  {
    id: 3,
    title: "Drone ile Teslimat: Geleceğin Dağıtım Ağı",
    excerpt: "Son yıllarda teknolojinin hızla gelişmesiyle birlikte lojistik sektöründe radikal dönüşümler yaşanıyor. Bu dönüşümlerin en dikkat çekici olanlarından biri ise hiç şüphesiz drone ile yapılan teslimatlar.",
    image: "/dron_teslimat.jpg",
    date: "10 Mart 2024",
    author: "Mert Demir",
    readTime: "6 dk",
    likes: 156,
    comments: 67,
    category: "İnovasyon",
    slug: "drone-ile-teslimat-gelecegin-dagitim-agi"
  },
  {
    id: 4,
    title: "Blokzincir ile Tedarik Zinciri Şeffaflığı",
    excerpt: "Tedarik zincirinde şeffaflık ve güven artık blokzincir teknolojisi ile sağlanıyor. Ürünlerin yolculuğunu gerçek zamanlı takip etmek artık mümkün.",
    image: "/blokzincir_tedarik.jpg",
    date: "9 Mart 2024",
    author: "Prof. Dr. Ahmet Şahin",
    readTime: "10 dk",
    likes: 89,
    comments: 28,
    category: "Teknoloji",
    slug: "blokzincir-ile-tedarik-zinciri-seffafligi"
  },
  {
    id: 5,
    title: "Yeşil Depo Sertifikası'nı Aldık",
    excerpt: "Sürdürülebilir depo yönetimi anlayışımız meyvelerini veriyor. İstanbul'daki ana depolama tesisimiz Yeşil Depo Sertifikası almaya hak kazandı.",
    image: "/yesil_depo.jpg",
    date: "8 Mart 2024",
    author: "Ayşe Yılmaz",
    readTime: "5 dk",
    likes: 112,
    comments: 41,
    category: "Sürdürülebilirlik",
    slug: "yesil-depo-sertifikasini-aldik"
  },
  {
    id: 6,
    title: "Akıllı Paket Takip Sistemi",
    excerpt: "Geliştirdiğimiz yeni IoT tabanlı paket takip sistemi ile gönderileriniz artık daha güvende. Sıcaklık, nem ve darbe sensörleri ile gerçek zamanlı izleme.",
    image: "/akilli_paket.jpg",
    date: "7 Mart 2024",
    author: "Burak Tekin",
    readTime: "6 dk",
    likes: 78,
    comments: 23,
    category: "Teknoloji",
    slug: "akilli-paket-takip-sistemi"
  }
]

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [reactions, setReactions] = useState<{ [key: number]: string }>({})
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)
  }

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }

    // Slider otomatik geçiş
    let timer: NodeJS.Timeout
    if (!isPaused) {
      timer = setInterval(() => {
        nextSlide()
      }, 7000)
    }

    return () => clearInterval(timer)
  }, [user, router, isPaused])

  if (!user) return null

  const handleReaction = (postId: number, reaction: string) => {
    setReactions(prev => ({
      ...prev,
      [postId]: reaction
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Slider */}
      <div 
        className="relative h-[600px] w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Link 
              href={featuredNews[currentSlide].slug ? `/blog/posts/${featuredNews[currentSlide].slug}` : '#'} 
              className="block h-full"
            >
              <div className="relative h-full w-full">
                <Image
                  src={featuredNews[currentSlide].image}
                  alt={featuredNews[currentSlide].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold mb-4 text-orange-500"
                    >
                      {featuredNews[currentSlide].title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg mb-4 text-white"
                    >
                      {featuredNews[currentSlide].description}
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center space-x-4 text-white/90"
                    >
                      <span>{featuredNews[currentSlide].date}</span>
                      <span>•</span>
                      <span>{featuredNews[currentSlide].author}</span>
                      <span>•</span>
                      <span>{featuredNews[currentSlide].category}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
        
        {/* İleri-Geri Tuşları */}
        <button
          onClick={(e) => {
            e.preventDefault()
            prevSlide()
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            nextSlide()
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slider Kontrolleri */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Blog Kartları */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/posts/${post.slug}`} key={post.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                        alt={post.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {['❤️', '👍', '🎉'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={(e) => {
                            e.preventDefault();
                            handleReaction(post.id, emoji);
                          }}
                          className={`text-sm transition-transform hover:scale-125 ${
                            reactions[post.id] === emoji ? 'scale-125' : ''
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 