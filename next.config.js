/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // Exclude files in the public folder, as those are used directly as regular images
      exclude: [path.join(__dirname, 'public')],
      use: {
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
