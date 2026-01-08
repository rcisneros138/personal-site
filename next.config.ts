import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",

  // Disable image optimization (not supported in static export)
  // Use <img> or a third-party service for optimized images
  images: {
    unoptimized: true,
  },

  // Trailing slashes for cleaner URLs on static hosts
  trailingSlash: true,

  // Strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
