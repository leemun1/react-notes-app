import React from "react";
import NoteForm from "./NoteForm";

const NoteMain = () => (
  <div className="note__main">
    <h1>Welcome to Notes</h1>
    <img src="/img/notes.png" alt="" />
  </div>
);

const NoteView = props => {
  return (
    <div className="note">
      <h1>View Note</h1>
    </div>
  );
};

const NoteAdd = () => (
  <div className="note">
    <h1 className="note__heading">New Note</h1>
    <NoteForm />
  </div>
);
export { NoteMain, NoteAdd, NoteView };
