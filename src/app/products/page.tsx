import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/API/products";

/* ISR: 몇초 간격으로 SSG를 서버상에서 다시 만들어 둘건지 결정 */
export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  /* ISR */
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   next: { revalidate: 3 },
  // });
  // const data = await res.json();
  // const factText = data.data[0];
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
      <MeowArticle />
    </>
  );
}
