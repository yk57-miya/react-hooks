import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [open, setOpen] = useState(true);
  const [name, setName] = useState({
    lastName: '',
    firstName: ''
  });
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
          <div className="Home__block">
            <Button variant="contained" onClick={toggle}>
              {open ? 'open' : 'close'}
            </Button>
            <div className={open ? 'is-open' : 'is-close'}>
              <p>カウント数 {count} です！</p>
              <Button
                variant="contained"
                onClick={() => setCount((prevState) => prevState + 1)}
              >
                + 1
              </Button>
              <Button variant="contained" onClick={() => setCount(count - 1)}>
                - 1
              </Button>
              <Button
                variant="contained"
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
        </div>
      </div>
    </>
  );
};

export default Home;
