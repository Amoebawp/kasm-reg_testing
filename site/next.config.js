/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Fanthi Kasm Store',
    description: 'Custom Kasm Workspaces',
    /*icon: 'https://home.fanthi.fr/src/logo.png',*/
    listUrl: 'https://amoebawp.github.io/kasm-reg_testing/',
    contactUrl: 'https://amoebawp.github.io/kasm-reg_testing/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-reg_testing/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
