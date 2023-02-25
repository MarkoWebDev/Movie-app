import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";
import { Link } from "react-router-dom";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";

const Search = () => {
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState<string>("");
  const { handleAddError } = useContext<any>(InterceptorContext);
  const { getSingleMovieDetails } = useContext<any>(GlobalMovieContext);

  const [movie, setMovie] = useState<any>({});

  const url = "https://image.tmdb.org/t/p/original/";

  const searchMovies = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    try {
      const response = await axios.get(searchUrl);
      const data = await response.data.results[0];
      if (data) {
        setMovie(data);
      }
      return;
    } catch (error) {
      handleAddError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      searchMovies();
    }
  }, [query]);

  return (
    <div className="w-full ">
      <div className="relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-4 h-4 absolute top-1/4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="search"
          type="text"
          placeholder="Pretražite filmove ili serije"
          className={
            isDesktop
              ? "w-full font-lato text-white rounded text-sm py-1 bg-[#10161D] pl-8 outline-none"
              : "w-full grow font-lato text-white rounded text-sm py-1 bg-[#10161D] pl-8 outline-none"
          }
        ></input>
      </div>
      <div
        className={isDesktop ? "absolute top-24 w-64" : "absolute top-12 w-64"}
      >
        {query && (
          <div className="flex items-center border border-white bg-background-dark p-2 w-full rounded-md">
            <Link
              to={`/movieDetails/${movie.id}`}
              className="flex items-center"
              onClick={() => getSingleMovieDetails(movie)}
            >
              <div>
                <img
                  className="h-16 w-14 bg-center bg-no-repeat bg-cover rounded-md "
                  src={`${url}${movie?.poster_path || movie?.backdrop_path} `}
                  alt={movie?.original_name}
                ></img>
              </div>
              <div className="pl-6">
                <p
                  className={
                    "font-lato font-bold text-white overflow-hidden text-sm leading-6"
                  }
                >
                  {movie?.original_name || movie?.title}
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
