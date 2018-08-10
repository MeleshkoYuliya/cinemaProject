import { ACTION_CREATE_FILM } from "./header-action-types";

export const createFilm = movie => {
  return {
    type: ACTION_CREATE_FILM,
    payload: movie
  };
};
