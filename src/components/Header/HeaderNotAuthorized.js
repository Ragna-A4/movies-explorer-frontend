import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function HeaderNotAuthorized() {
  return (
    <header className="header header_color_pink">
      <Link to="/" className="header__logo" />
      <nav className="header__menu">
        <Link to="signup" className="header__menu-item">
          Регистрация
        </Link>
      </nav>
      <Link to="signin" className="header__button-auth">
        Войти
      </Link>
    </header>
  );
}

export default HeaderNotAuthorized;
