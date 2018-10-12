import {
  REQUEST_STARTED_FILMS_SOON,
  REQUEST_SUCCEEDED_FILMS_SOON,
  REQUEST_FAILED_FILMS_SOON
} from "../actons_filmsSoon/filmsSoon-action-types";

const initialState = {
  isLoadingSoon: false,
  moviesSoon: [],
  err: null
};
export const filmsSoonReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED_FILMS_SOON:
      return { ...state, isLoadingSoon: true };
    case REQUEST_SUCCEEDED_FILMS_SOON:
      return {
        ...state,
        isLoadingSoon: false,
        err: null,
        moviesSoon: [...state.moviesSoon, action.payload]
      };
    case REQUEST_FAILED_FILMS_SOON:
      return {
        ...state,
        isLoadingSoon: false,
        err: action.payload.err
      };
    default:
      return state;
  }
};

export default filmsSoonReducer;
