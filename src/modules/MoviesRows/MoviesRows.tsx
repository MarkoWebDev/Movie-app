import React from "react";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";

const MoviesRows = () => {
  console.log("api", movieURLAddress.TopRatedMovies);
  return (
    <div>
      <MovieRow
        title="🇭🇷: top 10 danas"
        movieApiUrl={movieURLAddress.TopRatedMovies}
      ></MovieRow>
      <MovieRow
        title="Family Animation"
        movieApiUrl={movieURLAddress.AnimationMovies}
      ></MovieRow>
    </div>
  );
};

export default MoviesRows;
