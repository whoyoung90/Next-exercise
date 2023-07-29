import { getProducts } from "@/API/products";
import Link from "next/link";

/* ISR: 몇초 간격으로 SSG를 서버상에서 다시 만들어 둘건지 결정 */
export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts(); // 프로미스를 반환하므로 await
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
