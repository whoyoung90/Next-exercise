"use client";
import { useRouter } from "next/navigation";

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        // 리다이렉트가 아닌 단순 경로 이동이므로
        router.push("/products");
        // router.back();
      }}
    >
      제품 페이지로 이동
    </button>
  );
}
