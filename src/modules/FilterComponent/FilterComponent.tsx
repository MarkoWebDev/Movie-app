import React, { useContext, useEffect, useState } from "react";
import WrapperContainer from "../../shared/WrapperContainer/WrapperContainer";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import axios from "axios";
import { InterceptorContext } from "../../core/ErrorInterceptorContext";
import { Button } from "@material-tailwind/react";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

const FilterComponent = () => {
  const isMobile = useMediaQuery("(max-width: 540px)");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [genresButtons, setGenresButtons] = useState<any[]>([]);
  const { state, getFilteredMovies } = useContext<any>(GlobalMovieContext);
  const { handleAddError } = useContext<any>(InterceptorContext);
  const [slider, setSlider] = useState<any>(10);

  console.log("value", state);
  // console.log("slider", slider);

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
      handleAddError(err);
      console.log(err);
    }
  };
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
    try {
      const response: any = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`
      );
      const data: any = await response.data.results;
      console.log("data", data);
      getFilteredMovies(data);
    } catch (err) {
      handleAddError(err);
      console.log(err);
    }
  };

  return (
    <>
      <WrapperContainer singlePage={false}>
        <div
          className={
            isMobile
              ? "grid grid-cols-2 content-center py-4"
              : "grid grid-cols-4 content-center"
          }
        >
          {/* <input
            className="rotate-[270deg]"
            name="rating"
            type="range"
            min={1}
            max={10}
            onChange={handleChange}
          ></input> */}
          {genresButtons?.map((button: any) => {
            return (
              <div key={button.id}>
                <Button
                  size="sm"
                  variant="text"
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
                </Button>
              </div>
            );
          })}
        </div>
      </WrapperContainer>
    </>
  );
};

export default FilterComponent;
