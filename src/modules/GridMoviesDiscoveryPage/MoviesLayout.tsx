import React, { useContext, useEffect, useState } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import axios from "axios";
import Spinner from "../../shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";
import { Button } from "@material-tailwind/react";

const MoviesLayout = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { state, getLastMovies, getSingleMovieDetails, addToFavorites } =
    useContext<any>(GlobalMovieContext);
  const { handleAddError } = useContext<any>(InterceptorContext);
  const [loading, setLoading] = useState<boolean>(false);

  //base URL for image
  const url = "https://image.tmdb.org/t/p/original/";

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
      );
      const data = await response.data.results;
      console.log("lastest", data);
      sessionStorage.setItem("movies", JSON.stringify(data));
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

  return (
    <WrapperContainer singlePage={false}>
      {!loading ? (
        <div>
          <div>
            <h3 className="text-white font-lato font-black text-3xl leading-10 pb-4">
              Filmovi
            </h3>
          </div>
          <div className="grid grid-cols-6 justify-center items-center w-full pt-4">
            {state?.movies?.map((movie: any, index: number) => {
              return (
                <div
                  key={movie.id}
                  className={
                    "flex justify-center items-center cursor-pointer  py-2"
                  }
                >
                  <div
                    className="ml-16 z-10"
                    onClick={() => getSingleMovieDetails(movie)}
                  >
                    <Link to={`/movieDetails/${movie.id}`} key={movie.id}>
                      <img
                        className="h-full w-44 bg-center bg-no-repeat bg-cover rounded-md "
                        src={`${url}${
                          movie?.poster_path || movie?.backdrop_path
                        } `}
                        alt={movie.title}
                      ></img>

                      <div>
                        <p className="text-[#78a6b8] font-lato font-medium text-xs w-44 leading-4 uppercase text-center">
                          {movie.title || movie.original_title}
                        </p>
                      </div>
                    </Link>
                    <Button
                      size="sm"
                      variant="outlined"
                      className="text-center w-44 font-lato text-white normal-case border-white mt-1"
                      onClick={() => addToFavorites(movie)}
                    >
                      Add to favorites
                    </Button>
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
    </WrapperContainer>
  );
};

export default MoviesLayout;
