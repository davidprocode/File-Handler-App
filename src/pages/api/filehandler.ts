import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = await req.body;

  console.log(data);

  return res.status(200).json({ message: "DEFAULT!" });
}
