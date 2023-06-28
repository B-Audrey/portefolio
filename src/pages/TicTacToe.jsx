import '../styles/TicTacToe.scss';
import Board from '../components/Board/Board';
import Button from '../components/Button/Button'

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
        </div>
        </>
        );
}

export default TicTacToe;