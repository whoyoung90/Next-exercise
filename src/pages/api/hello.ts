/* v12 API Routes (Serverless) */
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

// handler 함수는 "/api/hello" 요청이 오면 실행되는 함수
export default function handler(
  req: NextApiRequest, // 요청시 보내는 주소, header, body
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
