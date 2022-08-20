/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath:'/Konsa-College',
  assetPrefix:'/Konsa-College'
}

module.exports = nextConfig
