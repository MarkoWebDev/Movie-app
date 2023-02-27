import React, { useContext, useEffect, useState } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import axios from "axios";
import Spinner from "../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";
import { Button } from "@material-tailwind/react";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { Alert } from "@material-tailwind/react";

const MoviesLayout = () => {
  const isMobile = useMediaQuery("(max-width: 570px)");
  const isTablet = useMediaQuery("(max-width: 1400px)");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { state, getLastMovies, getSingleMovieDetails, addToFavorites } =
    useContext<any>(GlobalMovieContext);
  const { handleAddError } = useContext<any>(InterceptorContext);
  const [loading, setLoading] = useState<boolean>(false);

  //base URL for image
  const url = "https://image.tmdb.org/t/p/original/";

  /**
   * get movies based on genre
   * display them as initial movies
   */
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
      );
      const data = await response.data.results;
      getLastMovies(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      handleAddError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleAddToFavorites = (movie: any) => {
    addToFavorites(movie);
  };

  return (
    <WrapperContainer singlePage={false}>
      {!loading ? (
        <div>
          <div>
            <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
              Filmovi
            </h3>
          </div>
          <div
            className={
              isMobile
                ? "grid grid-cols-1 justify-center items-center w-full pt-4"
                : "grid grid-cols-2 justify-center items-center w-full pt-4"
                ? isTablet
                  ? "grid grid-cols-4 justify-start items-start w-full pt-4"
                  : "grid grid-cols-6 justify-center items-center w-full pt-4"
                : "grid grid-cols-6 justify-center items-center w-full pt-4"
            }
          >
            {state?.movies?.map((movie: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    isMobile
                      ? "flex justify-center items-center cursor-pointer py-2"
                      : "flex justify-center items-center cursor-pointer py-2"
                  }
                >
                  <div
                    className={
                      isTablet
                        ? " z-10 flex flex-col items-center justify-center text-center"
                        : "ml-16 z-10 flex flex-col items-center justify-center text-center"
                    }
                    onClick={() => getSingleMovieDetails(movie)}
                  >
                    <Link
                      to={`/movieDetails/${movie.id}`}
                      key={movie.id}
                      className="relative"
                    >
                      <img
                        className={
                          isMobile
                            ? "h-full w-56 bg-center bg-no-repeat bg-cover rounded-md"
                            : "h-full w-44 bg-center bg-no-repeat bg-cover rounded-md"
                            ? isTablet
                              ? "h-full w-36 bg-center bg-no-repeat bg-cover rounded-md"
                              : "h-full w-44 bg-center bg-no-repeat bg-cover rounded-md"
                            : ""
                        }
                        src={`${url}${
                          movie?.poster_path || movie?.backdrop_path
                        } `}
                        alt={movie.title}
                      ></img>
                      {state.favorites.map(
                        (item: any) =>
                          item.id === movie.id && (
                            <div
                              className="pb-2 flex justify-center text-center"
                              key={movie.id}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#F28713"
                                className="w-8 h-8"
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
                      <div>
                        <p
                          className={
                            isMobile
                              ? "text-[#78a6b8] font-lato font-medium text-xs w-full py-2 leading-4 uppercase text-center"
                              : "text-[#78a6b8] font-lato font-medium text-xs w-44 py-2 leading-4 uppercase text-center"
                              ? isTablet
                                ? "text-[#78a6b8] font-lato font-medium text-xs w-28 py-2 leading-4 uppercase text-start "
                                : "text-[#78a6b8] font-lato font-medium text-xs w-44 py-2 leading-4 uppercase text-center"
                              : "text-[#78a6b8] font-lato font-medium text-xs w-44 py-2 leading-4 uppercase text-center"
                          }
                        >
                          {movie.title || movie.original_title}
                        </p>
                      </div>
                    </Link>
                    {isTablet ? (
                      <Button
                        size="sm"
                        variant="outlined"
                        onClick={() => handleAddToFavorites(movie)}
                        className={
                          "text-center w-28 font-lato text-xs text-white normal-case border border-white mt-1 rounded-lg p-2"
                        }
                      >
                        Add to favorites
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outlined"
                        className={
                          "text-center w-44 font-lato text-white normal-case border-white mt-1"
                        }
                        onClick={() => handleAddToFavorites(movie)}
                      >
                        Add to favorites
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <Spinner></Spinner>
        </div>
      )}
      {state.movies.length <= 0 && (
        <div className="flex justify-center items-center text-center">
          <Alert color="red">
            Something went wrong, reset the filter or refresh the page
          </Alert>
        </div>
      )}
    </WrapperContainer>
  );
};

export default React.memo(MoviesLayout);
