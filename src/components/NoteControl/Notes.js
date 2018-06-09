import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

import { db } from "../../firebase";
import { getNotes } from "../../actions/note";

import Icon from "../Misc/Icon";
import NotesItem from "./NotesItem";

class Notes extends React.Component {
  state = {
    notes: this.props.notes,
    current: "",
    searchTerm: "",
    searchSubmitted: false,
    searchResult: []
  };

  markCurrent = id => {
    this.setState({
      current: id
    });
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    let { notes } = this.state;
    let searchTerm = this.state.searchTerm.toLowerCase();

    const results = notes.filter(note => {
      return (
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm)
      );
    });
    this.setState({
      notes: results,
      searchSubmitted: true
    });
  };

  onSearchReset = () => {
    const { notes } = this.props;

    this.setState({
      notes: notes.filter(note => !note.isTrash),
      searchSubmitted: false,
      searchTerm: ""
    });
  };

  componentDidMount() {
    const { notes } = this.props;
    const allNotes = notes.filter(note => !note.isTrash);
    this.setState({
      notes: allNotes
    });
  }

  // componentDidMount() {
  //   const { onGetNotes } = this.props;
  //   db.onceGetNotes().then(snapshot => {
  //     const data = snapshot.val();
  //     const notes = Object.keys(data).map(key => {
  //       return { id: key, ...data[key] };
  //     });
  //     onGetNotes(notes);
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    const { notes, onGetNotes } = this.props;

    // force re-render if new note item added
    if (nextProps.notes.length !== notes.length) {
      onGetNotes(nextProps.notes);
    }

    // handle change of filter
    if (nextProps.filter === "all") {
      const allNotes = notes.filter(note => !note.isTrash);
      this.setState({
        notes: allNotes
      });
    } else if (nextProps.filter === "trash") {
      const trashedNotes = notes.filter(note => note.isTrash);
      this.setState({
        notes: trashedNotes
      });
    }
  }

  render() {
    const { notes, current, searchTerm, searchSubmitted } = this.state;
    const disabled = searchTerm === "";
    return (
      <div className="notes__list__box">
        <div className="search">
          <form onSubmit={this.onSearchSubmit}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search Notes"
              onChange={this.onSearchChange}
            />
          </form>

          {!searchSubmitted ? (
            <button
              className="search__button"
              disabled={disabled}
              onClick={this.onSearchSubmit}
            >
              <Icon name="search" />
            </button>
          ) : (
            <button className="search__button" onClick={this.onSearchReset}>
              <Icon name="rotate-ccw" />
            </button>
          )}
        </div>
        <div className="notes">
          {notes.length === 0 ? (
            <div className="notes__list__empty">
              <p>(¬_¬)</p>
              <p>No notes to show.</p>
            </div>
          ) : (
            <Scrollbars
              className="notes_list"
              autoHide={true}
              autoHideTimeout={1000}
              autoHideDuration={400}
              hideTracksWhenNotNeeded={true}
            >
              {notes.map(note => (
                <NotesItem
                  key={note.id}
                  note={note}
                  markCurrent={this.markCurrent}
                  current={current}
                />
              ))}
            </Scrollbars>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ notes, filter }) => ({
  notes,
  filter
});

const mapStateToDispatch = dispatch => ({
  onGetNotes: notes => dispatch(getNotes(notes))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Notes);
