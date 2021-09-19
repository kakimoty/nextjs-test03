/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src/pages/', 'src/components/', 'src/lib/', 'src/hooks', 'src/models'],
  },
}
