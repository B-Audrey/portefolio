import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmallerPage from './components/SmallerPage';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import Contact from './pages/Contact';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <>
      <SmallerPage />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/error' element={<WrongPage />}/>
          <Route path='*' element={<WrongPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
