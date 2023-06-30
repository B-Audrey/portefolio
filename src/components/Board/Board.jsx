import './Board.scss';
import Square from './BoardSquare/BoardSquare';
import { useState } from 'react';

const getAWinner = (squares) => {
  const winnigLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < winnigLines.length; i++) {
    const a = winnigLines[i][0];
    const b = winnigLines[i][1];
    const c = winnigLines[i][2];
    if (squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}

const Board = () => {
  // initialise un array de 9 elements null chacun ayant un état et leur set pour le modifier
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXIsNext] = useState(true);
  let [message, setMessage] = useState('Bienvenue sur le jeux, le joueur X commence !')

  function handleClick(i) {
    //si une valeur est déjà affectée, on le modifie pas, on sort
    if (squares[i] || getAWinner(squares)) {
      return
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';
    message = isXNext ? 'Au tour du joueur O !' : 'Au tour du joueur X !';
    setSquares(nextSquares);
    setXIsNext(!isXNext);
    const isAWinner = getAWinner(nextSquares);
    if (isAWinner) {
      message = 'Le joueur ' + isAWinner + ' gagne, FÉLICITATIONS 🥳';
    }
    const isNullGame = nextSquares.find((e) => e === null)
    if (isNullGame === undefined) {
      message = 'Égalité ! Cliquez sur le bouton pour rejouer ! 😃';
    }
    setMessage(message);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setMessage('C\'est reparti ! Le joueur X démarre !');
  }

  return (
    <>
    <div className="board">
      <p className='board__message'>{message}</p>
      <div className="board__row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board__row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board__row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
      

      <div onClick={restart} className='tictactoe__restart'>
        <p>Recommencer</p>
      </div>
    </>
  );
}

export default Board