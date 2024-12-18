import Image from "next/image";
import { redirect } from "next/navigation";
import { getProduct, getProducts } from "@/API/products";
import GoProductsButton from "@/components/GoProductsButton";

type Props = {
  params: {
    slug: string; // 키워드를 [slug]로 했으므로
  };
};

// description을 지정 안하면, 상위 description을 사용!
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

// 동적 라우팅 (props에서 어떤 경로로 들어왔는지 알려준다!)
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    // 존재하지 않는 id 입력시 리다이렉트
    redirect("/products");
  }

  return (
    <>
      <h1>{product?.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product?.image}`}
        alt={product?.name || "이미지"}
        width="300"
        height="300"
        priority
      />
      <GoProductsButton />
    </>
  );
}

// 동적 라우팅 페이지에서 "특정" 제품 페이지를 미리 만들어 두고 싶다면(SSG)
export async function generateStaticParams() {
  const products = await getProducts(); // "모든" 제품 페이지들을 미리 만들기 (SSG)
  return products.map((product) => ({
    slug: product.id,
  }));
}
