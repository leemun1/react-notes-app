import React from "react";
import { connect } from "react-redux";

import Icon from "../Misc/Icon";
class Search extends React.Component {
  state = {
    searchTerm: "",
    searchSubmitted: false,
    searchResult: []
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    let { notes } = this.props;
    let searchTerm = this.state.searchTerm.toLowerCase();

    const results = notes.filter(note => {
      return (
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm)
      );
    });
    console.log(results);
    this.setState({
      searchSubmitted: true
    });
  };

  onSearchReset = () => {
    this.setState({
      notesToShow: this.props.notes,
      searchSubmitted: false
    });
    this.props.getNotes();
  };

  render() {
    const { searchTerm, searchSubmitted } = this.state;
    return (
      <div className="search">
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Notes"
            onChange={this.onSearchChange}
          />
        </form>

        {searchSubmitted ? (
          <button className="search__button" onClick={() => this.onSearchReset}>
            <span className="icon">
              <i className="fas fa-search" />
            </span>
          </button>
        ) : (
          <button
            className="search__button"
            onClick={() => this.onSearchSubmit}
          >
            {/* <Icon name="rotate-ccw" /> */}
            <span className="icon">
              <i className="fas fa-undo" />
            </span>
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ notes, filter }) => {
  if (filter === "all") {
    const filteredNotes = notes.filter(note => !note.isTrash);
    return {
      notes: filteredNotes
    };
  } else if (filter === "trash") {
    const filteredNotes = notes.filter(note => note.isTrash);
    return {
      notes: filteredNotes
    };
  }
};

export default connect(
  mapStateToProps,
  null
)(Search);
