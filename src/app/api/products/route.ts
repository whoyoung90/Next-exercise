/* v13 API Routes (Serverless) */
import { getProducts } from "@/API/products";
import { NextResponse } from "next/server";

// "/api/products" 요청이 오면 실행되는 함수 (http 요청별로 함수를 나눌수 있는 장점)
// 특정 경로에 GET, POST, PUT, DELETE과 같은 요청이 오면 그때 함수가 실행되도록!
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
