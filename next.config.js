/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // any other next.js settings here
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src/pages/', 'src/components/', 'src/lib/', 'src/hooks', 'src/models'],
  },
  swcMinify: true,
  webpack5: true,
})
