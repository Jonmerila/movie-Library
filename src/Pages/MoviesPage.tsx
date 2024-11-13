import { useState, useEffect } from "react";
import Header from "../Components/UI/Header";
import { IMovie } from "../Models/IMovie";
import { GridList } from "../Components/GridList";
import LoadMovies from "../Utilities/LoadMovies";

function MoviesPage() {

    const [movies, setMovies] = useState<IMovie[]>([]);


    useEffect(() => {
        loadMovies();

    }, [])

    const loadMovies = async () => {
        setMovies(await LoadMovies());
    }

    return <>
    <Header title="Populära filmer"/>
    <GridList movies={movies}/>
    </> 
}

export default MoviesPage;