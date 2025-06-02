/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fvsylvffsbtrroqiwfcl.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**", //
      },
    ],
  },
};

export default nextConfig;
