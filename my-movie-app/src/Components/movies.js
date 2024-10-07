import React from "react";//importing react
import MovieItem from "./movieItem";
const Movies = (props)=>{//Arrow Function
    
    return props.myMovies.map(//using the map function to assign to each element of array
        (movie)=>{return <MovieItem myMovie = {movie}/>}
    );
}
export default Movies;//exporting movies to be used in read
