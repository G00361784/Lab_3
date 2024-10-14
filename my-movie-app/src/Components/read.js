import React, { useEffect, useState } from "react";//importing react
import Movies from "./movies";
import axios from "axios";

const Read = ()=>{//Arrow Function
   
          //const data = [ ]
          const [movies, setMovies] = useState([])//adding empty array
        useEffect(
          () => {
            axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
            .then((response)=>{
              console.log(response.data.movies);
              setMovies(response.data.movies)//handleing response
            })
            .catch((error)=>{
              console.log(error);//handling error
            })
          },[]
        );
      //declaring data to be used in movie component

    return(
        <div>
       <h3 className="text-center">Hello from Read</h3>{/* text to be called from app.js */}
       <Movies myMovies={movies}></Movies> {/*calling the movies component using the above imports also*/}</div>
    );
}
export default Read;//exporting read to be used in app.js navbar