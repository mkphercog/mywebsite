import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navigation.scss";

const navItems = [
  {
    name: "about",
    path: "/",
    exact: true
  },
  {
    name: "experience",
    path: "/experience"
  },
  {
    name: "education",
    path: "/education"
  }
];

const Navigation = () => {
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

  return <ul className="nav">{nav}</ul>;
};

export default Navigation;
