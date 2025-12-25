'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'עלינו' },
    { href: '#services', label: 'שירותים' },
    { href: '#guide', label: 'המדריכה' },
    { href: '#journey', label: 'המסע' },
    { href: '#events', label: 'אירועים' },
    { href: '#booking', label: 'הזמנה' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-amber-50/95 via-white/95 to-rose-50/95 backdrop-blur-sm border-b border-amber-100/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 sm:h-24">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm sm:text-base text-gray-700 font-light transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover underline effect */}
                <span className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                {/* Hover text color change */}
                <span className="absolute inset-0 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100 mt-2">
            <div className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-base text-gray-700 font-light transition-all duration-300 py-2 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Hover underline effect */}
                  <span className="absolute bottom-2 right-0 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  {/* Hover text color change */}
                  <span className="absolute inset-0 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

