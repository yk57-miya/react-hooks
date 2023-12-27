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

// 素数判定
// 1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47;
const IsPrimeNumber = (number: number) => {
  if (number === 1) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// FizzBuzz
const multiple3and5 = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }

  // もっと簡潔な書き方
  // for (let i = 1; i <= 100; i++) {
  //   let output = '';
  //   if (i % 3 === 0) output += 'Fizz';
  //   if (i % 5 === 0) output += 'Buzz';
  //   console.log(output || i);
  // }
};
multiple3and5();

// 文字列圧縮
const consecutiveString = (str: string) => {
  const strArray = [...str];
  let submitString = '';
  let count = 1;
  // 配列に入れなくてもできるよ
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i + 1]) {
      count += 1;
    } else {
      submitString = `${submitString + strArray[i] + count}`;
      count = 1;
    }
  }
  return submitString;
};

// 閏年判定
const leapYear = (year: number) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// 問題:
// 配列内の重複した要素を削除する関数 `removeDuplicates` を作成してください。
// この関数は、整数の配列を引数として受け取り、重複した要素を削除した新しい配列を返す必要があります。

// 例:
// 入力: [1, 2, 2, 3, 4, 4, 5]
// 出力: [1, 2, 3, 4, 5]
// 以下にコードを書いてください。
const removeDuplicates = (array: number[]) => {
  const newArray: number[] = [];
  array.forEach((number, idx) => {
    if (number === array[idx - 1]) {
      return;
    } else {
      newArray.push(number);
    }
  });
  return newArray;
};

// おしゃれな書き方(1行で！)input大事！
function _removeDuplicates(array: number[]) {
  return [...new Set(array)];
}

// 問題:
// 配列内の最大値を見つける関数 `findMax` を作成してください。
// この関数は、整数の配列を引数として受け取り、配列内の最大値を返す必要があります。

// 例:
// 入力: [1, 2, 3, 4, 5]
// 出力: 5
// 以下にコードを書いてください。
const findMax = (array: number[]) => {
  let newArray = [];
  newArray = array.sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });
  return newArray[0];
};

// おしゃれな書き方(1行で！)input大事！
function _findMax(array: number[]) {
  return Math.max(...array);
}

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

  // コンポーネント化
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

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {IsPrimeNumber(4) ? '素数です' : '素数ではありません'}
        </div>

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {consecutiveString('aaabbcccd')}
        </div>

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {leapYear(400) ? 'true' : 'false'}
        </div>

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {removeDuplicates([1, 2, 2, 3, 4, 4, 5])}
        </div>

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {findMax([1, 2, 3, 4, 5])}
        </div>

        <div className="max-w-5xl my-40 mx-auto gap-10">
          {_findMax([1, 2, 3, 4, 5])}
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

        <div className="flex justify-center items-center flex-wrap gap-10 max-w-5xl mx-auto ">
          <div className="w-full">
            <img
              src="/images/cute_cat_01.jpg"
              alt=""
              className="inline-block mb-2"
            />
            <p className="text-lg font-bold mb-4">タイトル</p>
            <div className="text-black-lighten">詳細詳細詳細詳細詳細詳細</div>
          </div>
          <div className="w-full">
            <img
              src="/images/cute_cat_01.jpg"
              alt=""
              className="inline-block mb-2"
            />
            <p className="text-lg font-bold mb-4">タイトル</p>
            <div className="text-black-lighten">詳細詳細詳細詳細詳細詳細</div>
          </div>
          <div className="w-full">
            <img
              src="/images/cute_cat_01.jpg"
              alt=""
              className="inline-block mb-2"
            />
            <p className="text-lg font-bold mb-4">タイトル</p>
            <div className="text-black-lighten">詳細詳細詳細詳細詳細詳細</div>
          </div>
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
