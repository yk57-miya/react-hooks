import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

  return (
    <>
      <button onClick={toggle}>{open ? 'open' : 'close'}</button>
      <div className={open ? 'is-open' : 'is-close'}>
        <p>カウント数 {count} です！</p>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          + 1
        </button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(initialState)}>最初に戻す</button>
      </div>
    </>
  );
};

export default Home;
