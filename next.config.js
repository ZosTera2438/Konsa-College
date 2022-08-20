/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    loader: 'imgix',
    path: '/Konsa-College',
  },
}

module.exports = nextConfig
