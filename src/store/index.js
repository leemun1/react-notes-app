import { createStore } from "redux";

import noteReducer from "../reducers/note";

const store = createStore(noteReducer);

export default store;
