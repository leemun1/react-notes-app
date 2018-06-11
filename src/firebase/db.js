import { db } from "./firebase";

export const doCreateNote = (title, content, createdAt, isTrash) =>
  db.ref(`notes`).push({
    title,
    content,
    createdAt,
    isTrash
  });

export const onceGetNotes = () => db.ref("notes").once("value");

export const deleteNote = id => db.ref(`notes/${id}`).update({ isTrash: true });
export const restoreNote = id =>
  db.ref(`notes/${id}`).update({ isTrash: false });
