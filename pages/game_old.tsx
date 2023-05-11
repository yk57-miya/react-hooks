// チュートリアル経過
import React from 'react';

// TODO: next.jsの書き方で書き直す
// TODO: 保存時のフォーマットがかかってない

type Props = {
  onClick?: React.MouseEvent<HTMLInputElement>;
  value: string;
};

class Board extends React.Component {
  // TODO: のちほど型指定
  constructor(props: {}) {
    console.log(999, props);

    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i: number) {
    // TODO: のちほど型指定
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// class Square extends React.Component {
//   constructor(props: string) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//   render() {
//     return (
//       <button
//         className='square'
//         onClick={() => this.props.onClick({value: 'X'})}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// 下記に書き換える：自分のstateをもたないコンポーネント（シンプルに書く）

// TODO: のちほど型指定
function Square(props: Props) {
  console.log(123, props);

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div>
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}

export default Game;

function calculateWinner(squares) {
  // console.log(123, squares);

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
    // console.log(555, [a, b, c], squares[a], squares[b], squares[c]);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
