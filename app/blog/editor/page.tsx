"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg"></div>
})

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    ['clean']
  ],
}

const formats = [
  'header', 'font',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'align',
  'list', 'bullet',
  'blockquote', 'code-block',
  'link', 'image', 'video'
]

export default function EditorPanel() {
  const { user } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Teknoloji')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [sources, setSources] = useState<string[]>([''])

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else if (user.role !== 'editor') {
      router.push('/blog/home')
    }
    setIsLoading(false)
  }, [user, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!user || user.role !== 'editor') return null

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSourceChange = (index: number, value: string) => {
    const newSources = [...sources]
    newSources[index] = value
    setSources(newSources)
  }

  const addSource = () => {
    setSources([...sources, ''])
  }

  const removeSource = (index: number) => {
    const newSources = sources.filter((_, i) => i !== index)
    setSources(newSources)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      formData.append('category', category)
      formData.append('sources', JSON.stringify(sources.filter(source => source.trim() !== '')))
      if (image) {
        formData.append('image', image)
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Blog yazısı oluşturulamadı')
      }

      const data = await response.json()
      alert('Blog yazısı başarıyla oluşturuldu!')
      router.push(`/blog/posts/${data.slug}`)
    } catch (error) {
      alert('Bir hata oluştu!')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Yeni Blog Yazısı</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Başlık */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Başlık
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            {/* Kategori */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="Teknoloji">Teknoloji</option>
                <option value="Sürdürülebilirlik">Sürdürülebilirlik</option>
                <option value="İnovasyon">İnovasyon</option>
              </select>
            </div>

            {/* Görsel Yükleme */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Kapak Görseli
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Görsel Seç
                </label>
                {imagePreview && (
                  <div className="relative w-24 h-24">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* İçerik */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                İçerik
              </label>
              <div className="border border-gray-300 rounded-lg">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                  className="h-96"
                />
              </div>
            </div>

            {/* Kaynaklar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kaynaklar
              </label>
              <div className="space-y-3">
                {sources.map((source, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="url"
                      value={source}
                      onChange={(e) => handleSourceChange(index, e.target.value)}
                      placeholder="https://..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      type="button"
                      onClick={() => removeSource(index)}
                      className="p-2 text-red-500 hover:text-red-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSource}
                  className="flex items-center text-sm text-orange-500 hover:text-orange-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Kaynak Ekle
                </button>
              </div>
            </div>

            {/* Gönder Butonu */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Yükleniyor...' : 'Yayınla'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 