import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import reducer from "./components/mainLayout/reducers/filmsNow-reducer";
import filmsSoonReducer from "./components/mainLayout/reduser_filmsSoon/filmsSoon-reducer";
import cinemasReducer from "./components/cinemasPage/reducers/cinemas-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  login: loginReducer,
  user: registryReducer,
  movies: reducer,
  dataSoon: filmsSoonReducer,
  cinemas: cinemasReducer
});
