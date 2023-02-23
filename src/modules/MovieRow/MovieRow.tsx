import React, { useCallback, useEffect, useContext, useState } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import axios from "axios";

import Carousel from "../Carousel/Carousel";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";

interface MovieRowProps {
  title: string;
  movieApiUrl: string;
  grid: boolean;
}

const MovieRow = ({ title, movieApiUrl, grid }: MovieRowProps) => {
  const [movieData, setMovieData] = useState<any[]>([]);
  const { handleAddError } = useContext<any>(InterceptorContext);

  //base URL
  const url = "https://image.tmdb.org/t/p/original/";

  /**
   * Get Diffrent types of movies
   * @param {string} movieApiUrl - api to get different movie types
   */
  const getMovies = useCallback(async () => {
    try {
      const response = await axios.get(movieApiUrl);
      const data = await response.data.results;
      console.log("pocetna movieRows", data);
      setMovieData(data);
    } catch (err) {
      if (err) {
        handleAddError(err);
        console.log(err);
      }
    }
  }, [movieApiUrl, handleAddError]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <WrapperContainer singlePage={false}>
      {grid ? (
        <div className="grid grid-cols-4">
          {movieData?.slice(0, 10).map((movie: any, index: number) => {
            return (
              <div className="ml-6 my-2" key={movie.id}>
                <div className="flex items-center relative ">
                  <img
                    className="h-16 w-14 bg-center bg-no-repeat bg-cover rounded-md "
                    src={`${url}${movie?.poster_path || movie?.backdrop_path} `}
                    alt={movie.original_name}
                  ></img>
                  <div className="ml-4">
                    <p className="font-lato font-bold text-white overflow-hidden text-base leading-6">
                      {movie.original_name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        movieApiUrl && (
          <div className="">
            <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
              {title}
            </h3>
            <div>
              <Carousel movieRow={true} show={6}>
                {movieData?.slice(0, 10).map((movie: any, index: number) => {
                  return (
                    <div
                      className={"flex items-center cursor-pointer relative "}
                      key={movie.id}
                    >
                      <div
                        className={`${
                          index < 9
                            ? "absolute scale-150 text-[#222c38] font-lato left-0 bottom-10 text-9xl font-bold"
                            : "absolute scale-150 text-[#222c38] font-lato -left-8 bottom-10 text-9xl font-bolds"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <div className="ml-16 z-10">
                        <img
                          className="h-full w-44 bg-center bg-no-repeat bg-cover rounded-md "
                          src={`${url}${
                            movie?.poster_path || movie?.backdrop_path
                          } `}
                          alt={movie.original_name}
                        ></img>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        )
      )}
    </WrapperContainer>
  );
};

export default MovieRow;
