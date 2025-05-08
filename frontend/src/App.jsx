import './App.css'
import MovieCard from './Components/MovieCard'

function App(){
  return(
    <>
      <MovieCard movie={{ title:"Totoro the neighbour", release_date:"2024"}}/>
      <MovieCard movie={{title:"Harry Potter", release_date:"2022"}}/>
    </>
  );
}

export default App
