import { ADD_NOTE, GET_NOTES } from "../constants";

const noteReducer = (state = [], action) => {
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
