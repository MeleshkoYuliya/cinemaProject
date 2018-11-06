import {
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
} from '../actions/filmsNow-action-types';

const initialState = {
  loading: false,
  movies: [],
  error: null,
};

export const getFilmsNowReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return { ...state, loading: true };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        movies: [...state.movies, action.payload],
      };
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
