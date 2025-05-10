import MovieCard from "../Components/MovieCard";
import {useState} from 'react';

function Home(){

    const [searchQuery,setSearchQuery] = useState('');

    const movies = [
        {id:1, title:"Totoro the neighbour", release_date:"2020"},
        {id:2, title:"Encanto", release_date:"2021"},
        {id:3, title:"Minions", release_date:"2022"},
    ]

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

            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                        // movie.title.toLowerCase().startsWith(searchQuery) && 
                        (
                             <MovieCard movie={movie} key={movie.id}/>
                        )
                )}
            </div>
        </div>
    );
}

export default Home;