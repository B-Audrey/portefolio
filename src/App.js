import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmallerPage from './components/SmallerPage';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import Contact from './pages/Contact';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <Home />
    // <>
    //   <SmallerPage />
    //   <Router>
    //     <Routes>
    //       <Route exact path='/' element={<Home />}/>
    //       <Route exact path='/contact' element={<Contact />} />
    //       <Route exact path='/tictactoe' element={<TicTacToe />} />
    //       <Route exact path='/error' element={<WrongPage />}/>
    //       <Route exact path='*' element={<WrongPage />}/>
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;
