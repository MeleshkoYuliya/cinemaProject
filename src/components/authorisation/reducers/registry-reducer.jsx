import {
  ACTION_SAVE_EMAIL,
  ACTION_SAVE_PASSWORD,
  ACTION_SAVE_NAME,
  ACTION_CHANGE_USER
} from "../actions/registry-action-types";

const initialState = {
  userSave: {
    emailSave: "",
    passwordSave: "",
    userNameSave: ""
  }
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SAVE_EMAIL:
      return {
        ...state,
        emailSave: action.payload
      };
    case ACTION_SAVE_PASSWORD:
      return {
        ...state,
        passwordSave: action.payload
      };
    case ACTION_SAVE_NAME:
      return {
        ...state,
        userNameSave: action.payload
      };
    case ACTION_CHANGE_USER:
      return { ...state, userSave: action.payload };
    default:
      return state;
  }
};

export default registryReducer;
