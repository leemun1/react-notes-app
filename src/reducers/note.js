import { ADD } from "../constants";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.note];
    default:
      return state;
  }
};

export default noteReducer;
