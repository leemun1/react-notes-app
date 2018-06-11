import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Scrollbars } from "react-custom-scrollbars";

import {
  startGetNotes,
  startEditNote,
  startArchiveNote,
  startRestoreNote,
  startDeleteNote
} from "../../actions/note";

class NoteView extends React.Component {
  state = {
    title: "",
    createdAt: "",
    content: "",
    isArchived: ""
  };

  onArchive = id => {
    this.props.onArchiveNote(id);
    this.props.history.push("/");
  };

  onRestore = id => {
    this.props.onRestoreNote(id);
    this.props.history.push("/");
  };

  onDelete = id => {
    this.props.onDeleteNote(id);
    this.props.history.push("/");
  };

  componentDidMount() {
    this.setState({
      ...this.props.note
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.note
    });
  }

  render() {
    const { title, createdAt, content, isArchived } = this.state;
    const { id } = this.props.match.params;
    return (
      <div className="note__view">
        <h1 className="note__view--title">{title}</h1>
        <div className="note__view--meta">
          {isArchived && (
            <div className="note__view--meta--status">
              <span>Archived</span>
            </div>
          )}
          <span className="note__view--meta--date">
            {moment(createdAt).format("MMM Do, YYYY")} {" - "}
          </span>
          <span className="note__view--meta--time">
            {moment(createdAt).format("hh:mmA")}
          </span>
        </div>
        <Scrollbars
          className="note__view--content"
          autoHide={true}
          autoHideTimeout={1000}
          autoHideDuration={400}
          hideTracksWhenNotNeeded={true}
        >
          {content}
        </Scrollbars>

        {!isArchived ? (
          <div className="note__view__control">
            <button
              className="note__view__control--archive"
              onClick={() => this.onArchive(id)}
            >
              Archive
            </button>
            <button
              className="note__view__control--edit"
              onClick={() => alert("feature not yet available.")}
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="note__view__control">
            <button
              className="note__view__control--restore"
              onClick={() => this.onRestore(id)}
            >
              Restore
            </button>
            <button
              className="note__view__control--delete"
              onClick={() => this.onDelete(id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ notes }, props) => ({
  note: notes.find(note => note.id === props.match.params.id)
});

const mapStateToDispatch = dispatch => ({
  onGetNotes: () => dispatch(startGetNotes()),
  onArchiveNote: id => dispatch(startArchiveNote(id)),
  onRestoreNote: id => dispatch(startRestoreNote(id)),
  onDeleteNote: id => dispatch(startDeleteNote(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapStateToDispatch
  )(NoteView)
);
