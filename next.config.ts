import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenviewrenovation.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
