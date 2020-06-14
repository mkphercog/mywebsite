import React from "react";
import PropTypes from "prop-types";

import "./MenuIcon.scss";

export const MenuIcon = ({ isMenuVisible, setMenuVisible }) => (
  <div
    onClick={setMenuVisible}
    className={`menu-icon ${
      isMenuVisible ? "menu-icon--hide" : "menu-icon--show"
    }`}
  >
    <i className="fas fa-caret-down"></i>
  </div>
);

MenuIcon.propTypes = {
  isMenuVisible: PropTypes.bool,
  setMenuVisible: PropTypes.func,
};
