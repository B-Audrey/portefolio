import '../styles/TicTacToe.scss';
import Board from '../components/Board/Board';
import Button from '../components/Button/Button'
import { HashLink } from 'react-router-hash-link';

const TicTacToe = () => {

    return (
        <>
        <div className='tictactoe'>
            <h1 className='tictactoe__title'>Tic Tac Toe</h1>
            <div className='tictactoe__board'>
                <Board />
            </div> 
            <HashLink className='tictactoe__link' to='/portefolio/#home'>Retourner sur la page d'accueil</HashLink>
        </div>
        </>
        );
}

export default TicTacToe;