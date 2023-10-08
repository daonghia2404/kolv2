/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
