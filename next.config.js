/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000'], // Replace with your domain(s) if necessary
    unoptimized: true
  },
  experimental: {
    serverActions: true // Enable experimental Server Actions for Next.js
  }
}

module.exports = nextConfig
