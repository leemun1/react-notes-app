import { ADD } from "../constants";

export const addNote = note => ({
  type: ADD,
  note
});
