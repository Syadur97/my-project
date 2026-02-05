/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com"
      }
    ]
  },
};

module.exports = nextConfig;
