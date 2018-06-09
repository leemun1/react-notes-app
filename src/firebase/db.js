import { db } from "./firebase";

export const doCreateNote = (title, content, createdAt, isTrash) =>
  db.ref(`notes`).push({
    title,
    content,
    createdAt,
    isTrash
  });

export const onceGetNotes = () => db.ref("notes").once("value");
