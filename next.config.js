/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig

module.exports = {
  ...nextConfig,
  images: {
    domains: ["192.168.1.14"],
  },
}
