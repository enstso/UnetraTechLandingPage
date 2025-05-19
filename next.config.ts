import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ C'est cette ligne qui te manque
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: process.env.NODE_ENV === "production" ? true : false,
  },
  /* config options here */
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
