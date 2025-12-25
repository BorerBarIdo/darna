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
 * - For fill images (backgrounds): <OptimizedImage src="/img.jpg" alt="..." fill priority />
 * - For responsive images: <OptimizedImage src="/img.jpg" alt="..." sizes="(max-width: 600px) 400px, 800px" />
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
  // Generate base path without extension
  const basePath = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
  
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
          srcSet={`${basePath}.avif`}
          type="image/avif"
        />
        {/* WebP source - very good compression */}
        <source
          srcSet={`${basePath}.webp`}
          type="image/webp"
        />
        {/* Fallback to original format */}
        <img
          src={src}
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
        srcSet={`${basePath}.avif`}
        type="image/avif"
        sizes={defaultSizes}
      />
      {/* WebP source */}
      <source
        srcSet={`${basePath}.webp`}
        type="image/webp"
        sizes={defaultSizes}
      />
      {/* Fallback */}
      <img
        src={src}
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

