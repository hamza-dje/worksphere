import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
      domains: ['res.cloudinary.com',], 
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/freelancer",
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
