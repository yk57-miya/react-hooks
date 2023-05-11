import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [open, setOpen] = useState(true);
  const [name, setName] = useState({
    lastName: '',
    firstName: ''
  });
  const [likes, setLikes] = useState(0);

  const toggle = () => setOpen(!open);

  // タイトルが書き変わる
  useEffect(() => {
    document.title = `カウント数： ${count}回 クリックされました`;
  }, [count]);

  return (
    <>
      <div className="Home__page">
        <div className="Home__contents">
          {/* カウント */}
          <div className="Home__block mb-12">
            <Button variant="contained" onClick={toggle}>
              {open ? 'open' : 'close'}
            </Button>
            <div className={open ? 'is-open' : 'is-close'}>
              <p>カウント数 {count} です！</p>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => setCount((prevState) => prevState + 1)}
              >
                + 1
              </Button>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => setCount(count - 1)}
              >
                - 1
              </Button>
              <Button
                variant="contained"
                className="mr-8"
                onClick={() => setCount(initialState)}
              >
                初期値に戻す
              </Button>
            </div>
          </div>
          {/* 名前 input */}
          <div>
            <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
            <form noValidate autoComplete="off">
              <TextField
                placeholder="姓"
                value={name.lastName}
                className="mr-10"
                onChange={(e) => {
                  setName({ ...name, lastName: e.target.value });
                }}
              />
              <TextField
                placeholder="名"
                value={name.firstName}
                onChange={(e) => {
                  setName({ ...name, firstName: e.target.value });
                }}
              />
            </form>
          </div>
          {/* いいねボタン */}
          <div>
            <Button
              variant="contained"
              className="mt-10"
              onClick={() => setLikes(likes + 1)}
            >
              Likes ♡{likes}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
