import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  text: string;
};

// req = HTTP incoming message, res = HTTP server response
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ text: 'Hello' });
};

export default handler;
