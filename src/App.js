import './index.scss';
import { Routes, Route } from 'react-router-dom';
import SmallerPage from './components/SmallerPage';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import TicTacToe from './pages/TicTacToe';
import Footer from './components/Footer/Footer';
import ParticlesBg from "particles-bg";


function App() {
  return (
    <>
      <SmallerPage />
      <ParticlesBg type="circle" bg={{
        position: "fixed",
        zIndex: -1,
        width: "100%",
        height: "100%"
        }} />
        <Routes>
          <Route path='/portefolio/' element={<Home />}/>
          <Route path='/portefolio/tictactoe' element={<TicTacToe />} />
          <Route path='/portefolio/error' element={<WrongPage />}/>
          <Route path='*' element={<WrongPage />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
