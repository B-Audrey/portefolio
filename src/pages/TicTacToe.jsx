import '../styles/TicTacToe.scss';
import Board from '../components/Board/Board';
import Button from '../components/Button/Button'
import { HashLink } from 'react-router-hash-link';

const TicTacToe = () => {
    const refresh = () => {
        window.location.reload(false);
    }
    return (
        <>
        <div className='tictactoe'>
            <h1 className='tictactoe__title'>Tic Tac Toe</h1>
            <div className='tictactoe__board'>
                <Board />
            </div>
            <div onClick={refresh} className='tictactoe__restart'>
                <Button text="Click here to play again"/>
            </div>
            <HashLink className='tictactoe__link' to='/portefolio/#home'>Retourner sur la page d'accueil</HashLink>
        </div>
        </>
        );
}

export default TicTacToe;