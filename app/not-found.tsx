import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2D3748]">
            Sayfa Bulunamadı
          </h2>
          <p className="text-[#4A5568]">
            Üzgünüz, aradığınız sayfaya ulaşılamıyor.
          </p>
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-[#F56565] text-white rounded-md hover:bg-[#E53E3E] transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  )
} 