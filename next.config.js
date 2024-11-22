/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  },
  // Add any other configuration options you might need here
}

module.exports = nextConfig