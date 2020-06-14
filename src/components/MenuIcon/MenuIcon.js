import React from "react";
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
