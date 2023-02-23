import React, { createContext, useReducer, useEffect } from "react";
import { GlobalReducer } from "../GlobalReducer/GlobalReducer";
import { actionTypes } from "../GlobalReducer/GlobalReducer";

export const initialState = {
  movies: [],
  movieDetails: [],
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites") || "")
    : [],
};
export const GlobalMovieContext = createContext(initialState);

const GlobalContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //save to sessionStorage when state changes
  // useEffect(() => {
  //   sessionStorage.setItem("movies", JSON.stringify(state.movies));
  // }, [state.movies]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites) || "");
  }, [state.favorites]);

  const getMoviesByYear = (num: any) => {
    dispatch({ type: actionTypes.FILTER_MOVIES_BY_YEAR, payload: num });
  };
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

  const value: any = {
    state: state,
    getMoviesByYear: getMoviesByYear,
    getFilteredMovies: getFilteredMovies,
    getLastMovies: getLastMovies,
    getSingleMovieDetails: getSingleMovieDetails,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  };

  return (
    <div>
      <GlobalMovieContext.Provider value={value}>
        {children}
      </GlobalMovieContext.Provider>
    </div>
  );
};

export default GlobalContext;
