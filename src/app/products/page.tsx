import Image from "next/image";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/API/products";
import clothImage from "../../../public/images/clothes.jpg";

/* ISR: 몇초 간격으로 SSG를 서버상에서 다시 만들어 둘건지 결정 */
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  /* ISR */
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   next: { revalidate: 3 },
  // });
  // const { data } = await res.json();
  // const factText = data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothImage} alt="clothes" priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* {factText} */}
      <MeowArticle />
    </>
  );
}
