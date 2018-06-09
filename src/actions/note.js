import { ADD_NOTE, GET_NOTES } from "../constants";

export const addNote = note => ({
  type: ADD_NOTE,
  note
});

export const getNotes = notes => ({
  type: GET_NOTES,
  notes
});
