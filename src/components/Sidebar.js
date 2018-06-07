import React from "react";

const Sidebar = ({ toggleNew }) => (
  <div className="sidebar">
    <div className="sidebar__brand">Notes</div>
    <div className="sidebar__write" onClick={toggleNew}>
      + New
    </div>
    <ul className="sidebar__nav">
      <li className="sidebar__nav__item">Notes</li>
      <li className="sidebar__nav__item">Trash</li>
    </ul>
  </div>
);

export default Sidebar;
