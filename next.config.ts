import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Photos in public/images are pre-optimised WebP at 800w and 1600w.
  images: { unoptimized: true },
};

export default nextConfig;
