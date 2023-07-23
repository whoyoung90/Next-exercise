import Link from "next/link";

// pages/404.js has been replaced with the not-found.js
// 파일 이름이 중요하지(not-found), 컴포넌트 이름은 영향이 없다
export default function NotFoundPage() {
  return (
    <div>
      <h1>페이지를 찾을 수 없음 😡</h1>
      <p>
        View{" "}
        <Link href="https://nextjs.org/docs/app/api-reference/file-conventions/not-found">
          all posts
        </Link>
      </p>
    </div>
  );
}
