import './css/App.css';
import MovieCard from './Components/MovieCard'
import {Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Navbar from './Components/Navbar';

function App(){
  const movieNumber = 2;

  return(
    <div>
      <Navbar />
      <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
      </main>
    </div>
  ); 
}

export default App
