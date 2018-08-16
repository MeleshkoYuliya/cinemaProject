import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import reducer from "./components/mainLayout/reducers/filmsNow-reducer";
import filmsSoonReducer from "./components/mainLayout/reduser_filmsSoon/filmsSoon-reducer";
import headerReducer from "./components/mainLayout/header_reducers/headerReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./history";

const rootReducer = combineReducers({
  login: loginReducer,
  user: registryReducer,
  movies: reducer,
  dataSoon: filmsSoonReducer,
  movie: headerReducer
});
const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(routerMiddleware(history), thunk)
);
// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
