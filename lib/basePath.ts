/**
 * Base path configuration for GitHub Pages
 * This should match the basePath in next.config.js
 * 
 * IMPORTANT: For GitHub Pages, we always use /darna in production
 * This ensures images load correctly even during SSR/hydration
 */
export const BASE_PATH = '/darna'

/**
 * Get the base path for the current environment
 * For client-side use, detects from window.location
 * 
 * In production (GitHub Pages), always returns '/darna'
 * In development, returns '' (no basePath)
 */
export function getBasePath(): string {
  // Client-side: detect from URL
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const pathname = window.location.pathname
    
    // If we're on GitHub Pages (github.io domain), always use /darna
    if (hostname.includes('github.io')) {
      return BASE_PATH
    }
    
    // Also check pathname as fallback
    if (pathname.startsWith('/darna')) {
      return BASE_PATH
    }
    
    // Local development: no basePath
    return ''
  }
  
  // Server-side: check if we're in production build
  return process.env.NODE_ENV === 'production' ? BASE_PATH : ''
}

