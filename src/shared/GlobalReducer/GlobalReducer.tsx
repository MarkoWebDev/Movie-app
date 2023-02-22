import React from "react";

interface Actions {
  FILTER_MOVIES_BY_YEAR: string;
  GENRES_MOVIES: string;
  GET_LATEST_MOVIES: string;
  SINGLE_MOVIE: string;
}
export const actionTypes: Actions = {
  FILTER_MOVIES_BY_YEAR: "FILTER_MOVIES_BY_YEAR",
  GENRES_MOVIES: "GENRES_MOVIES",
  GET_LATEST_MOVIES: "GET_LATEST_MOVIES",
  SINGLE_MOVIE: "SINGLE_MOVIE",
};

const getYear = (date: string) => {
  const newDate = new Date(date).getFullYear();
  return newDate;
};

export const GlobalReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.GET_LATEST_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actionTypes.FILTER_MOVIES_BY_YEAR:
      return {
        ...state,
        movies: state.movies.filter(
          (item: any) => Math.round(item.vote_average) <= action.payload
        ),
      };
    case actionTypes.GENRES_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actionTypes.SINGLE_MOVIE:
      return {
        ...state,
        movieDetails: action.payload,
      };

    default:
      return state;
  }
};
