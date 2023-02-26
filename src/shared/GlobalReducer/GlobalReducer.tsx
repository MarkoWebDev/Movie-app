interface Actions {
  GENRES_MOVIES: string;
  GET_LATEST_MOVIES: string;
  SINGLE_MOVIE: string;
  ADD_TO_FAVORITES: string;
  REMOVE_FROM_FAVORITES: string;
  FILTER_MOVIES_BY_GRADE: string;
  FILTER_MOVIES_BY_YEAR: string;
}
export const actionTypes: Actions = {
  GENRES_MOVIES: "GENRES_MOVIES",
  GET_LATEST_MOVIES: "GET_LATEST_MOVIES",
  SINGLE_MOVIE: "SINGLE_MOVIE",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
  FILTER_MOVIES_BY_GRADE: "FILTER_MOVIES_BY_GRADE",
  FILTER_MOVIES_BY_YEAR: "FILTER_MOVIES_BY_YEAR",
};

const convertDate = (date: string) => {
  let year = date?.slice(0, 4);
  return `${year}`;
};

export const GlobalReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.GET_LATEST_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
          favorites: [...state.favorites, { ...action.payload }],
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
    case actionTypes.FILTER_MOVIES_BY_GRADE:
      const filterByGrade = state.movies.filter(
        (item: any) => Math.round(item.vote_average) >= action.payload
      );
      if (filterByGrade) {
        return {
          ...state,
          movies: filterByGrade,
        };
      }
      return {
        ...state,
      };
    case actionTypes.FILTER_MOVIES_BY_YEAR:
      const filterByYear = state.movies.filter(
        (item: any) => convertDate(item.release_date) >= action.payload
      );
      if (filterByYear) {
        return {
          ...state,
          movies: filterByYear,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
