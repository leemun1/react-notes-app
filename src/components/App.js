import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./Sidebar";
import Notes from "./Notes";
import { NoteMain, NoteAdd, NoteView } from "./Note";

import { notes } from "../seed";

class App extends Component {
  state = {
    notes: notes
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar toggleNew={this.toggleNew} />
          <Notes notes={this.state.notes} />
          <Switch>
            <Route exact path="/" component={NoteMain} />
            <Route path="/new" component={NoteAdd} />
            <Route path="/view/:id" component={NoteView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
