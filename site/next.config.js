/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Your Registry Name',
    description: 'A brief description of the registries purpose.',
    icon: '/img/logo.svg',
    listUrl: 'https://username.github.io/kasm-registry/',
    contactUrl: 'https://github.com/username/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
