import os from "os"; // 노드 API O
import { useState } from "react"; // 브라우저 상태관련 X

export default function Home() {
  console.log(os.hostname());

  // You're importing a component that needs useState. It only works in a Client Component
  // const [name, setName] = useState("");

  return <h1>홈페이지다!!</h1>;
}
