/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Disable file system cache in development to prevent ENOENT errors
    if (dev) {
      config.cache = {
        type: 'memory'
      }
    }
    return config
  },
};

module.exports = nextConfig;