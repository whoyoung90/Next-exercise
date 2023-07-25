"use client"; // 클라이언트 컴포넌트
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
