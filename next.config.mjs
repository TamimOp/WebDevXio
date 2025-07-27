/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable", // 30 days in seconds
          },
        ],
      },
    ];
  },
};

export default nextConfig;
