/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "media.istockphoto.com",
      "via.placeholder.com",
      "data:image/jpeg",
      "cdn.sanity.io",
    ],
  },
};

export default nextConfig;

