/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pt Workspaces',
    description: 'Personal registry of Pt custom Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://amoebawp.github.io/kasm-repo_testing/',
    contactUrl: 'https://amoebawp.github.io/kasm-repo_testing/',
  },
  reactStrictMode: true,
  swcMinify: true,
  /*basePath: '/kasm-registry/1.0',*/
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
