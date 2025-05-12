import MovieCard from "../Components/MovieCard";
import {useState} from 'react';
import '../css/Home.css';
// import { getPopularMovies, searchMovies } from "../services/api";
import {searchMovies, getPopularMovies} from '../services/api';
import { useEffect } from "react";

function Home(){
 
    const [searchQuery,setSearchQuery] = useState('');
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies= async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                console.log(err);
                setError('Failed to load movies')
            }
            finally{
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, [])
    
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies....." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input> 
                <button type="submit" className="submit-button"> Search </button>
            </form>

            [error ]
            {loading ? (<div className="loading">Loading.....</div>) : <div className="movies-grid">
                {movies.map(
                    (movie) => 
                        // movie.title.toLowerCase().startsWith(searchQuery) && 
                        (
                             <MovieCard movie={movie} key={movie.id}/>
                        )
                )}
            </div>}
            
        </div>
    );
}

export default Home;