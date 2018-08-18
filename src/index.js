import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
<<<<<<< HEAD
import { createStore, applyMiddleware, compose} from "redux";
=======
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
>>>>>>> rout
import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import reducer from "./components/mainLayout/reducers/filmsNow-reducer";
import filmsSoonReducer from "./components/mainLayout/reduser_filmsSoon/filmsSoon-reducer";
import headerReducer from "./components/mainLayout/header_reducers/headerReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  user: registryReducer,
  movies: reducer,
  dataSoon: filmsSoonReducer,
  selectMovie: headerReducer
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
