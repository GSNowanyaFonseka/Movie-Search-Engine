import './App.css'
import MovieCard from './Components/MovieCard'
import {Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Favourite from './pages/Favourite';

function App(){
  const movieNumber = 2;

  return(
    <>
      <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
      </main>
    </>
  ); 
}

export default App
