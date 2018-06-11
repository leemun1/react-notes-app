import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";

import { db } from "../../firebase";
import { addNote, startGetNotes } from "../../actions/note";

const INITIAL_STATE = {
  title: "",
  content: "",
  disabled: true
};

class NoteForm extends React.Component {
  state = {
    ...INITIAL_STATE
  };

  onTitleChange = event => {
    this.setState({
      title: event.target.value
    });
    if (event.target.value === "") {
      this.setState({
        disabled: true
      });
    }
  };

  onContentChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  toggleDisable = () => {
    const { title, content } = this.state;
    if (title !== "" && content !== "") {
      this.setState({
        disabled: false
      });
    }
  };

  // save to db on submit
  onSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;
    const createdAt = moment().valueOf();
    const isTrash = false;

    db.doCreateNote(title, content, createdAt, isTrash).then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push("/");
    });

    this.props.onGetNotes();
  };

  render() {
    return (
      <form
        onChange={this.toggleDisable}
        onSubmit={this.onSubmit}
        className="note__form"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="What's on your mind today?"
          autoComplete="off"
          autoFocus={true}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.onContentChange}
          placeholder="Write something here..."
          autoComplete="off"
        />
        <button disabled={this.state.disabled} type="submit">
          Save
        </button>
      </form>
    );
  }
}

const mapStateToDispatch = dispatch => ({
  onAddNote: note => dispatch(addNote(note)),
  onGetNotes: () => dispatch(startGetNotes())
});

export default withRouter(
  connect(
    null,
    mapStateToDispatch
  )(NoteForm)
);
