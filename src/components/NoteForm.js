import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import moment from "moment";

import { addNote } from "../actions/note";

class NoteForm extends React.Component {
  state = {
    titleField: "",
    contentField: ""
  };

  onTitleChange = event => {
    this.setState({
      titleField: event.target.value
    });
  };

  onContentChange = event => {
    this.setState({
      contentField: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    let newNote = {
      id: uuid(),
      createdAt: moment().valueOf(),
      title: this.state.titleField,
      content: this.state.contentField
    };
    this.props.submitNewNote(newNote);
    this.setState({
      titleField: "",
      contentField: ""
    });
    console.log(this.props.notes);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="note__form">
        <input
          type="text"
          value={this.state.titleField}
          onChange={this.onTitleChange}
          placeholder="title"
        />
        <input
          type="text"
          value={this.state.contentField}
          onChange={this.onContentChange}
          placeholder="content"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});

const mapDispatchToProps = dispatch => ({
  submitNewNote: note => dispatch(addNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
