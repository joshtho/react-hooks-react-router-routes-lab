import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title} >
          Title: {movie.title + " "}
          Time: {" " + movie.time + "min"}
          <ul>
            Genres: {movie.genres.map((genre) => (
              <div key={genre}>
                <li>{genre}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) 
}

export default Movies;

