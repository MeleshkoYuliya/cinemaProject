import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import reducer from "./components/mainLayout/reducers/filmsNow-reducer";
import filmsSoonReducer from "./components/mainLayout/reduser_filmsSoon/filmsSoon-reducer";
import cinemasReducer from "./components/cinemasPage/reducers/cinemas-reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  user: registryReducer,
  movies: reducer,
  dataSoon: filmsSoonReducer,
  cinemas: cinemasReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
