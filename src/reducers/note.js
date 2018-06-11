import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE, GET_NOTES } from "../constants";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case GET_NOTES:
      return [...action.notes];
    case DELETE_NOTE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default noteReducer;
