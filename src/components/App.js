import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoteControl from "./NoteControl/NoteControl";
import NoteMain from "./NoteView/NoteMain";
import NoteAdd from "./NoteView/NoteAdd";
import NoteView from "./NoteView/NoteView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NoteControl />
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
