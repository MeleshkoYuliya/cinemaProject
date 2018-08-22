import {
  REQUEST_CINEMA_STARTED,
  REQUEST_CINEMA_SUCCEEDED,
  REQUEST_CINEMA_FAILED
} from "../actions/cinemas-action-types";

const initialState = {
  loading: false,
  cinemas: [],
  error: null
};
export const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CINEMA_STARTED:
      return { ...state, loading: true };
    case REQUEST_CINEMA_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        cinemas: [...state.cinemas, action.payload]
      };
    case REQUEST_CINEMA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default cinemasReducer;
