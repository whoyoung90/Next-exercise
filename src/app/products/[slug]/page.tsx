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
export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

// 동적 라우팅 페이지에서 특정 경로에 한해 "미리 페이지를 만들어 두고 싶다면(SSG)"
export function generateStaticParams() {
  const products = ["pants", "skirt"]; // 미리 만들어두고 싶은 경로
  return products.map((product) => ({
    slug: product,
  }));
}
