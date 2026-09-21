/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Desactiver les images non optimisees si export statique
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
