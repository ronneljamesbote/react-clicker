// Import all reducers here and add it into combineReducers
// This is done so you do not need to import all reducers in the store.js file

import { combineReducers } from "redux";
import App from "./AppReducer";
import Counter from "./CounterReducer";

const reducers = combineReducers({ App, Counter });

export default reducers;
