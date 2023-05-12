import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../types/index';

// req = HTTP incoming message, res = HTTP server response
const test = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    id: 1,
    name: '好きなゲーム',
    content: 'スプラトゥーン大好き！'
  });
};

export default test;
