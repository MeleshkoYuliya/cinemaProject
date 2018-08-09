import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import { combineReducers } from "redux";
// const rootReducer = combineReducers({
//   login: loginReducer,
//   registry: registryReducer
// });
const store = createStore(loginReducer);
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
