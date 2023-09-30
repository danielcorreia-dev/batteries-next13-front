/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: "/nest-api/:path*",
        destination: `${process.env.DOMAIN_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
