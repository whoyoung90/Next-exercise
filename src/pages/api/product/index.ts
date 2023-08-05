/* v12 API Routes (Serverless) */
import { getProducts, Product } from "@/API/products";
import type { NextApiRequest, NextApiResponse } from "next";

// handler 함수는 "/api/product" 요청이 오면 실행되는 함수
export default async function handler(
  req: NextApiRequest, // 요청시 보내는 주소, header, body
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}
