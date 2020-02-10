import React from "react";
import "../../styles/MenuIcon.scss";

const MenuIcon = props => {
  return (
    <div
      onClick={props.click}
      className={`menu-icon ${props.showMenu ? "hide" : "show"}`}
    >
      <i className="fas fa-caret-down"></i>
    </div>
  );
};

export default MenuIcon;
