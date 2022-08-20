/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/Konsa-College',
  },
  basePath:'/Konsa-College',
  assetPrefix:'/Konsa-College'
}

module.exports = nextConfig
