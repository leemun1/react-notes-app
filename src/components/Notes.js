import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import moment from "moment";
const _ = require("lodash");

moment.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "s",
    ss: "%d s",
    m: "m",
    mm: "%d m",
    h: "h",
    hh: "%d h",
    d: "d",
    dd: "%d d",
    M: "m",
    MM: "%d m",
    y: "y",
    yy: "%d y"
  }
});

const Notes = ({ notes }) => (
  <div className="notes">
    <div className="notes__search">
      <input type="text" placeholder="Search Notes" />
    </div>
    <Scrollbars
      className="notes_list"
      autoHide={true}
      autoHideTimeout={1000}
      autoHideDuration={400}
      hideTracksWhenNotNeeded={true}
    >
      {notes.map(note => <NotesItem key={note.id} note={note} />)}
    </Scrollbars>
  </div>
);

const NotesItem = ({ note }) => (
  <div className="notes__item">
    <div className="notes__item__meta">
      <span className="notes__item__meta--timesince">
        {moment(note.createAd).fromNow()}
      </span>
      <span className="notes__item__meta--flagged">
        <svg>
          <use xlinkHref="img/icons/sprite.svg#icon-flag" />
        </svg>
      </span>
    </div>
    <Link to={`/view/${note.id}`}>
      <div className="notes__item__preview">
        <h1>{_.truncate(note.title)}</h1>
        <p>{_.truncate(note.content)}</p>
      </div>
    </Link>
  </div>
);

const mapStateToProps = state => ({
  notes: state
});

export default connect(
  mapStateToProps,
  null
)(Notes);
