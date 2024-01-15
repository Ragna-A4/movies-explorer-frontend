import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navigation.css";

function Navigation({ isOpen, onClose }) {
  let location = useLocation();

  return (
    <div className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <button
        className="navigation__button-close"
        type="button"
        onClick={onClose}
      />
      <nav className="navigation__container">
        <Link
          to={`${location.pathname === "/" ? "" : "/"}`}
          className={`navigation__menu-item ${
            location.pathname === "/" ? "navigation__menu-item_isactive" : ""
          }`}
        >
          Главная
        </Link>
        <Link
          to={`${location.pathname === "/movies" ? "" : "/movies"}`}
          className={`navigation__menu-item ${
            location.pathname === "/movies"
              ? "navigation__menu-item_isactive"
              : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to={`${location.pathname === "/saved-movies" ? "" : "/saved-movies"}`}
          className={`navigation__menu-item ${
            location.pathname === "/saved-movies"
              ? "navigation__menu-item_isactive"
              : ""
          }`}
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <Link
        to={`${location.pathname === "/profile" ? "" : "/profile"}`}
        className="navigation__auth-container"
      >
        <p className="navigation__auth-text">Аккаунт</p>
        <button className="navigation__menu-icon" type="button"></button>
      </Link>
    </div>
  );
}

export default Navigation;
