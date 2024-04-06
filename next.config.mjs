/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};

export default nextConfig;
