import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import loginReducer from "./components/authorisation/reducers/login-reducer";
import registryReducer from "./components/authorisation/reducers/registry-reducer";
import reducer from "./components/mainLayout/reducers/reducer";
import { combineReducers } from "redux";
import thunk from 'redux-thunk'

import { connectRouter, routerMiddleware } from "connected-react-router";
import { ConnectedRouter, push } from "connected-react-router";
import { history } from "./history";

const rootReducer = combineReducers({
  login: loginReducer,
  user: registryReducer,
  data: reducer
});
const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)
// const store = createStore(
//   connectRouter(history)(rootReducer),
//   applyMiddleware(routerMiddleware(history), thunk)
// );
// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
