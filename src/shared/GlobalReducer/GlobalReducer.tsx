import React from "react";

interface Actions {
  FILTER_MOVIES_BY_YEAR: string;
  GENRES_MOVIES: string;
  GET_LATEST_MOVIES: string;
  SINGLE_MOVIE: string;
  ADD_TO_FAVORITES: string;
  REMOVE_FROM_FAVORITES: string;
}
export const actionTypes: Actions = {
  FILTER_MOVIES_BY_YEAR: "FILTER_MOVIES_BY_YEAR",
  GENRES_MOVIES: "GENRES_MOVIES",
  GET_LATEST_MOVIES: "GET_LATEST_MOVIES",
  SINGLE_MOVIE: "SINGLE_MOVIE",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
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
    case actionTypes.ADD_TO_FAVORITES:
      const exist = state.favorites.find(
        (item: any) => item.id === action.payload.id
      );
      if (!exist)
        return {
          ...state,
          flag: true,
          favorites: [...state.favorites, action.payload],
        };
      return {
        ...state,
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item: any) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
