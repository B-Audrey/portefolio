import '../styles/TicTacToe.scss';
import Board from '../components/Board/Board';

const TicTacToe = () => {
    return (
        <>
        <div>Tic tac toe</div>
        <div className='App'>
            <h1>Tic Tac Toe</h1>
            <div className='board'>
                <Board />
            </div>
        </div>
        </>
        );
}

export default TicTacToe