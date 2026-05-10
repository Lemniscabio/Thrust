import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.10.198', '100.129.163.175', '100.129.160.84'],
};

export default config;
