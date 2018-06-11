import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { startGetNotes } from "../../actions/note";

class NoteView extends React.Component {
  state = {
    title: "",
    createdAt: "",
    content: "",
    isTrash: ""
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
    const { title, createdAt, content, isTrash } = this.state;
    return (
      <div className="note__view">
        <h1 className="note__view--title">{title}</h1>
        <p className="note__view--date">
          {moment(createdAt).format("MMM Do, YYYY")}
        </p>
        <p className="note__view--time">{moment(createdAt).format("hh:mmA")}</p>
        <p className="note__view--content">{content}</p>
        <p className="note__view--content">{isTrash}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }, props) => ({
  note: notes.find(note => note.id === props.match.params.id)
});

const mapStateToDispatch = dispatch => ({
  onGetNotes: () => dispatch(startGetNotes())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(NoteView);
