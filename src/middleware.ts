import { NextRequest, NextResponse } from "next/server";

/* 모든 요청에 대해 "전체 페이지에서" middleware 함수 실행 */
export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중!@@");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅함!");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

/* 특정 페이지에서만 필요한 경우 */
export const config = {
  matcher: ["/products/:path+"],
};

// /products나 그 뒤에오는 모든 경로에서 수행: "/products/:path*"
// /products/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행: "/products/:path+"
