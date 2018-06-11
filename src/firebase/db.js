import { db } from "./firebase";

export const doCreateNote = (
  title,
  content,
  createdAt,
  isArchived,
  isFlagged
) =>
  db.ref(`notes`).push({
    title,
    content,
    createdAt,
    isArchived,
    isFlagged
  });

export const onceGetNotes = () => db.ref("notes").once("value");

export const onceGetNoteById = id => db.ref(`notes/${id}`).once("value");

export const flagNote = (id, isFlagged) => {
  db.ref(`notes/${id}`).update({ isFlagged: !isFlagged });
};

export const archiveNote = (id, isArchived) => {
  db.ref(`notes/${id}`).update({ isArchived: !isArchived });
};

export const deleteNote = id => db.ref(`notes/${id}`).remove();
