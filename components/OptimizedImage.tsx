'use client'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
  style?: React.CSSProperties
}

/**
 * OptimizedImage component that uses modern image formats (AVIF/WebP) with fallbacks
 * and responsive images with srcset
 * 
 * Usage:
 * - For fill images (backgrounds): <OptimizedImage src="/images/img.jpg" alt="..." fill priority />
 * - For responsive images: <OptimizedImage src="/images/img.jpg" alt="..." sizes="(max-width: 600px) 400px, 800px" />
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  priority = false,
  sizes,
  style,
}: OptimizedImageProps) {
  // Get basePath for GitHub Pages
  // Next.js static export handles basePath automatically, but we need to ensure
  // client-side paths are correct. We detect it from the current URL.
  const getBasePath = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      // If we're on GitHub Pages with base path, detect it
      if (pathname.startsWith('/darna')) {
        return '/darna'
      }
    }
    // Default: no base path (local dev) or Next.js will handle it in production
    return ''
  }

  const basePath = getBasePath()
  
  // Normalize image path for GitHub Pages basePath
  // Next.js copies public folder to out folder, so paths should work with basePath
  const normalizePath = (path: string) => {
    // Remove leading slash if present, then add basePath
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
  }

  // Generate base path without extension
  const normalizedSrc = normalizePath(src)
  const imageBasePath = normalizedSrc.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
  
  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'

  if (fill) {
    // For fill images (background images, full-width images)
    // These need to be wrapped in a container with position: relative
    // Extract objectPosition from style if provided
    const { objectPosition, ...imgStyle } = style || {}
    const imgClassName = objectPosition 
      ? `w-full h-full object-cover` 
      : `w-full h-full object-cover`
    
    return (
      <picture className={`absolute inset-0 ${className}`}>
        {/* AVIF source - best compression */}
        <source
          srcSet={`${imageBasePath}.avif`}
          type="image/avif"
        />
        {/* WebP source - very good compression */}
        <source
          srcSet={`${imageBasePath}.webp`}
          type="image/webp"
        />
        {/* Fallback to original format */}
        <img
          src={normalizedSrc}
          alt={alt}
          className={imgClassName}
          style={{ ...imgStyle, objectPosition: objectPosition || 'center' }}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    )
  }

  // For regular responsive images with dimensions
  return (
    <picture className={className} style={style}>
      {/* AVIF source */}
      <source
        srcSet={`${imageBasePath}.avif`}
        type="image/avif"
        sizes={defaultSizes}
      />
      {/* WebP source */}
      <source
        srcSet={`${imageBasePath}.webp`}
        type="image/webp"
        sizes={defaultSizes}
      />
      {/* Fallback */}
      <img
        src={normalizedSrc}
        alt={alt}
        className={className}
        style={style}
        sizes={defaultSizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  )
}

