import React, { useCallback, useEffect, useReducer, useContext } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import axios from "axios";
import {
  actionTypes,
  initialState,
  MovieReducer,
} from "../../shared/MovieReducer/MovieReducer";
import Carousel from "../Carousel/Carousel";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";

interface MovieRowProps {
  title: string;
  movieApiUrl: string;
}

const MovieRow = ({ title, movieApiUrl }: MovieRowProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const { handleAddError } = useContext<any>(InterceptorContext);

  //base URL
  const url = "https://image.tmdb.org/t/p/original/";

  /**
   * Get Diffrent types of movies
   * @param {string} movieApiUrl - api to get different movie types
   */
  const getMovies = useCallback(async () => {
    try {
      dispatch({ type: actionTypes.FETCH_START });
      const response = await axios.get(movieApiUrl);
      const data = await response.data.results;
      dispatch({ type: actionTypes.FETCH_SUCCESS, movies: data });
    } catch (err) {
      if (err) {
        handleAddError(err);

        dispatch({ type: actionTypes.FETCH_ERROR });
      }
    }
  }, [movieApiUrl, handleAddError]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  console.log("state", state);

  return (
    <WrapperContainer>
      {movieApiUrl && (
        <div className="">
          <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
            {title}
          </h3>
          <div>
            <Carousel movieRow={true} show={6}>
              {state?.movies?.slice(0, 10).map((movie: any, index: number) => {
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
                        alt={movie.name}
                      ></img>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </WrapperContainer>
  );
};

export default MovieRow;
