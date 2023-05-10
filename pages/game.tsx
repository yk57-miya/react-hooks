import type { NextPage } from 'next';
import { useState } from 'react';

// TODO: 型指定
const calculateWinner = (squares: any[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const changeSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    changeSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(changeSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => {
    return (
      <>
        <button className="square" onClick={() => handleClick(i)}>
          {squares[i]}
        </button>
      </>
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game: NextPage = () => {
  return (
    <>
      <div className="Game__page">
        <div className="game">
          <div>
            <Board />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
