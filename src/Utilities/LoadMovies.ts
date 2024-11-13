import axios from "axios";


const LoadMovies = async () => {
    const result = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e682208bc22c8eeb0c8f450fe55da9c0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    )
    return result.data.results;
}

export default LoadMovies;

