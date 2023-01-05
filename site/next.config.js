/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KodeStar',
    description: 'A list of applications for Kasm Workspaces curated by KodeStar',
    icon: 'https://kodestar.github.io/kasm-registry/icon.png',
    listUrl: 'https://kodestar.github.io/kasm-registry/list.json',
    contactUrl: 'https://discord.com/aByT5fx',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
