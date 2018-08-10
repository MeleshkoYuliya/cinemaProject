import { CREATE_USER } from "../actions/registry-action-types";

const initialState = {
  email: "",
  password: "",
  userName: ""
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default registryReducer;
