import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // If your URL is username.github.io/repo-name, add:
  basePath: '/sr-enterprises',
};

export default nextConfig;
