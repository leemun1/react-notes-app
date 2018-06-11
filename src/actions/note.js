import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FLAG_NOTE_TOGGLE,
  ARCHIVE_NOTE_TOGGLE,
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

// Flag Note Toggle
export const flagNoteToggle = id => ({
  type: FLAG_NOTE_TOGGLE,
  id
});

export const startFlagNoteToggle = id => {
  return dispatch => {
    return db.onceGetNoteById(id).then(snapshot => {
      const { isFlagged } = snapshot.val();
      db.flagNote(id, isFlagged);
      dispatch(flagNoteToggle(id));
    });
  };
};

// Archive Note Toggle
export const archiveNoteToggle = id => ({
  type: ARCHIVE_NOTE_TOGGLE,
  id
});

export const startArchiveNoteToggle = id => {
  return dispatch => {
    return db.onceGetNoteById(id).then(snapshot => {
      const { isArchived } = snapshot.val();
      db.archiveNote(id, isArchived);
      dispatch(archiveNoteToggle(id));
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
