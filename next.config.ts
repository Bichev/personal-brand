import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/algoart', destination: '/algoart/index.html' },
      { source: '/algoart/', destination: '/algoart/index.html' },
    ];
  },
};

export default nextConfig;
