/** @type {import('next').NextConfig} */
const nextConfig = {
  // 외부 이미지 사용시 도메인 URL 등록
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // 리다이렉트 [ {리다이렉트1}, {리다이렉트2}, ...{리다이렉트N} ]
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", // 기존 URL
        destination: "/products", // 이동할 URL
        permanent: true, // 영구 리디렉션(301 Redirect): status 308 => seo에서 캐시해간다고 함
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, // 일시적인 리디렉션(302 Redirect): status 307
      },
    ];
  },
};

module.exports = nextConfig;
