import './index.scss';
import { Routes, Route } from 'react-router-dom';
import SmallerPage from './components/SmallerPage';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import Contact from './pages/Contact';
import TicTacToe from './pages/TicTacToe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <SmallerPage />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
          <Route path='/error' element={<WrongPage />}/>
          <Route path='*' element={<WrongPage />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
