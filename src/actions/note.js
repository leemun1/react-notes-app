import { ADD_NOTE, GET_NOTES } from "../constants";
import { db } from "../firebase";

export const addNote = note => ({
  type: ADD_NOTE,
  note
});

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
