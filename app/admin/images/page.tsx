import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import ImageCard from '@/components/ImageCard'

async function getImages() {
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
  
  if (!fs.existsSync(uploadsDir)) {
    return []
  }

  const files = fs.readdirSync(uploadsDir)
  return files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      name: file,
      url: `/uploads/${file}`,
    }))
}

export default async function ImagesPage() {
  const images = await getImages()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-warm-800">ניהול תמונות</h2>
          <Link
            href="/admin/images/upload"
            className="bg-warm-500 hover:bg-warm-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            + העלה תמונה חדשה
          </Link>
        </div>

        {images.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-warm-600 text-lg">אין תמונות עדיין</p>
            <Link
              href="/admin/images/upload"
              className="inline-block mt-4 text-warm-600 hover:text-warm-700 underline"
            >
              העלה תמונה ראשונה
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <ImageCard image={image} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

