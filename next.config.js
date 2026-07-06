/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
  },
  trailingSlash: true,
  // Untuk menghilangkan warning multiple lockfiles
  turbopack: {
    root: process.cwd(),
  },
  // Nonaktifkan optimizeCss sementara (karena pakai critters)
  // experimental: {
  //   optimizeCss: true,
  // },
};

module.exports = nextConfig;