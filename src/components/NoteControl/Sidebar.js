import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { setFilter } from "../../actions/filter";

import Icon from "../Misc/Icon";

const Sidebar = ({ filter, setFilter }) => {
  return (
    <div className="sidebar">
      <div>
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <Link to={`/`} onClick={() => setFilter("all")}>
        <div className="sidebar__brand">Notes</div>
      </Link>
      <Link to={`/new`}>
        <div className="sidebar__write">
          <Icon name="plus" />
          <span>New</span>
        </div>
      </Link>
      <ul className="sidebar__nav">
        <li
          className="sidebar__nav__item"
          style={{ background: filter === "all" ? "#565656" : "#444" }}
          onClick={() => setFilter("all")}
        >
          <Icon name="file-text" />
          <span>Notes</span>
        </li>
        <li
          className="sidebar__nav__item"
          style={{ background: filter === "trash" ? "#565656" : "#444" }}
          onClick={() => setFilter("trash")}
        >
          <Icon name="trash-2" />
          <span>Trash</span>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ filter }) => ({
  filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
