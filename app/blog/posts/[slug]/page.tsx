"use client"

import { useEffect } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const posts = {
  "lojistikte-yapay-zeka-kullanimi": {
    id: 1,
    title: "Yapay Zekâ, Lojistikte Devrim Yaratıyor: Gelecek Artık Daha Akıllı Taşınıyor",
    content: `İstanbul, 2025 – Lojistik sektörü, dijital dönüşümde yeni bir sayfa açıyor. Yapay zekâ (YZ) teknolojileri artık yalnızca üretim ve finans gibi alanlarla sınırlı kalmıyor; malzeme akışından rota optimizasyonuna, depo yönetiminden müşteri deneyimine kadar lojistiğin her aşamasında aktif rol alıyor. Uzmanlara göre bu dönüşüm, sektörde verimliliği yüzde 40'a kadar artırabilir.

Artan küresel ticaret hacmi, zaman ve maliyet baskılarını da beraberinde getiriyor. Bu noktada devreye giren yapay zekâ sistemleri, tahmine dayalı analizler ve gerçek zamanlı veri işleme kabiliyetleri sayesinde taşımacılıkta olağanüstü bir dönüşüm yaratıyor. Örneğin, akıllı algoritmalar sayesinde taşıma araçlarının güzergâhları trafik, hava durumu ve sipariş yoğunluğuna göre otomatik olarak yeniden planlanabiliyor. Bu sayede hem zaman kayıpları önleniyor hem de yakıt tasarrufu sağlanıyor.

Depo içi operasyonlarda da YZ'nin gücü hissediliyor. İnsan benzeri robotlar, gelen siparişleri saniyeler içinde işleyip doğru ürünleri en hızlı rotadan toplayarak paketliyor. Bu sistemler, stok yönetimini hatasız hâle getirirken, insan hatasını minimuma indiriyor. Özellikle e-ticaret sektörünün hızla büyümesi, bu otomasyon sistemlerine olan talebi kat kat artırmış durumda.

Yapay zekâ sadece operasyonel verimlilikle sınırlı kalmıyor; aynı zamanda müşteri memnuniyetini de üst düzeye çıkarıyor. Sipariş takibi, otomatik bilgilendirme sistemleri ve chatbot destekli müşteri hizmetleri, kullanıcı deneyimini iyileştirirken firmaların marka değerini de güçlendiriyor.

Sektör temsilcileri, bu teknolojilerin sadece büyük lojistik devleri için değil, KOBİ'ler için de erişilebilir hale geldiğini belirtiyor. Bulut tabanlı yapay zekâ çözümleri, düşük maliyetle yüksek verim sunarak dijitalleşme sürecinde ölçek bağımsız fırsatlar yaratıyor.

Sonuç olarak, yapay zekânın lojistikteki yükselişi artık bir gelecek vizyonu değil, günümüzün gerçeği. Veriye dayalı, hızlı ve akıllı çözümlerle donatılan yeni nesil lojistik anlayışı; sektörde hız, güvenilirlik ve sürdürülebilirlik adına devrim niteliği taşıyor.`,
    image: "/lojistik_yapay_zeka.jpg?v=2",
    date: "12 Mart 2024",
    author: "Dr. Ali Yıldız",
    readTime: "8 dk",
    category: "Teknoloji"
  },
  "agir-ticari-araclar-surdurulebilirlik": {
    id: 2,
    title: "Ağır Ticari Araçlar Sektöründe Sürdürülebilirlik: Geleceğe Yeşil Bir Yolculuk",
    content: `Ağır ticari araçlar, küresel taşımacılığın bel kemiğini oluştururken; artan çevresel farkındalık ve iklim kriziyle birlikte sürdürülebilirlik, sektörün vazgeçilmez önceliği haline geliyor. Hem çevre dostu hem de ekonomik çözümler sunan bu dönüşüm, aynı zamanda sektöre yeni fırsatlar da sunuyor.

Verimlilik Artışı ve Yakıt Tasarrufu
Sektördeki sürdürülebilirlik çabaları, araç ve yakıt verimliliğini artırmaya yönelik teknoloji yatırımlarıyla şekilleniyor. Daha hafif malzemeler, aerodinamik tasarımlar ve yüksek verimli motorlar sayesinde araçlar daha az yakıt tüketiyor. Bu sayede hem işletme maliyetleri azalıyor hem de karbon ayak izi düşürülüyor.

Alternatif Enerji Kaynakları ve Emisyon Azaltımı
Elektrikli ve alternatif yakıtlı araçlar, sektörde sürdürülebilirliğin en somut adımları arasında yer alıyor. Bu araçlar, fosil yakıt tüketimini azaltarak çevreye zarar vermeden taşımacılığın yapılmasını sağlıyor. Geleneksel araçlara göre daha düşük emisyon salımı ve daha az bakım ihtiyacı sayesinde uzun vadede tasarruf sağlanıyor.

Yüksek Başlangıç Maliyetlerine Karşı Uzun Vadeli Kazanç
Yeni nesil teknolojilere geçiş maliyetli gibi görünse de, uzun vadeli işletme maliyetleri göz önüne alındığında büyük avantajlar sunuyor. Düşük yakıt tüketimi, daha az bakım ihtiyacı ve verimlilik artışı gibi faktörler, sürdürülebilir araçların toplam sahip olma maliyetini düşürüyor.

Yeni Pazarlara Açılma ve İhracat Fırsatları
Sürdürülebilirlik yatırımları sayesinde Türk üreticiler, Avrupa Yeşil Mutabakatı gibi çevreci politikaları benimseyen pazarlarda rekabet edebilir hale geliyor. Bu da hem ihracat potansiyelini artırıyor hem de Türkiye'nin global pazardaki itibarını güçlendiriyor.

Yeşil Dönüşümle Yeni İstihdam Alanları
Bu dönüşüm sadece çevreyi korumakla kalmıyor; aynı zamanda yeni iş kolları ve meslek alanları da yaratıyor. Elektrikli araç üretimi, batarya teknolojileri ve sürdürülebilir lojistik hizmetleri gibi alanlar, sektörde nitelikli iş gücüne olan ihtiyacı artırıyor.

💡 Bu dönüşüm sadece araçların değil, sektörün tamamının geleceğini yeniden şekillendiriyor. Bugünden atılacak her sürdürülebilir adım, yarının daha yaşanabilir dünyasına katkı sağlıyor.

📌 Kaynak:
Ağır Ticari Araçlar Sektöründe Sürdürülebilirlik – Lojiport.com`,
    image: "/surdurebilir_agir_araclar.jpg",
    date: "11 Mart 2024",
    author: "Zeynep Kaya",
    readTime: "7 dk",
    category: "Sürdürülebilirlik"
  },
  "drone-ile-teslimat-gelecegin-dagitim-agi": {
    id: 3,
    title: "Drone ile Teslimat: Geleceğin Dağıtım Ağı",
    content: `Son yıllarda teknolojinin hızla gelişmesiyle birlikte lojistik sektöründe radikal dönüşümler yaşanıyor. Bu dönüşümlerin en dikkat çekici olanlarından biri ise hiç şüphesiz drone ile yapılan teslimatlar. Artık siparişler, gökyüzünden doğrudan kapınıza geliyor.

Neden Drone'lar?
Drone'lar, özellikle şehir içi yoğun trafiğin olduğu bölgelerde ya da ulaşılması zor kırsal alanlarda teslimat sürelerini ciddi şekilde azaltıyor. Hem zamandan tasarruf sağlıyor hem de karbon ayak izini azaltarak çevre dostu bir çözüm sunuyor.

Hız, Verimlilik ve Maliyet Avantajı
Geleneksel teslimat yöntemlerine kıyasla drone'lar daha az insan gücü gerektiriyor. Otomasyonla çalışan bu sistem, iş gücü maliyetlerini azaltıyor ve insan kaynaklı hataları minimize ediyor. Ayrıca küçük boyutlu ve acil teslimatlar için ideal.

Zorluklar ve Regülasyonlar
Her ne kadar heyecan verici olsa da drone ile teslimatın önünde bazı engeller var. Hava sahası düzenlemeleri, güvenlik önlemleri, hava şartlarına karşı dayanıklılık ve şehir içinde uçuş izinleri henüz tam anlamıyla çözülmüş değil. Ancak teknoloji geliştikçe bu sorunların da üstesinden gelinmesi bekleniyor.

Gelecek Ne Getiriyor?
Amazon, UPS, Alibaba gibi dev şirketlerin yaptığı pilot uygulamalar, drone teslimatlarının artık bir hayalden çıkıp gerçekliğe dönüştüğünü gösteriyor. Yakın gelecekte acil ilaç teslimatlarından, online siparişlere kadar birçok alanda bu teknolojiyi daha sık göreceğiz.

Sonuç olarak, drone ile teslimat, lojistik sektöründe devrim niteliğinde bir gelişme. Sürdürülebilirlik, hız ve teknolojiyi bir araya getiren bu sistem, geleceğin dağıtım ağı olarak giderek daha fazla benimseniyor.`,
    image: "/dron_teslimat.jpg",
    date: "10 Mart 2024",
    author: "Mert Demir",
    readTime: "6 dk",
    category: "İnovasyon"
  },
  "blokzincir-ile-tedarik-zinciri-seffafligi": {
    id: 4,
    title: "Blokzincir ile Tedarik Zinciri Şeffaflığı",
    content: `TEX Live, tedarik zinciri operasyonlarında devrim niteliğinde bir adım atarak blokzincir teknolojisini entegre etti. Bu yenilikçi yaklaşım, ürünlerin üretimden son kullanıcıya ulaşana kadar geçen tüm sürecin şeffaf ve güvenilir bir şekilde izlenebilmesini sağlıyor.

Blokzincir teknolojisinin sağladığı değiştirilemez kayıt sistemi sayesinde, tedarik zincirindeki her hareket anında kaydediliyor ve tüm paydaşlar tarafından görüntülenebiliyor. Bu sistem özellikle:

- Ürün orijinalliğinin doğrulanması
- Teslimat süreçlerinin optimizasyonu
- Kalite kontrolü ve sertifikasyon
- Gıda güvenliği takibi
- Sahtecilikle mücadele

gibi kritik alanlarda büyük fayda sağlıyor.

Sistem, IoT sensörleri ile entegre çalışarak sıcaklık, nem, darbe gibi çevresel faktörleri de kayıt altına alıyor. Bu sayede özellikle hassas ürünlerin taşınmasında optimum koşulların sağlanıp sağlanmadığı anlık olarak kontrol edilebiliyor.

TEX Live'ın blokzincir altyapısı, açık kaynak teknolojiler üzerine inşa edildi ve diğer tedarik zinciri aktörleriyle kolay entegrasyon sağlayacak şekilde tasarlandı. Bu sayede küçük üreticiden büyük perakendecilere kadar tüm paydaşlar sisteme dahil olabiliyor.

Müşteriler için geliştirilen mobil uygulama sayesinde, ürünlerin QR kodları okutularak tüm yolculuk geçmişi görüntülenebiliyor. Bu şeffaflık, müşteri güvenini artırırken, markaların da itibarını güçlendiriyor.

TEX Live, bu teknolojiyi öncelikle ilaç ve gıda taşımacılığında kullanmaya başladı. İlk sonuçlar, tedarik zinciri verimliliğinde %25'lik bir artış ve hata oranlarında %80'lik bir düşüş gösteriyor.`,
    image: "/blokzincir_tedarik.jpg",
    date: "9 Mart 2024",
    author: "Prof. Dr. Ahmet Şahin",
    readTime: "10 dk",
    category: "Teknoloji"
  },
  "yesil-depo-sertifikasini-aldik": {
    id: 5,
    title: "Yeşil Depo Sertifikası'nı Aldık",
    content: `TEX Live'ın İstanbul'daki ana depolama tesisi, sürdürülebilir depo yönetimi konusundaki çabalarının karşılığını aldı. Uluslararası Yeşil Depo Sertifikası'nı almaya hak kazanan tesis, Türkiye'de bu sertifikaya sahip ilk lojistik tesisi olma özelliğini taşıyor.

Sertifika kapsamında değerlendirilen kriterler:
- Enerji verimliliği
- Atık yönetimi
- Su tasarrufu
- Yenilenebilir enerji kullanımı
- Çalışan sağlığı ve güvenliği
- Çevre dostu malzeme kullanımı

Tesiste hayata geçirilen yeşil uygulamalar:
- Çatı üzerine kurulan güneş panelleri ile elektrik ihtiyacının %70'i karşılanıyor
- Yağmur suyu toplama sistemleri ile yıllık su tüketimi %40 azaltıldı
- LED aydınlatma ve hareket sensörleri ile enerji tasarrufu sağlanıyor
- Atıkların %95'i geri dönüşüme kazandırılıyor
- Elektrikli forklift ve depo içi araçlar kullanılıyor

Bu dönüşüm sadece çevresel değil, ekonomik açıdan da önemli kazanımlar sağladı. İlk yıl içinde:
- Enerji maliyetlerinde %45 düşüş
- Su tüketiminde %40 azalma
- Operasyonel verimlilikte %30 artış
- Atık yönetimi maliyetlerinde %60 tasarruf elde edildi

TEX Live, 2025 yılına kadar tüm depolama tesislerini Yeşil Depo standartlarına uygun hale getirmeyi hedefliyor. Bu kapsamda diğer tesislerde de dönüşüm çalışmaları başlatıldı.`,
    image: "/yesil_depo.jpg",
    date: "8 Mart 2024",
    author: "Ayşe Yılmaz",
    readTime: "5 dk",
    category: "Sürdürülebilirlik"
  },
  "akilli-paket-takip-sistemi": {
    id: 6,
    title: "Akıllı Paket Takip Sistemi",
    content: `TEX Live, geliştirdiği yeni IoT tabanlı paket takip sistemi ile lojistik sektöründe bir ilke imza atıyor. Akıllı sensörlerle donatılan paketler, taşıma sürecinde maruz kaldıkları tüm çevresel koşulları gerçek zamanlı olarak izleyip raporluyor.

Sistem şu özellikleri içeriyor:
- Sıcaklık ve nem takibi
- Darbe ve titreşim sensörleri
- Konum bazlı rota takibi
- Işık sensörleri (paket açılma tespiti için)
- Batarya ömrü 30 güne kadar uzayan sensörler
- Gerçek zamanlı veri aktarımı

Bu teknoloji özellikle:
- İlaç taşımacılığı
- Hassas elektronik ekipman
- Sanat eserleri
- Gıda ürünleri
- Tehlikeli maddeler
gibi özel taşıma koşulları gerektiren ürünler için kritik önem taşıyor.

Mobil uygulama üzerinden müşteriler:
- Paketlerinin anlık konumunu görebiliyor
- Sıcaklık ve nem grafiklerini inceleyebiliyor
- Olası darbe ve titreşimleri tespit edebiliyor
- Teslimat tahminlerini güncel olarak takip edebiliyor
- Acil durumlarda anlık bildirim alabiliyor

İlk ay sonuçlarına göre:
- Hasarlı teslimat oranı %90 azaldı
- Müşteri memnuniyeti %40 arttı
- Sigorta maliyetleri %30 düştü
- Teslimat süreçleri %25 hızlandı

TEX Live, bu teknolojiyi 2024 sonuna kadar tüm premium hizmetlerinde standart olarak sunmayı hedefliyor.`,
    image: "/akilli_paket.jpg",
    date: "7 Mart 2024",
    author: "Burak Tekin",
    readTime: "6 dk",
    category: "Teknoloji"
  }
}

export default function PostDetail({ params }: { params: { slug: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const post = posts[params.slug]

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user || !post) return null

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Başlık Bölümü */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="text-orange-500">{post.category}</span>
            </div>
          </div>

          {/* Kapak Görseli */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* İçerik */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-6 text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Sosyal Paylaşım */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <span>👍</span>
                  <span>Beğen</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                  <span>💬</span>
                  <span>Yorum Yap</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span>📤 Paylaş</span>
                </button>
                <button className="text-gray-600 hover:text-orange-500 transition-colors">
                  <span>🔖 Kaydet</span>
                </button>
              </div>
            </div>
          </div>

          {/* Anasayfaya Dön Butonu */}
          <div className="mt-8 text-center">
            <Link 
              href="/blog/home" 
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Anasayfaya Dön</span>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  )
} 