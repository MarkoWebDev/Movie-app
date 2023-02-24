import React from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { platforms } from "../../shared/data";
import MovieRow from "../MovieRow/MovieRow";
import { movieURLAddress } from "../../shared/MovieApiKeys/MovieGenres";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const GridMovies = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 540px)");
  console.log("GridMovies running");
  return (
    <WrapperContainer singlePage={false}>
      <div>
        <h3
          className={
            isTablet
              ? "text-white font-lato font-black text-2xl leading-10 pt-4"
              : "text-white font-lato font-black text-3xl leading-10 pt-4"
          }
        >
          Današnja top-lista
        </h3>
        <div className={"grid grid-cols-3 justify-items-start pt-4"}>
          {platforms.map((platform) => {
            return (
              <div className="flex items-center pb-4" key={platform.id}>
                <img
                  className={
                    isTablet ? "h-10 z-10 rounded-xl" : "h-14 z-10 rounded-xl"
                  }
                  src={platform.image}
                  alt={platform.name}
                ></img>
                <p
                  className={
                    isMobile
                      ? "font-lato font-bold text-white overflow-hidden text-xs leading-6 ml-2"
                      : "font-lato font-bold text-white overflow-hidden text-lg leading-6 ml-4"
                  }
                >
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
