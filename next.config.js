/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "@next/next/no-img-element": "off",
  images: { loader: "custom" },
}

module.exports = nextConfig
