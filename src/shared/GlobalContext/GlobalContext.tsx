import React, { createContext, useReducer, useEffect } from "react";
import { GlobalReducer } from "../GlobalReducer/GlobalReducer";
import { actionTypes } from "../GlobalReducer/GlobalReducer";

export const initialState = {
  movies: [],
  movieDetails: JSON.parse(localStorage.getItem("singleMovie") || ""),
  
};
export const GlobalMovieContext = createContext(initialState);

const GlobalContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //save to sessionStorage when state changes
  // useEffect(() => {
  //   sessionStorage.setItem("movies", JSON.stringify(state.movies));
  // }, [state.movies]);

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

  
  const value: any = {
    state: state,
    getMoviesByYear: getMoviesByYear,
    getFilteredMovies: getFilteredMovies,
    getLastMovies: getLastMovies,
    getSingleMovieDetails: getSingleMovieDetails,
    
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
