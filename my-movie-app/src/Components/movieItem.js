/*const MovieItem = (props) => {
    return(
        <div>{/*enclosing in div to make sure the app works }
            <h2>{props.myMovie.Title}</h2>
            <p>{props.myMovie.Year}</p>{/*using props to access the data }
            <img src = {props.myMovie.Poster}/>
        </div>
    );

}

export default MovieItem;// exporting the MovieItem to be used in movies to be used by map function
*/
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {//like constuctor
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the mymovie prop changes

  return (//return the following to cards and iteration through the array
    <div>
      <Card>
        <Card.Header>{props.myMovie.Title}</Card.Header>{/*card header bootstrap component */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>{/*closing car body */}
      </Card>
    </div>
  );
}

export default MovieItem;//exporting movie item to be used in movie file