import React, { useEffect, useContext, useState } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { Link } from "react-router-dom";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import { Tooltip } from "@material-tailwind/react";

interface MovieRowProps {
  title: string;
  movieApiUrl: string;
  grid: boolean;
}

const MovieRow = ({ title, movieApiUrl, grid }: MovieRowProps) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 540px)");
  const [movieData, setMovieData] = useState<any[]>([]);
  const { handleAddError } = useContext<any>(InterceptorContext);
  const { state, getSingleMovieDetails, addToFavorites } =
    useContext<any>(GlobalMovieContext);

  //base URL
  const url = "https://image.tmdb.org/t/p/original/";

  /**
   * Get Diffrent types of movies
   * @param {string} movieApiUrl - api to get different movie types
   */
  const getMovies = async () => {
    try {
      const response = await axios.get(movieApiUrl);
      const data = await response.data.results;
      setMovieData(data);
    } catch (err) {
      if (err) {
        handleAddError(err);
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <WrapperContainer singlePage={false}>
      {grid ? (
        <div
          className={
            isTablet ? "grid grid-cols-3 justify-start" : "grid grid-cols-4"
          }
        >
          {movieData?.slice(0, 10).map((movie: any, index: number) => {
            return (
              <div className={isTablet ? " my-2" : "ml-6 my-2"} key={movie.id}>
                <div className="flex items-center relative ">
                  <img
                    className="h-16 w-14 bg-center bg-no-repeat bg-cover rounded-md "
                    src={`${url}${movie?.poster_path || movie?.backdrop_path} `}
                    alt={movie.original_name}
                  ></img>
                  <div className="ml-4">
                    <p
                      className={
                        isMobile
                          ? "font-lato font-bold text-white text-xs overflow-hidden leading-6"
                          : "font-lato font-bold text-white overflow-hidden text-base leading-6"
                      }
                    >
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
                    <div key={movie.id} className="flex flex-col">
                      <Tooltip
                        content={movie.title || movie.original_name}
                        placement="bottom"
                      >
                        <div
                          className={
                            "flex items-center cursor-pointer relative"
                          }
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
                          <Link
                            className="z-20"
                            to={`/movieDetails/${movie.id}`}
                            onClick={() => getSingleMovieDetails(movie)}
                          >
                            <div className="ml-16">
                              <img
                                className="h-full w-44 bg-center bg-no-repeat bg-cover rounded-md "
                                src={`${url}${
                                  movie?.poster_path || movie?.backdrop_path
                                } `}
                                alt={movie.original_name}
                              ></img>
                            </div>
                          </Link>
                          <div>
                            {" "}
                            <span onClick={() => addToFavorites(movie)}>
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#fff"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                />
                              </svg>
                            </span>
                          </div>
                          <div>
                            {state?.favorites?.map(
                              (item: any) =>
                                item.id === movie.id && (
                                  <div className="" key={item.id}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="#F28713"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                      />
                                    </svg>
                                  </div>
                                )
                            )}
                          </div>
                        </div>
                      </Tooltip>
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
