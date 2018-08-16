import { ACTION_CREATE_FILM } from "../header_actions/actions-type";
const initialState = {
  movie: {}
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
