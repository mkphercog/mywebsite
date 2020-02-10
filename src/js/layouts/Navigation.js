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
    name: "Edukacja",
    path: "/education"
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

  const nav = navItems.map(item => (
    <li className="nav__item" key={item.name}>
      <NavLink
        className="nav__link"
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <ul className={`nav ${showMenu ? "show" : "hide"}`}>
        <ExitIcon click={() => setShowMenu(false)} />
        {nav}{" "}
      </ul>
      <MenuIcon showMenu={showMenu} click={() => setShowMenu(true)} />
    </>
  );
};

export default Navigation;
