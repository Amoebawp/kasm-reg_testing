/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Fanthi Kasm Store',
    description: 'Custom Kasm Workspaces',
    icon: 'https://home.fanthi.fr/src/logo.png',
    listUrl: 'https://amoebawp.github.io/kasm-reg_testing/list.json',
    contactUrl: 'https://amoebawp.github.io/kasm-reg_testing/',
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
