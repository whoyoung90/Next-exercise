import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8"); // fs는 프로미스이므로 await

  return JSON.parse(data); // JSON.parse도 비동기 프로미스로 진행
}

// 해당 Product 정보가 없으면 undefined 리턴하는 프로미스
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
