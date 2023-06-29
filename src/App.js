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
     <div className="parallax">
      <SmallerPage />
        <Routes>
          <Route path='/portefolio/' element={<Home />}/>
          <Route path='/portefolio/contact' element={<Contact />} />
          <Route path='/portefolio/tictactoe' element={<TicTacToe />} />
          <Route path='/portefolio/error' element={<WrongPage />}/>
          <Route path='*' element={<WrongPage />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
