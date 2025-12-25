'use client'

import Image from 'next/image'

interface ImageCardProps {
  image: {
    name: string
    url: string
  }
}

export default function ImageCard({ image }: ImageCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(image.url)
    alert('הקישור הועתק')
  }

  return (
    <>
      <div className="relative aspect-square">
        <Image
          src={image.url}
          alt={image.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-warm-700 truncate">{image.name}</p>
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            readOnly
            value={image.url}
            className="flex-1 text-xs px-2 py-1 border border-warm-300 rounded bg-warm-50"
            onClick={(e) => (e.target as HTMLInputElement).select()}
          />
          <button
            onClick={handleCopy}
            className="bg-warm-100 hover:bg-warm-200 text-warm-800 px-2 py-1 rounded text-xs"
          >
            העתק
          </button>
        </div>
      </div>
    </>
  )
}

