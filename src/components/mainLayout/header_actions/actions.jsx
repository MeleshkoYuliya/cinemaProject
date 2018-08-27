import { ACTION_CREATE_FILM } from "./actions-type";

export const createFilm = selectMovie => {
  return {
    type: ACTION_CREATE_FILM,
    payload: selectMovie
  };
};
