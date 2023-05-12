import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../types/index';

// req = HTTP incoming message, res = HTTP server response
const test = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    id: 3,
    name: '好きなアニメ',
    content: 'これまた選べないけど、おそ松さんかな'
  });
};

export default test;
