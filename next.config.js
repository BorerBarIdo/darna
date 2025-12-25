/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/darna',
  trailingSlash: true,
  // Exclude admin and API routes from static export
  async rewrites() {
    return []
  },
}

module.exports = nextConfig

