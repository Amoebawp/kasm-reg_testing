/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pt Workspaces',
    description: 'Personal registry of Pt custom Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://Amoebawp.github.io/kasm-repo_testing/',
    contactUrl: '',
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
