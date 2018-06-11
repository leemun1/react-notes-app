import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  RESTORE_NOTE,
  GET_NOTES
} from "../constants";
import { db } from "../firebase";

// Add New Note
export const addNote = note => ({
  type: ADD_NOTE,
  note
});

// Fetch Notes
export const getNotes = notes => ({
  type: GET_NOTES,
  notes
});

export const startGetNotes = () => {
  return dispatch => {
    return db.onceGetNotes().then(snapshot => {
      const notes = [];

      snapshot.forEach(childSnapshot => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(getNotes(notes));
    });
  };
};

// Delete Note
export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
});

export const startDeleteNote = id => {
  return dispatch => {
    return db.deleteNote(id).then(() => {
      dispatch(deleteNote(id));
    });
  };
};

// Restore Note
export const restoreNote = id => ({
  type: RESTORE_NOTE,
  id
});

export const startRestoreNote = id => {
  return dispatch => {
    return db.restoreNote(id).then(() => {
      dispatch(restoreNote(id));
    });
  };
};
