import Image from 'next/image'

export default function Hero() {
  const backgroundImage = '/images/WhatsApp Image 2025-12-25 at 19.14.32.jpeg'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="רקע"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.3 }}
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-gray-900 leading-tight tracking-tight">
            נשמה וגוף
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mx-auto leading-relaxed font-light max-w-2xl">
            משחררים חוקי אכילה, דפוסי חשיבה ישנים ובוחרים בחופש
          </p>
          <div className="pt-4">
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              מסע של ריפוי דרך תנועה
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

