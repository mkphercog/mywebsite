import React, { useState } from "react";
import "../../styles/MenuIcon.scss";

const MenuIcon = ({ showMenu, click }) => {
  const [positionIcon, setPositionIcon] = useState(0);
  const animationSpeed = 10;

  function iconSlide(num) {
    setPositionIcon(positionIcon + `${num}` * 1);
  }

  if (!showMenu && positionIcon < 0) {
    setTimeout(() => iconSlide(1), animationSpeed);
  }
  if (showMenu && positionIcon > -100) {
    setTimeout(() => iconSlide(-1), animationSpeed);
  }

  return (
    <div
      onClick={click}
      className="menu-icon"
      style={{ right: positionIcon + "px" }}
    >
      <i className="fas fa-caret-down"></i>
    </div>
  );
};

export default MenuIcon;
