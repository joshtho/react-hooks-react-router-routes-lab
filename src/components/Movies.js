import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieList = movies.map(movie => (
    <div key={movie.title} >
      <h3>Title: {movie.title}</h3>
      
      Time: {movie.time + "min"}
      <ul>
        Genres: {movie.genres.map((genre) => (
          <div key={genre}>
            <li>{genre}</li>
          </div>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  ) 
}

export default Movies;

