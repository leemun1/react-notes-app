import React from "react";
import "simplebar";
import "simplebar/dist/simplebar.css";

const Notes = ({ notes }) => (
  <div className="notes">
    <div className="notes__search">
      <input type="text" placeholder="Search Notes" />
    </div>
    <div className="notes__list">
      {notes.map(note => <NotesItem key={note} note={note} />)}
    </div>
  </div>
);

const NotesItem = ({ note }) => (
  <div className="notes__item">
    <div className="notes__item__meta">
      <span>12m</span>
      <span>icon</span>
    </div>
    <div className="notes__item__preview">
      <h1>{note}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
);

export default Notes;
