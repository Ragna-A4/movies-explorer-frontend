import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Header.css";

function Header() {
  let { pathName } = useLocation;
  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      <nav className="header__menu header__menu_type_authorized">
        <Link
          to={`${pathName === "/movies" ? "" : "/movies"}`}
          className="header__menu-item header__menu-item_type_authorized"
        >
          Фильмы
        </Link>
        <Link
          to={`${pathName === "/saved-movies" ? "" : "/saved-movies"}`}
          className="header__menu-item header__menu-item_type_authorized"
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <div className="header__auth-container">
        <Link
          to={`${pathName === "/profile" ? "" : "/profile"}`}
          className="header__auth-text"
        >
          Аккаунт
        </Link>
        <button className="header__menu-icon" type="button"></button>
      </div>
    </header>
  );
}

export default Header;
