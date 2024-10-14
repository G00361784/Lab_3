// create.js

import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const[Year, setYear] = useState('');//using usestate
  const[Poster, setPoster] = useState('');
  const handleSubmit = (e) => {//using handle submit function
    e.preventDefault();

    console.log($[title],$[Year],$[Poster]);//console.loging title
    
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>{/**calling handlesubmit to handle the event  */}
        
        
        <div className="form-group">
          <label>Add Movie Title: </label>{/**adding movie to list */}
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Year: </label>{/**adding year to list */}
          <input type="text"
            className="form-control"
            value={Year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Add Movie Poster: </label>{/**adding poster top list */}
          <input type="text"
            className="form-control"
            value={Poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />{/**Using submit to handle form */}
      </form>
    </div>
  );
}

export default Create;