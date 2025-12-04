import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/freelancer",
        permanent: false, // use false in dev mode
      },
    ];
  },
};

export default nextConfig;
