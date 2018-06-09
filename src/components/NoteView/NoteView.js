import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const NoteView = ({ notes, match }) => {
  const note = notes.filter(note => note.id === match.params.id)[0];
  return (
    <div className="note__view">
      <h1 className="note__view--title">{note.title}</h1>
      <p className="note__view--date">
        {moment(note.createdAt).format("MMM Do, YYYY")}
      </p>
      <p className="note__view--time">
        {moment(note.createdAt).format("hh:mmA")}
      </p>
      <p className="note__view--content">{note.content}</p>
    </div>
  );
};

const mapStateToProps = ({ notes }) => ({
  notes
});

export default connect(
  mapStateToProps,
  null
)(NoteView);
