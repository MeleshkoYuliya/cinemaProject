import {
  ACTION_CHANGE_EMAIL,
  ACTION_CHANGE_PASSWORD
} from "../actions/login-action-types";

const initialState = {
  email: "",
  password: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ACTION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
