import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { platforms } from "../../shared/data";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";

const GridMovies = () => {
  console.log("GridMovies running");
  return (
    <WrapperContainer singlePage={false}>
      <div>
        <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
          Današnja top-lista
        </h3>
        <div className="grid grid-cols-3 justify-items-start">
          {platforms.map((platform) => {
            return (
              <div className="flex items-center pb-4" key={platform.id}>
                <img
                  className="h-14 z-10 rounded-xl"
                  src={platform.image}
                  alt={platform.name}
                ></img>
                <p className="font-lato font-bold text-white overflow-hidden text-lg leading-6 ml-4">
                  {platform.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <MovieRow
        grid={true}
        title="🇭🇷: top 10 danas"
        movieApiUrl={movieURLAddress.TvTopRated}
      ></MovieRow>
    </WrapperContainer>
  );
};

export default GridMovies;
