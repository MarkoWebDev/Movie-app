import React, { useCallback, useContext, useEffect, useState } from "react";
import WrapperContainer from "../../../shared/WrapperContainer/WrapperContainer";
import { GlobalMovieContext } from "../../../shared/GlobalContext/GlobalContext";
import Carousel from "../../Carousel/Carousel";
import axios from "axios";
import Spinner from "../../../shared/Spinner/Spinner";

const FilterComponent = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getFromSession: any = sessionStorage.getItem("genres");
  const parseGetFromSession = JSON.parse(getFromSession);
  const [genresButtons, setGenresButtons] = useState<any[]>([]);
  // const genresButtons = JSON.parse(getFromSession);
  const { state, getFilteredMovies, getMoviesByYear, getLastMovies } =
    useContext<any>(GlobalMovieContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [slider, setSlider] = useState<any>(10);

  console.log("value", state);
  // console.log("slider", slider);

  //base URL
  const url = "https://image.tmdb.org/t/p/original/";

  const getLatest = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.data.results;
      console.log("lastest", data);
      sessionStorage.setItem("movies", JSON.stringify(data));
      getLastMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLatest();
  }, []);

  /**
   * Get genres of the movies
   * - api to get genres of the movies and store them in the session storage
   *  display them as buttons
   */
  const getGenres = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.data.genres;
      setGenresButtons(data);
      sessionStorage.setItem("genres", JSON.stringify(data));
      console.log("genres", data);
    } catch (err) {
      console.log(err);
    }
  };
  // const checkForButtonsInStorage = () => {
  //   const session: any = sessionStorage.getItem("genres");
  //   if (!session) {
  //     getGenres();
  //   }
  //   return JSON.parse(session);
  // };

  /**
   * Get genres of the movies
   * check if session storage have genres of the movies
   * if not call api
   */
  useEffect(() => {
    getGenres();
  }, []);

  /**
   * Get genres of the movies based on aram
   * @param {number} genreId
   * filter movies based on genres
   */
  const handleFilter = async (genreId: number) => {
    setLoading(true);
    try {
      const response: any = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`
      );
      const data: any = await response.data.results;
      console.log("data", data);
      getFilteredMovies(data);
      setLoading(false);
      console.log("TOOOOOOO", data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSlider(value);
    getMoviesByYear(value);
  };

  //napraviti dispatch i poziv iz ove komponente prema contextu dohvatiti filmovie u use reduceru napraviti dispatch
  //trebamo proslijediti gender id
  //dovuci error handler

  return (
    <>
      <WrapperContainer>
        <div className="grid grid-cols-4">
          <input
            name="rating"
            type="range"
            min={1}
            max={10}
            onChange={handleChange}
          ></input>
          {genresButtons?.map((button: any) => {
            return (
              <div key={button.id}>
                <button
                  className="text-white text-xs flex items-center"
                  onClick={() => handleFilter(button.id)}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  {button.name}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {!loading ? (
            <div>
              <Carousel movieRow={true} show={6}>
                {state?.movies
                  ?.slice(0, 10)
                  .map((movie: any, index: number) => {
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

                        <div
                          className="ml-16 z-10"
                          onClick={() => console.log("item", movie)}
                        >
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
          ) : (
            <div className="grid place-items-center h-screen object-fit py-20">
              <Spinner></Spinner>
            </div>
          )}
        </div>
      </WrapperContainer>
    </>
  );
};

export default FilterComponent;
