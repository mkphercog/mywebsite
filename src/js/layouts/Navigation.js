import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navigation.scss";
import MenuIcon from "../components/MenuIcon";
import ExitIcon from "../components/ExitIcon";

const navItems = [
  {
    name: "O mnie",
    path: "/",
    exact: true
  },
  {
    name: "Doświadczenie",
    path: "/experience"
  },
  {
    name: "Umiejętności",
    path: "/skills"
  },
  {
    name: "Zainteresowania",
    path: "/hobbies"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  }
];

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [positionMenu, setPositionMenu] = useState(-100);
  const animationSpeed = 8;

  //menu animation when mobile or width < 1024px
  function menuSlide(num) {
    setPositionMenu(positionMenu + `${num}` * 1);
  }

  if (showMenu && positionMenu < 0) {
    setTimeout(() => menuSlide(1), animationSpeed);
  }
  if (!showMenu && positionMenu > -100) {
    setTimeout(() => menuSlide(-1), animationSpeed);
  }
  //--

  //initial look of menu (when web load and window resize)
  //I must do here setPositionMenu, because on desktop I need 'right: auto'
  //And after resize window < 1024px value must back to Number
  window.onload = () => {
    if (window.innerWidth >= 1024 && !showMenu) {
      setPositionMenu("auto");
      setShowMenu(true);
    } else {
      setPositionMenu(-100);
      setShowMenu(false);
    }

    window.addEventListener("resize", () => {
      let windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setPositionMenu("auto");
        setShowMenu(true);
      } else if (windowWidth < 1024) {
        setPositionMenu(-100);
        setShowMenu(false);
      }
    });
  };
  // --

  const nav = navItems.map(item => (
    <li className="nav__item" key={item.name}>
      <NavLink
        className="nav__link"
        to={item.path}
        exact={item.exact ? item.exact : false}
        onClick={() => setShowMenu(false)}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul
        className="nav"
        style={{
          right: [positionMenu === "auto" ? positionMenu : positionMenu + "vw"]
        }}
      >
        <ExitIcon click={() => setShowMenu(false)} />
        {nav}{" "}
      </ul>
      <MenuIcon showMenu={showMenu} click={() => setShowMenu(true)} />
    </>
  );
};

export default Navigation;
