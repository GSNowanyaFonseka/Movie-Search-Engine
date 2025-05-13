import './css/App.css';
import MovieCard from './Components/MovieCard'
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import {Router, Route, Routes} from 'react-router-dom'
import { MovieProvider } from './Context/MovieContext/MovieContext';
import Navbar from './Components/Navbar';

function App(){
  const movieNumber = 2;

  return(
    <MovieProvider>
      <Navbar />
      <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
      </main>
    </MovieProvider>
  ); 
}

export default App
