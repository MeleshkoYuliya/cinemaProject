import { ACTION_CREATE_FILM } from "./actions-type";
export const createFilm = movie => {
  return {
    type: ACTION_CREATE_FILM,
    payload: movie
  };
};
