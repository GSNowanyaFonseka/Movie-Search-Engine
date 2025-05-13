import '../css/Favorites.css';
import { useMovieContext } from '../Context/MovieContext/MovieContext';
import MovieCard from '../Components/MovieCard';

function Favourite(){
    const {favorite} = useMovieContext();

    if(favorite){
        return (
        <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorite.map(
                    (movie) => 
                        // movie.title.toLowerCase().startsWith(searchQuery) && 
                        (
                             <MovieCard movie={movie} key={movie.id}/>
                        )
                )}
            </div>
        </div>);
    }
    
    return(
        <div className='favorites-empty'>
            <h2> No favourite movies yet</h2>
            <p>Start adding movies and they will appear here</p>
        </div>
    );
}

export default Favourite;