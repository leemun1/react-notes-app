import { db } from "./firebase";

export const doCreateNote = (title, content, createdAt, isArchived) =>
  db.ref(`notes`).push({
    title,
    content,
    createdAt,
    isArchived
  });

export const onceGetNotes = () => db.ref("notes").once("value");

export const archiveNote = id =>
  db.ref(`notes/${id}`).update({ isArchived: true });
export const restoreNote = id =>
  db.ref(`notes/${id}`).update({ isArchived: false });

export const deleteNote = id => db.ref(`notes/${id}`).remove();
