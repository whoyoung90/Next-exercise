/* v12 */
import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/API/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

// 클라이언트에서 실행
// 콘솔 로그 => 브라우저에 O
// 이벤트 처리, useEffect 모두 클라이언트에서 동작
export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

// 서버에서 실행 (SSG)
// 콘솔 로그 => 브라우저에 X
export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    // revalidate: 10, // ISR
  };
}
