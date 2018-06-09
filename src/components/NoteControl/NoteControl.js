import React from "react";
import { connect } from "react-redux";

import Sidebar from "./Sidebar";
import Notes from "./Notes";

class NoteControl extends React.Component {
  render() {
    return (
      <div className="note__control">
        <Sidebar />
        <Notes />
      </div>
    );
  }
}

const mapStateToProps = ({ notes, filter }) => ({
  notes,
  filter
});

export default connect(
  mapStateToProps,
  null
)(NoteControl);
