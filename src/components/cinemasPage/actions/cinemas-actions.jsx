import {
  REQUEST_CINEMA_STARTED,
  REQUEST_CINEMA_SUCCEEDED,
  REQUEST_CINEMA_FAILED
} from "./cinemas-action-types";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://aboutcinema-cb66a.firebaseio.com"
});
export const requestCinemas = cinemas => {
  return dispatch => {
    dispatch(addTodoStarted());
    return instance
      .get("cinemas.json")
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};
const addTodoSuccess = cinemas => ({
  type: REQUEST_CINEMA_SUCCEEDED,
  payload: {
    ...cinemas
  }
});

const addTodoStarted = () => ({
  type: REQUEST_CINEMA_STARTED
});

const addTodoFailure = error => ({
  type: REQUEST_CINEMA_FAILED,
  payload: {
    error
  }
});
