/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/darna' : '',
  trailingSlash: true,
}

module.exports = nextConfig

