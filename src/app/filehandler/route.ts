import { NextApiRequest, NextApiResponse } from "next";

export function GET(res: NextApiResponse) {
  res.status(200).json({ message: "Hello from API!" });
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Hello from API!" });
}
