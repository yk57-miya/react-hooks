import Button from '@mui/material/Button';
import type { NextPage } from 'next';
import { useReducer } from 'react';

const initialState = 0;

type CardType = {
  src: string;
  title: string;
  description: string;
};

const reducerFunc = (countState: number, action: string) => {
  switch (action) {
    case 'increment':
      return countState + 1;
    case 'decrement':
      return countState - 1;
    case 'reset':
      return initialState;
    default:
      return countState;
  }
};

const Page1: NextPage = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState);

  const cardData: CardType[] = [
    {
      src: '/images/cute_cat_01.jpg',
      title: '白のもふもふちゃん',
      description:
        'テーブルに乗っちゃう白のもふもふな子猫ちゃん。何度怒ってもおりないためここは彼のベットになりました。'
    },
    {
      src: '/images/cute_cat_02.jpg',
      title: '上目遣い上手な子',
      description: '狭いところが大好き。覗き込んだらこのお顔！'
    }
  ];
  const Card = ({ item }: { item: CardType }) => (
    <div className="w-full">
      <img src={item.src} alt="" className="inline-block mb-2" />
      <p className="text-lg font-bold mb-4">{item.title}</p>
      <div className="text-black-lighten">{item.description}</div>
    </div>
  );
  return (
    <>
      <div className="Home__page">
        <div className="Home__contents">
          {/* カウント */}
          <div className="Home__block mb-12">
            <div>
              <p>カウント数 {count} です！</p>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => dispatch('increment')}
              >
                + 1
              </Button>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => dispatch('decrement')}
              >
                - 1
              </Button>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => dispatch('reset')}
              >
                初期値に戻す
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex max-w-5xl mx-auto gap-10">
          {cardData.map((card) => (
            <div key={card.title}>
              <Card item={card} />
            </div>
          ))}
          {/* <div className="w-full">
            <img
              src="/images/cute_cat_01.jpg"
              alt=""
              className="inline-block mb-2"
            />
            <p className="text-lg font-bold mb-4">白のもふもふちゃん</p>
            <div className="text-black-lighten">
              テーブルに乗っちゃう白のもふもふな子猫ちゃん。何度怒ってもおりないためここは彼のベットになりました。
            </div>
          </div>
          <div className="w-full">
            <img
              src="/images/cute_cat_02.jpg"
              alt=""
              className="inline-block mb-2"
            />
            <p className="text-lg font-bold mb-4">上目遣い上手な子</p>
            <div className="text-black-lighten">
              狭いところが大好き。覗き込んだらこのお顔！
            </div>
          </div> */}
        </div>

        {/* <div className="Card__area">
          <div className="Card__block">
            <img src="/images/cute_cat_01.jpg" alt="" className="Card__img" />
            <p className="Card__title">白のもふもふちゃん</p>
            <div className="Card__description">
              テーブルに乗っちゃう白のもふもふな子猫ちゃん。何度怒ってもここは彼のベットになりました。
            </div>
          </div>
          <div className="Card__block">
            <img src="/images/cute_cat_02.jpg" alt="" className="Card__img" />
            <p className="Card__title">上目遣い上手な子</p>
            <div className="Card__description">
              狭いところが大好き。覗き込んだらこのお顔！
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Page1;
