import React from "react";
import FilterComponent from "../FilterComponent/FilterComponent";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";
import MoviesLayout from "../GridMoviesPage/MoviesLayout";

const MoviesLayoutSection = () => {
  return (
    <div>
      <FilterComponent></FilterComponent>
      <MovieRow
        grid={false}
        title="🇭🇷: top 10 danas"
        movieApiUrl={movieURLAddress.NewestMovies}
      ></MovieRow>
      <MoviesLayout></MoviesLayout>
    </div>
  );
};

export default MoviesLayoutSection;
