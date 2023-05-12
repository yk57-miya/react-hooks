import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../types/index';

// req = HTTP incoming message, res = HTTP server response
const test = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    id: 2,
    name: '好きな漫画',
    content: '選べない。。。最推しはヒロアカ'
  });
};

export default test;
