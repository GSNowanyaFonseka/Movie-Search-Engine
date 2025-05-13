import {createContext, useState, useContext, useEffect} from "react";

const movieContext = createContext()

export const useMovieContext = () => useContext(movieContext)

export const MovieProvider = ({children}) => {
    const [favourite,setFavoutite] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.grtItem("favourites")

        if(storedFavs) setFavourites(JSON.parse(storedFavs))
    },[])

    useEffect (() => {
        localStorage.setItem('favourites'.JSON.stringify(favourite))
    },[favourite])


    return <movieContext.Provider>
        {children}
    </movieContext.Provider>
}

