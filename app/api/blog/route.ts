import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const category = formData.get('category') as string
    const sourcesJson = formData.get('sources') as string
    const image = formData.get('image') as File

    if (!title || !content || !category || !image) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      )
    }

    // Kaynakları parse et
    const sources = JSON.parse(sourcesJson || '[]')

    // Görsel kaydetme
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const imageExt = image.name.split('.').pop()
    const imageName = `${Date.now()}.${imageExt}`
    const imagePath = path.join(process.cwd(), 'public', imageName)
    await writeFile(imagePath, buffer)

    // Slug oluşturma
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9ğüşıöç]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    // Blog verisi oluşturma (gerçek uygulamada bir veritabanına kaydedilir)
    const blogPost = {
      id: Date.now(),
      title,
      content,
      category,
      image: `/${imageName}`,
      sources,
      date: new Date().toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      author: 'Editör', // Gerçek uygulamada oturum açan kullanıcının adı kullanılır
      readTime: `${Math.ceil(content.split(' ').length / 200)} dk`,
      slug
    }

    return NextResponse.json(blogPost)
  } catch (error) {
    console.error('Blog yazısı oluşturulurken hata:', error)
    return NextResponse.json(
      { error: 'Blog yazısı oluşturulamadı' },
      { status: 500 }
    )
  }
} 