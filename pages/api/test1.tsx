import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../types/index';

// req = HTTP incoming message, res = HTTP server response
const test = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ id: 1, text: 'テスト1のデータ' });
};

export default test;
