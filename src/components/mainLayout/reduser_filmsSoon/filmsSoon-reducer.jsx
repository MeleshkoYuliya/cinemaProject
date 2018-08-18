import {
  REQUEST_STARTED_FILMS_SOON,
  REQUEST_SUCCEEDED_FILMS_SOON,
  REQUEST_FAILED_FILMS_SOON
} from "../actons_filmsSoon/filmsSoon-action-types";

const initialState = {
  isLoading: false,
  moviesSoon: [],
  err: null
};
export const filmsSoonReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED_FILMS_SOON:
      return { ...state, isLoading: true };
    case REQUEST_SUCCEEDED_FILMS_SOON:
      return {
        ...state,
        isLoading: false,
        err: null,
        moviesSoon: [...state.moviesSoon, action.payload]
      };
    case REQUEST_FAILED_FILMS_SOON:
      return {
        ...state,
        isLoading: false,
        err: action.payload.err
      };
    default:
      return state;
  }
};

export default filmsSoonReducer;
