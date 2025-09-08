import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cssChunking: true, // default
    workerThreads: false,
    cpus: 1,
  },
  staticPageGenerationTimeout: 1000,
};
export default nextConfig;
