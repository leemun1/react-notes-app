import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Notes from "./Notes";

class App extends Component {
  state = {
    note: "",
    notes: [],
    isNew: false
  };

  onSubmit = event => {
    this.setState(prevState => {
      return {
        note: "",
        notes: prevState.notes.concat(this.state.note)
      };
    });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({
      note: event.target.value
    });
  };

  toggleNew = () => {
    this.setState({
      isNew: true
    });
  };

  render() {
    return (
      <div className="app">
        <Sidebar toggleNew={this.toggleNew} />
        <Notes notes={this.state.notes} />
        <Note
          value={this.state.note}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          isNew={this.state.isNew}
        />
      </div>
    );
  }
}

const Note = ({ value, onChange, onSubmit, isNew }) => {
  let render;

  if (isNew) {
    render = <NoteForm value={value} onChange={onChange} onSubmit={onSubmit} />;
  } else {
    render = <Empty />;
  }
  return <div className="note">{render}</div>;
};

const NoteForm = ({ value, onChange, onSubmit }) => (
  <div className="note__form">
    <h1>New Note</h1>
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Save</button>
    </form>
  </div>
);

const Empty = () => <div style={{ fontSize: "3rem" }}>No notes to show.</div>;

export default App;
