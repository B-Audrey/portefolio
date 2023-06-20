import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmallerPage from './components/SmallerPage';
import Home from './pages/Home';
import WrongPage from './pages/WrongPage';
import Informations from './pages/Informations'

function App() {
  return (
    <>
      <SmallerPage />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/informations' element={<Informations />}/>
          <Route path='/error' element={<WrongPage />}/>
          <Route path='*' element={<WrongPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
