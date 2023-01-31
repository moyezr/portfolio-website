/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains : ["upload.wikimedia.org", "seeklogo.com", "www.solodev.com", "assets.stickpng.com", "cdn.icon-icons.com"]
  }
}
