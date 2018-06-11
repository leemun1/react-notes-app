import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";

import { startGetNotes } from "../../actions/note";

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
      notes: notes.filter(note => !note.isArchived),
      searchSubmitted: false,
      searchTerm: ""
    });
  };

  componentDidMount() {
    this.props.onGetNotes();
  }

  componentWillReceiveProps(nextProps) {
    const { notes, onGetNotes } = this.props;
    const newNotes = nextProps.notes;

    // re-render if new note item added
    if (newNotes.length !== notes.length) {
      onGetNotes();
    }

    // re-render if note status changed
    newNotes.forEach(newNote => {
      let id = newNote.id;
      let oldNote = notes.find(note => note.id === id);
      if (oldNote) {
        if (newNote.isArchived !== oldNote.isArchived) {
          onGetNotes();
        }
      }
    });

    // handle change of filter
    if (nextProps.filter === "all") {
      const allNotes = notes.filter(note => !note.isArchived);
      this.setState({
        notes: allNotes
      });
    } else if (nextProps.filter === "archived") {
      const archivedNotes = notes.filter(note => note.isArchived);
      this.setState({
        notes: archivedNotes
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
  onGetNotes: () => dispatch(startGetNotes())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Notes);
