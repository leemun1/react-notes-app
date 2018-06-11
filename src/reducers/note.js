import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FLAG_NOTE_TOGGLE,
  ARCHIVE_NOTE_TOGGLE,
  GET_NOTES
} from "../constants";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case GET_NOTES:
      return [...action.notes];
    case FLAG_NOTE_TOGGLE:
      return state;
    case ARCHIVE_NOTE_TOGGLE:
      return applyArchiveToggle(state, action);
    case DELETE_NOTE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const applyArchiveToggle = (state, action) => {
  return state.map(note => {
    if (note.id === action.id) {
      return { ...note, isArchived: !note.isArchived };
    } else {
      return note;
    }
  });
};

export default noteReducer;
