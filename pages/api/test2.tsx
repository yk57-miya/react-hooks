import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  text: string;
};

// req = HTTP incoming message, res = HTTP server response
const test = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: 'テスト2のデータ' });
};

export default test;
