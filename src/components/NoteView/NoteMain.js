import React from "react";
import { Link } from "react-router-dom";

const NoteMain = () => (
  <div className="note__main">
    <img src="/img/notes.png" alt="" />
    <h1>Welcome to Notes</h1>
    <p>Capture your thoughts, stay inspired.</p>
    <Link to={`/new`}>
      <button>Take a note</button>
    </Link>
  </div>
);

export default NoteMain;
