import { ACTION_IDENTIFYING_USER } from "../actions/login-action-types";

const initialState = {
  email: "",
  password: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_IDENTIFYING_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default loginReducer;
