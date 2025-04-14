'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2D3748]">
            Bir Hata Oluştu
          </h2>
          <p className="text-[#4A5568]">
            Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.
          </p>
          <button
            onClick={reset}
            className="px-4 py-2 bg-[#F56565] text-white rounded-md hover:bg-[#E53E3E] transition-colors"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    </div>
  )
} 