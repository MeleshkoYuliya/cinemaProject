import {
  REQUEST_STARTED_FILMS_SOON,
  REQUEST_SUCCEEDED_FILMS_SOON,
  REQUEST_FAILED_FILMS_SOON
} from "./filmsSoon-action-types";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://filmssoon-a8949.firebaseio.com/	"
});
export const requestFilmsSoon = dataSoon => {
  return dispatch => {
    dispatch(addFilmStarted());
    return instance
      .get("filmsSoon.json")
      .then(res => {
        dispatch(addFilmSuccess(res.data));
      })
      .catch(err => {
        dispatch(addFilmFailure(err.message));
      });
  };
};
const addFilmSuccess = dataSoon => ({
  type: REQUEST_SUCCEEDED_FILMS_SOON,
  payload: {
    ...dataSoon
  }
});

const addFilmStarted = () => ({
  type: REQUEST_STARTED_FILMS_SOON
});

const addFilmFailure = err => ({
  type: REQUEST_FAILED_FILMS_SOON,
  payload: {
    err
  }
});
