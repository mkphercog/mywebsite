import React, { useState } from "react";
import "./MenuIcon.scss";

export const MenuIcon = ({ isMenuVisible, setMenuVisible }) => {
  const [positionIcon, setPositionIcon] = useState(0);
  const animationSpeed = 8;

  const iconSlide = num => {
    setPositionIcon(positionIcon + `${num}` * 1);
  };

  if (!isMenuVisible && positionIcon < 0) {
    setTimeout(() => iconSlide(1), animationSpeed);
  }
  if (isMenuVisible && positionIcon > -100) {
    setTimeout(() => iconSlide(-1), animationSpeed);
  }

  return (
    <div
      onClick={setMenuVisible}
      className="menu-icon"
      style={{ right: positionIcon + "px" }}
    >
      <i className="fas fa-caret-down"></i>
    </div>
  );
};
