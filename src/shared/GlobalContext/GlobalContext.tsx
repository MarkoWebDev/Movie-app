import React, {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { GlobalReducer } from "../GlobalReducer/GlobalReducer";
import { actionTypes } from "../GlobalReducer/GlobalReducer";

export const initialState = {
  movies: sessionStorage.getItem("movies")
    ? JSON.parse(sessionStorage.getItem("movies") || "")
    : [],
  movieDetails: sessionStorage.getItem("movieDetails")
    ? JSON.parse(sessionStorage.getItem("movieDetails") || "")
    : [],
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") || "")
    : [],
};
export const GlobalMovieContext = createContext(initialState);

const GlobalContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const sectionTop = useRef<any | HTMLDivElement>();

  //save to sessionStorage when state changes
  useEffect(() => {
    sessionStorage.setItem("movies", JSON.stringify(state.movies));
  }, [state.movies]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites) || "");
  }, [state.favorites]);

  useEffect(() => {
    sessionStorage.setItem(
      "movieDetails",
      JSON.stringify(state.movieDetails) || ""
    );
  }, [state.movieDetails]);

  const getFilteredMovies = (data: any) => {
    dispatch({ type: actionTypes.GENRES_MOVIES, payload: data });
  };
  const getLastMovies = (data: any) => {
    dispatch({ type: actionTypes.GET_LATEST_MOVIES, payload: data });
  };
  const getSingleMovieDetails = (data: any) => {
    dispatch({ type: actionTypes.SINGLE_MOVIE, payload: data });
  };
  const addToFavorites = (movie: any) => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITES, payload: movie });
  };
  const removeFromFavorites = (id: any) => {
    dispatch({ type: actionTypes.REMOVE_FROM_FAVORITES, payload: id });
  };
  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };
  const getMoviesByGrade = (slider: any) => {
    dispatch({
      type: actionTypes.FILTER_MOVIES_BY_GRADE,
      payload: slider,
    });
  };
  const getMoviesByYear = (year: any) => {
    dispatch({
      type: actionTypes.FILTER_MOVIES_BY_YEAR,
      payload: year,
    });
  };

  const value: any = useMemo(
    () => ({
      state: state,
      getFilteredMovies: getFilteredMovies,
      getLastMovies: getLastMovies,
      getSingleMovieDetails: getSingleMovieDetails,
      addToFavorites: addToFavorites,
      removeFromFavorites: removeFromFavorites,
      handleScroll: handleScroll,
      sectionTop: sectionTop,
      getMoviesByGrade: getMoviesByGrade,
      getMoviesByYear: getMoviesByYear,
    }),
    [state]
  );

  return (
    <div>
      <GlobalMovieContext.Provider value={value}>
        {children}
      </GlobalMovieContext.Provider>
    </div>
  );
};

export default GlobalContext;
