import type { NextApiRequest, NextApiResponse } from 'next';

export type productsType = {
  id: number;
  images: string[];
  newPrice: string;
  oldPrice: string;
  desc: string;
  like: number;
  title: string;
};

export type Data = productsType[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products);
}
