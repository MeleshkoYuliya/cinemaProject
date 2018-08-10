import { ACTION_CREATE_FILM } from "../actions/header-action-types";

const initialState = {
  id: "",
  name: "",
  url: ""
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CREATE_FILM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default headerReducer;
