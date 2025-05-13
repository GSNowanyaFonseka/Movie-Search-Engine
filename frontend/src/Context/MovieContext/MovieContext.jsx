import {createContext, useState, useContext, useEffect} from "react";

const movieContext = createContext()

export const useMovieContext = () => useContext(movieContext)

export const MovieProvider = ({children}) => {
    const [favorite,setFavourite] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if(storedFavs) setFavourite(JSON.parse(storedFavs))
    },[])

    useEffect(() => {
        localStorage.setItem('favorite',JSON.stringify(favorite))
    }, [favorite])

    const addToFavorite = (movie) => {
        setFavourite(prev => [...prev, movie])
    }

    const removeFromFavorite = (movieId) => {
        setFavourite(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorite.some(movie => movie.id === movieId)
    }

    const value ={
        favorite,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }


    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}

