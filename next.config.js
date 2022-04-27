// /** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['i.picsum.photos']
  },
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
});
