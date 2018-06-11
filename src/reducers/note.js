import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  ARCHIVE_NOTE,
  RESTORE_NOTE,
  GET_NOTES
} from "../constants";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case GET_NOTES:
      return [...action.notes];
    case ARCHIVE_NOTE:
      return state.filter(({ id }) => id !== action.id);
    case RESTORE_NOTE:
      return applyRestoreNote(state, action);
    case DELETE_NOTE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const applyRestoreNote = (state, action) => {
  return state.map(note => {
    if (note.id === action.id) {
      return {
        ...note,
        isTrash: false
      };
    } else {
      return note;
    }
  });
};

export default noteReducer;
