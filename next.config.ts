import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/proyectos/love-me',
  assetPrefix: '/proyectos/love-me',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
