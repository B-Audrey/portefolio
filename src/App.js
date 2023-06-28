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
          <Route path='/B-Audrey.github.io/portefolio' element={<Home />}/>
          <Route path='/B-Audrey.github.io/portefolio/contact' element={<Contact />} />
          <Route path='/B-Audrey.github.io/portefolio/tictactoe' element={<TicTacToe />} />
          <Route path='/B-Audrey.github.io/portefolio/error' element={<WrongPage />}/>
          <Route path='/B-Audrey.github.io/*' element={<WrongPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
