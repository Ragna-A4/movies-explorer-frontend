import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo_bagel.svg";

function Header() {
  return (
    <header className="header header_color_pink">
      <img className="header__logo" alt="лого_бублик" src={logo} />
      <nav className="header__menu header__menu_type_authorized">
        <Link
          to="movies"
          className="header__menu-item header__menu-item_type_authorized"
        >
          Фильмы
        </Link>
        <Link
          to="saved-movies"
          className="header__menu-item header__menu-item_type_authorized"
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <div className="header__auth-container">
        <Link to="" className="header__auth-text">
          Аккаунт
        </Link>
        <button
          className="header__menu-icon header__menu-icon_color_pink"
          type="button"
        ></button>
      </div>
    </header>
  );
}

export default Header;
