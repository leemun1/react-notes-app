import { ADD_NOTE, GET_NOTES } from "../constants";

import { notes } from "../seed";

const INITIAL_STATE = {
  notes: []
};

const applyGetNotes = (state, action) => {
  return [...state, ...action.notes];
};

const noteReducer = (state = notes, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case GET_NOTES:
      return [...action.notes];
    default:
      return state;
  }
};

export default noteReducer;
