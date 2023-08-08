/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지를 사용할 경우 -> 사용하고자 하는 도메인 URL을 등록
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
