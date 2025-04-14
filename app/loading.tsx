export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center px-4">
      <div className="flex items-center space-x-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#F56565]"></div>
        <span className="text-[#4A5568] text-lg">Yükleniyor...</span>
      </div>
    </div>
  )
} 