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
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-16 sm:mb-20 text-center tracking-tight">
            הזמן מפגש
          </h2>

          {/* Package Tabs */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 mb-16 sm:mb-20">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActivePackage(pkg.id)}
                className={`px-6 py-2 font-light text-base sm:text-lg transition-all duration-300 border-b ${
                  activePackage === pkg.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
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
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src={currentPackage.image || '/images/WhatsApp Image 2025-12-25 at 19.15.34.jpeg'}
                  alt={currentPackage.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-4 tracking-tight">
                  {currentPackage.name}
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
                  {currentPackage.description}
                </p>
              </div>
              
              <ul className="space-y-4">
                {currentPackage.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-900 text-lg mt-0.5 font-light">•</span>
                    <span className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900">
                    {currentPackage.price}
                  </p>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto font-light">
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

