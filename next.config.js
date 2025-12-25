/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is not 'darna', update this:
  // basePath: '/darna',
  // trailingSlash: true,
}

module.exports = nextConfig

