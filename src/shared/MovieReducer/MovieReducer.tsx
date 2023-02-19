interface Actions {
  FETCH_START: string;
  FETCH_SUCCESS: string;
  FETCH_ERROR: string;
}
interface initState {
  loading: boolean;
  movies: any[];
  error: boolean;
}

export const actionTypes: Actions = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETC_ERROR",
};

export const initialState: initState = {
  loading: false,
  movies: [],
  error: false,
};

export const MovieReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        loading: true,
        movies: [],
        error: false,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        loading: false,
        movies: action.movies,
        error: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        loading: false,
        movies: [],
        error: true,
      };
    default:
      return state;
  }
};
