import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Put all development middlewares here
let middlewares = composeEnhancers(applyMiddleware());

if (process.env.NODE_ENV === "production") {
  middlewares = applyMiddleware();
}

const store = createStore(reducers, {}, middlewares);

export default store;
