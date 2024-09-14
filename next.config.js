const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  env: {
    IMG_URL: process.env.CLOUDINARY_URL,
  },
};

module.exports = nextConfig;
