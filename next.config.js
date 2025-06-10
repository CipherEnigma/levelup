/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this to handle Firebase during build
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
  },
  // Disable static optimization for pages that use Firebase
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
}

module.exports = nextConfig