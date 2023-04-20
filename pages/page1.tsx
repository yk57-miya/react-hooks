import React, { useReducer } from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { log } from 'console';

const initialState = 0;

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
      </div>
    </>
  );
};

export default Page1;
