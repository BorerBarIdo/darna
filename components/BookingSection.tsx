'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Package {
  id: string
  name: string
  price: string
  features: string[]
  image?: string
  description: string
}

export default function BookingSection() {
  const [activePackage, setActivePackage] = useState('diamond')

  const packages: Package[] = [
    {
      id: 'silver',
      name: 'כסף',
      price: '₪299',
      description: 'חבילה בסיסית למתחילים',
      features: [
        'מפגש יחיד',
        'תרגול תנועה מודעת',
        'מדריך נשימה',
        'חומרי עזר דיגיטליים'
      ],
      image: '/images/package-silver.jpg'
    },
    {
      id: 'gold',
      name: 'זהב',
      price: '₪599',
      description: 'חבילה מקיפה למתקדמים',
      features: [
        '3 מפגשים',
        'תנועה מודעת',
        'עבודה רגשית',
        'ליווי אישי',
        'גישה לקהילה'
      ],
      image: '/images/package-gold.jpg'
    },
    {
      id: 'diamond',
      name: 'יהלום',
      price: '₪999',
      description: 'חבילה מלאה ומקיפה',
      features: [
        '6 מפגשים',
        'תכנית מותאמת אישית',
        'ליווי צמוד',
        'גישה לכל השירותים',
        'קהילה בלעדית',
        'תמיכה מתמשכת'
      ],
      image: '/images/package-diamond.jpg'
    },
  ]

  const currentPackage = packages.find(pkg => pkg.id === activePackage) || packages[2]

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-12 sm:mb-16 text-center tracking-tight">
            הזמן מפגש
          </h2>

          {/* Package Tabs */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                className={`px-6 py-2 font-medium text-base sm:text-lg transition-all duration-300 border-b-2 ${
                  activePackage === pkg.id
                    ? 'border-warm-900 text-warm-900'
                    : 'border-transparent text-warm-600 hover:text-warm-800'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          {/* Package Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden">
                <Image
                  src={currentPackage.image || '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'}
                  alt={currentPackage.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900 mb-4 tracking-tight">
                {currentPackage.name}
              </h3>
              <p className="text-base sm:text-lg text-warm-600 mb-8 leading-relaxed">
                {currentPackage.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {currentPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-warm-900 text-lg mt-0.5">✓</span>
                    <span className="text-base sm:text-lg text-warm-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-warm-200">
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-warm-900">
                    {currentPackage.price}
                  </p>
                </div>
                <button className="bg-warm-900 hover:bg-warm-800 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-base sm:text-lg transition-all duration-300 w-full sm:w-auto">
                  הזמן עכשיו
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

