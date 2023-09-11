import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo_bagel.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="лого_бублик" src={logo} />
      <nav className="header__menu header__menu_type_authorized">
        <a
          className="header__menu-item header__menu-item_type_authorized"
          href="#"
        >
          Фильмы
        </a>
        <a
          className="header__menu-item header__menu-item_type_authorized"
          href="#"
        >
          Сохранённые фильмы
        </a>
      </nav>
      <div className="header__auth-container">
        <a className="header__auth-text" href="#">
          Аккаунт
        </a>
        <button className="header__menu-icon" type="button"></button>
      </div>
    </header>
  );
}

export default Header;
