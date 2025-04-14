"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/components/Navbar'

// Örnek veriler
const sampleTopics = [
  {
    id: 1,
    title: "lojistik 4.0",
    entries: [
      {
        id: 1,
        content: "endüstri 4.0'ın lojistik sektöründeki yansıması. yapay zeka, nesnelerin interneti, büyük veri analizi gibi teknolojilerin lojistik süreçlerine entegre edilmesiyle ortaya çıkan yeni nesil lojistik yaklaşımı.",
        author: "logistician",
        date: "15 Mart 2024",
        likes: 42,
        isEditorChoice: true
      },
      {
        id: 2,
        content: "geleneksel lojistik anlayışını kökten değiştiren dijital dönüşüm hareketi. depo otomasyonundan, otonom araçlara, drone ile teslimatlardan, blockchain tabanlı tedarik zinciri yönetimine kadar geniş bir yelpazede inovasyonları kapsıyor.",
        author: "tech_expert",
        date: "15 Mart 2024",
        likes: 28
      }
    ],
    createdAt: "15 Mart 2024",
    totalEntries: 2
  },
  {
    id: 2,
    title: "son kilometre teslimatı",
    entries: [
      {
        id: 3,
        content: "e-ticaretin en kritik aşaması. ürünün son dağıtım merkezinden müşteriye ulaştırılması sürecini ifade eder. toplam lojistik maliyetlerinin yaklaşık %53'ünü oluşturur.",
        author: "delivery_master",
        date: "14 Mart 2024",
        likes: 35,
        isEditorChoice: true
      }
    ],
    createdAt: "14 Mart 2024",
    totalEntries: 1
  }
]

export default function Dictionary() {
  const { user } = useAuth()
  const router = useRouter()
  const [topics, setTopics] = useState(sampleTopics)
  const [selectedTopic, setSelectedTopic] = useState<typeof sampleTopics[0] | null>(null)
  const [newEntry, setNewEntry] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreatingTopic, setIsCreatingTopic] = useState(false)
  const [newTopic, setNewTopic] = useState("")

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  const handleTopicSelect = (topic: typeof sampleTopics[0]) => {
    setSelectedTopic(topic)
  }

  const handleNewEntry = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTopic || !newEntry.trim()) return

    const newEntryObj = {
      id: Date.now(),
      content: newEntry,
      author: user.name,
      date: new Date().toLocaleDateString('tr-TR'),
      likes: 0
    }

    setTopics(prevTopics => 
      prevTopics.map(topic => 
        topic.id === selectedTopic.id 
          ? {
              ...topic,
              entries: [...topic.entries, newEntryObj],
              totalEntries: topic.totalEntries + 1
            }
          : topic
      )
    )
    setNewEntry("")
  }

  const handleNewTopic = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTopic.trim()) return

    const newTopicObj = {
      id: Date.now(),
      title: newTopic.toLowerCase(),
      entries: [],
      createdAt: new Date().toLocaleDateString('tr-TR'),
      totalEntries: 0
    }

    setTopics(prev => [newTopicObj, ...prev])
    setNewTopic("")
    setIsCreatingTopic(false)
    setSelectedTopic(newTopicObj)
  }

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sol Sidebar */}
          <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-20">
            <div className="mb-6 space-y-4">
              <input
                type="text"
                placeholder="başlık ara..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => setIsCreatingTopic(true)}
                className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                yeni başlık oluştur
              </button>
            </div>

            {isCreatingTopic && (
              <motion.form
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleNewTopic}
                className="mb-6"
              >
                <input
                  type="text"
                  placeholder="yeni başlık..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500 bg-gray-50 mb-2"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  autoFocus
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreatingTopic(false)
                      setNewTopic("")
                    }}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    iptal
                  </button>
                  <button
                    type="submit"
                    disabled={!newTopic.trim()}
                    className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300"
                  >
                    oluştur
                  </button>
                </div>
              </motion.form>
            )}
            
            <div className="space-y-4">
              {filteredTopics.map(topic => (
                <motion.div
                  key={topic.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedTopic?.id === topic.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handleTopicSelect(topic)}
                >
                  <h3 className="font-medium">{topic.title}</h3>
                  <div className="flex items-center text-sm mt-2">
                    <span className={selectedTopic?.id === topic.id ? 'text-white/80' : 'text-gray-500'}>
                      {topic.totalEntries} entry
                    </span>
                    <span className="mx-2">•</span>
                    <span className={selectedTopic?.id === topic.id ? 'text-white/80' : 'text-gray-500'}>
                      {topic.createdAt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="flex-1 min-h-[calc(100vh-6rem)]">
            <AnimatePresence mode="wait">
              {selectedTopic ? (
                <motion.div
                  key={selectedTopic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-3xl font-bold mb-6">{selectedTopic.title}</h2>
                  
                  <div className="space-y-6">
                    {selectedTopic.entries.map(entry => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-b border-gray-100 pb-6 last:border-0"
                      >
                        <p className="text-gray-800 text-lg leading-relaxed mb-4">
                          {entry.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <img
                                src={`https://ui-avatars.com/api/?name=${entry.author}&background=random`}
                                alt={entry.author}
                                className="w-8 h-8 rounded-full"
                              />
                              <span className="text-sm text-gray-600">{entry.author}</span>
                            </div>
                            <span className="text-sm text-gray-500">{entry.date}</span>
                            {entry.isEditorChoice && (
                              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                                editör seçimi
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4">
                            <button className="text-gray-500 hover:text-orange-500 transition-colors">
                              <span className="mr-1">👍</span>
                              {entry.likes}
                            </button>
                            <button className="text-gray-500 hover:text-orange-500 transition-colors">
                              💬
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Yeni Entry Formu */}
                  <form onSubmit={handleNewEntry} className="mt-8">
                    <textarea
                      placeholder="bu başlığa bir şeyler yaz..."
                      className="w-full p-4 border rounded-lg focus:outline-none focus:border-orange-500 min-h-[120px] bg-gray-50"
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                    />
                    <div className="flex justify-end mt-4">
                      <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        disabled={!newEntry.trim()}
                      >
                        gönder
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center"
                >
                  <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                    hoş geldiniz!
                  </h2>
                  <p className="text-gray-500">
                    soldaki başlıklardan birini seçerek başlayabilir veya yeni bir başlık oluşturabilirsiniz.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
} 