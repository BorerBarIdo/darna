/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/darna',
  trailingSlash: true,
}

module.exports = nextConfig

