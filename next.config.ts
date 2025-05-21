import type {NextConfig} from 'next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',

  // Add any other configuration options for Next.js
  experimental: {
    appDir: false, // Disable app directory if using incompatible features
  },
};

module.exports = nextConfig;

export default nextConfig;
