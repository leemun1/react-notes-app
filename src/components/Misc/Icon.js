import React from "react";

const Icon = ({ name }) => (
  <svg>
    <use xlinkHref={`img/icons/sprite.svg#icon-${name}`} />
  </svg>
);

export default Icon;
