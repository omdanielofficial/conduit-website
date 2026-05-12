import type { NextConfig } from "next";

// License: 570201

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization for marketplace/demo compatibility
    // Remove this line to enable optimization in production
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hatscripts.github.io',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // Add more url patterns as needed
    ],
  },
};

export default nextConfig;
