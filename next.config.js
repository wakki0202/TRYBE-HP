/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = nextConfig

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
};

const withVideos = require('next-videos')

module.exports = withVideos()