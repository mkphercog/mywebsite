import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import MenuIcon from "../MenuIcon/MenuIcon";
import ExitIcon from "../ExitIcon/ExitIcon";
import Language from "../LanguageIcons/LanguageIcons";

const navItems = [
  {
    namePL: "O mnie",
    nameEN: "About",
    path: "/",
    exact: true
  },
  {
    namePL: "Doświadczenie",
    nameEN: "Experience",
    path: "/experience"
  },
  {
    namePL: "Umiejętności",
    nameEN: "Skills",
    path: "/skills"
  },
  {
    namePL: "Zainteresowania",
    nameEN: "Hobbies",
    path: "/hobbies"
  },
  {
    namePL: "Portfolio",
    nameEN: "Portfolio",
    path: "/portfolio"
  }
];

const Navigation = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [positionMenu, setPositionMenu] = useState(-100);
  const animationSpeed = 8;

  //menu animation when mobile or width < 1024px
  function menuSlide(num) {
    setPositionMenu(positionMenu + `${num}` * 1);
  }

  if (showMenu && positionMenu < 0) {
    setTimeout(() => menuSlide(2), animationSpeed);
  }
  if (!showMenu && positionMenu > -100) {
    setTimeout(() => menuSlide(-2), animationSpeed);
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

    if (window.innerWidth >= 800 && window.innerHeight >= 600) {
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
    }
  };
  // --

  const nav = navItems.map(item => (
    <li className="nav__item" key={item.namePL}>
      <NavLink
        className="nav__link"
        to={item.path}
        exact={item.exact ? item.exact : false}
        onClick={() => setShowMenu(false)}
      >
        {props.lang === "PL" ? item.namePL : item.nameEN}
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
        <Language click={props.click} lang={props.lang} />
        {nav}{" "}
      </ul>
      <MenuIcon showMenu={showMenu} click={() => setShowMenu(true)} />
    </>
  );
};

export default Navigation;
