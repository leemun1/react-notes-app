import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <Link to={`/`}>
      <div className="sidebar__brand">Notes</div>
    </Link>
    <Link to={`/new`}>
      <div className="sidebar__write">
        <svg>
          <use xlinkHref="img/icons/sprite.svg#icon-plus" />
        </svg>
        <span>New</span>
      </div>
    </Link>
    <ul className="sidebar__nav">
      <li className="sidebar__nav__item">
        <svg>
          <use xlinkHref="img/icons/sprite.svg#icon-file-text" />
        </svg>
        <span>Notes</span>
      </li>
      <li className="sidebar__nav__item">
        <svg>
          <use xlinkHref="img/icons/sprite.svg#icon-trash-2" />
        </svg>
        <span>Trash</span>
      </li>
    </ul>
  </div>
);

export default Sidebar;
