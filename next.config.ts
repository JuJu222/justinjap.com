import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd249xjcvkuj8xb.cloudfront.net',
        pathname: '/justinjap.com/**',
      },
    ],
  },
};

export default nextConfig;
