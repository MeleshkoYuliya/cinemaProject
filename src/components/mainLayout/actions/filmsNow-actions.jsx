import {
  REQUEST_STARTED,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED
} from "./filmsNow-action-types";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://films-6ff5c.firebaseio.com"
});
export const requestFilms = movies => {
  return dispatch => {
    dispatch(addTodoStarted());
    return instance
      .get("moviesNow.json")
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const addTodoSuccess = movies => ({
  type: REQUEST_SUCCEEDED,
  payload: {
    ...movies
  }
});

const addTodoStarted = () => ({
  type: REQUEST_STARTED
});

const addTodoFailure = error => ({
  type: REQUEST_FAILED,
  payload: {
    error
  }
});
