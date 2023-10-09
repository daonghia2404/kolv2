/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['localhost'],
  },
  trailingSlash: false,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
