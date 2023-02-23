import React from "react";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";

const MoviesRows = () => {
  return (
    <div>
      <MovieRow
        grid={false}
        title="🇭🇷: top 10 danas"
        movieApiUrl={movieURLAddress.TvPopular}
      ></MovieRow>
      <MovieRow
        grid={false}
        title="Family Animation"
        movieApiUrl={movieURLAddress.AnimationMovies}
      ></MovieRow>
    </div>
  );
};

export default MoviesRows;
