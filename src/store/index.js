import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import noteReducer from "../reducers/note";
import filterReducer from "../reducers/filter";

const rootReducer = combineReducers({
  filter: filterReducer,
  notes: noteReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;
