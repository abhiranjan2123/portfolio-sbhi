import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable specific ESLint rules
    ignoreDuringBuilds: true, // Optional: Ignores ESLint during build
    dirs: ['pages', 'components'], // Optional: specifies directories to lint
    // If you need custom ESLint rules or configurations, modify the config here
    // You can disable individual rules by modifying the eslintConfig file
  },
};

export default nextConfig;
