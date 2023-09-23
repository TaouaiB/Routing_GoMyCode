import React from "react";
import MovieCard from "../Functions/MovieCard";

function MovieList({newMovieData}) {
  return (
    <div className="MovieList">
      <h2 className="Text-center p-3">Our Movies </h2>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <MovieCard newMovieData={newMovieData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
