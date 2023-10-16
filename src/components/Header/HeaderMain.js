import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo_bagel.svg";

function Header() {
  return (
    <header className="header header_color_pink">
      <img className="header__logo" alt="лого_бублик" src={logo} />
      <nav className="header__menu">
        <Link
          to="signup"
          className="header__menu-item"
        >
          Регистрация
        </Link>
      </nav>
      <Link to="signin" className="header__button-auth">
        Войти
      </Link>
    </header>
  );
}

export default Header;
