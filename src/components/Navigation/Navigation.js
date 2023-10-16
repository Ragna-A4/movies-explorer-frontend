import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navigation.css";

function Navigation({ isOpen, onClose }) {
  let { pathName } = useLocation;
  return (
    <div className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <button
        className="navigation__button-close"
        type="button"
        onClick={onClose}
      />
      <nav className="navigation__container">
        <Link
          to={`${pathName === "/" ? "" : "/"}`}
          className="navigation__menu-item"
        >
          Главная
        </Link>
        <Link
          to={`${pathName === "/movies" ? "" : "/movies"}`}
          className="navigation__menu-item navigation__menu-item_isactive"
        >
          Фильмы
        </Link>
        <Link
          to={`${pathName === "/saved-movies" ? "" : "/saved-movies"}`}
          className="navigation__menu-item"
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <Link
        to={`${pathName === "/profile" ? "" : "/profile"}`}
        className="navigation__auth-container"
      >
        <p className="navigation__auth-text">Аккаунт</p>
        <button className="navigation__menu-icon" type="button"></button>
      </Link>
    </div>
  );
}

export default Navigation;
