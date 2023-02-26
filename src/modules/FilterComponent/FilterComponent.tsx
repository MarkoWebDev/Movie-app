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
  const { getFilteredMovies, getMoviesByGrade, getMoviesByYear } =
    useContext<any>(GlobalMovieContext);
  const { handleAddError } = useContext<any>(InterceptorContext);
  const [active, setActive] = useState<any>("");
  const [slider, setSlider] = useState<number | any>(0);
  const [year, setYear] = useState<number | any>(0);

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
    } catch (err) {
      handleAddError(err);
      console.log(err);
    }
  };
  useEffect(() => {
    getGenres();
  }, []);

  /**
   * Get genres of the movies based on param
   * @param {number} genreId
   * filter movies based on genres
   */
  const handleFilter = async (genreId: number) => {
    try {
      const response: any = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`
      );
      const data: any = await response.data.results;
      getFilteredMovies(data);
      setSlider(0);
      setYear(0);
    } catch (err) {
      handleAddError(err);
      console.log(err);
    }
  };

  const filterMovies = (e: any, id: any) => {
    setActive(e.target.id);
    handleFilter(id);
  };

  const handleGradeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSlider(value);
    if (slider !== 0) {
      getMoviesByGrade(slider);
    }
  };
  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setYear(value);
    if (year !== 0) {
      getMoviesByYear(year);
    }
  };

  return (
    <>
      <WrapperContainer singlePage={false}>
        <div>
          <div className="pt-10">
            <p className="text-[#78a6b8] font-lato font-medium text-xs">
              Rating
            </p>
            <input
              name="rating"
              type="range"
              value={slider}
              min={1}
              max={10}
              onChange={handleGradeSlider}
            ></input>
          </div>
          <div>
            <p className="text-[#78a6b8] font-lato font-medium text-xs">Year</p>
            <input
              name="year"
              type="range"
              value={year}
              min={2020}
              max={2024}
              onChange={handleYear}
            ></input>
          </div>
        </div>
        <div
          className={
            isMobile
              ? "grid grid-cols-2 content-center py-4"
              : "grid grid-cols-6 content-center"
          }
        >
          {genresButtons?.map((button: any, index) => {
            return (
              <div key={button.id}>
                <Button
                  id={button.id}
                  size="sm"
                  variant="text"
                  className={
                    active == button.id
                      ? "text-white text-xs flex items-center border border-white rounded-lg"
                      : "text-white text-xs flex items-center"
                  }
                  onClick={(e) => filterMovies(e, button.id)}
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
