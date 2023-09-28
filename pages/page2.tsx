import type { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';

const Page2: NextPage = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [selected, setSelected] = useState(null);

  const handleChangeA = (e: ChangeEvent<HTMLInputElement>) => {
    setA(e.target.value);
  };

  const handleChangeB = (e: ChangeEvent<HTMLInputElement>) => {
    setB(e.target.value);
  };

  const HelloMessage = (name: string) => {
    return <div className="greeting">Hello {name}</div>;
  };

  useEffect(() => {
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);

    if (!isNaN(parsedA) && !isNaN(parsedB)) {
      setResult(parsedA + parsedB);
    } else {
      setResult(null);
    }
  }, [a, b]);

  const items = [{ name: 'たなか' }, { name: 'さとう' }];

  return (
    <>
      <div className="max-w-5xl my-40 mx-auto block">
        <div className="mb-4">
          <span>A：</span>
          <input
            className="border border-solid border-l-black-lighten"
            type="number"
            value={a}
            onChange={handleChangeA}
          />
        </div>
        <div className="mb-4">
          <span>B：</span>
          <input
            className="border border-solid border-l-black-lighten"
            type="number"
            value={b}
            onChange={handleChangeB}
          />
        </div>

        <p>
          {result !== null ? `${a} + ${b} = ${result}` : '計算結果はありません'}
        </p>

        <div className="my-40">{HelloMessage('たなかさん')}</div>
      </div>
    </>
  );
};

export default Page2;
