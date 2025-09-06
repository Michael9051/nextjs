import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cssChunking: true, // default
    workerThreads: false,
    cpus: 1,
  },
};
export default nextConfig;
