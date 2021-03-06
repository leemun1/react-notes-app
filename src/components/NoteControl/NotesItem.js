import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import * as _ from "lodash";

import { LOCALE_CONFIG } from "../../constants";

import Icon from "../Misc/Icon";

moment.updateLocale("en", LOCALE_CONFIG);

class NotesItem extends React.Component {
  render() {
    const styles = { borderLeft: "4px solid rgb(241, 79, 20)" };
    const { note, current, markCurrent, onFlag } = this.props;
    return (
      <div className="notes__item" onFocus={() => markCurrent(note.id)}>
        <div
          className="notes__item__meta"
          style={note.id === current ? styles : {}}
        >
          <span className="notes__item__meta--timesince">
            {moment(note.createdAt).fromNow()}
          </span>
          <span
            className="notes__item__meta--flagged"
            onClick={() => onFlag(note.id)}
          >
            <Icon
              name="flag"
              style={note.isFlagged && { fill: "rgb(241, 79, 20)" }}
            />
          </span>
        </div>
        <Link to={`/view/${note.id}`} className="notes__item__preview">
          <div>
            <h1>{_.truncate(note.title, { length: 30 })}</h1>
            <p>{_.truncate(note.content, { length: 65 })}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default NotesItem;
