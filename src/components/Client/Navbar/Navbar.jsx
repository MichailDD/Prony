import React from "react";
import "./Navbar.scss";
import { navBar } from "../../../store";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [state, setState] = useState(navBar);

  return (
    <div className="navbar">
      <h1 className="navbar__title">{state.title}</h1>
      <div className="navbar__body">
        <h2 className="navbar__subtitle">{state.profile.title}</h2>
        <ul className="navbar__list">
          {state.profile.list.map((el) => (
            <li className="navbar__item" key={el.id}>
              <Link to={el.link} className="navbar__link">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="navbar__subtitle">{state.billing.title}</h2>
        <ul className="navbar__list">
          {state.billing.list.map((el) => (
            <li className="navbar__item" key={el.id}>
              <Link to={el.link} className="navbar__link">
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
