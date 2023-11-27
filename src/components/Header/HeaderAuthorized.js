import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

import Navigation from "../Navigation/Navigation";

function HeaderAuthorized() {
  const [isNavigatonOpen, setIsNavigationOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsNavigationOpen(true);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  let location = useLocation();

  return (
    <>
      <header
        className={`header ${
          location.pathname === "/" ? "header_color_pink" : ""
        }`}
      >
        <Link to="/" className="header__logo" />
        <nav className="header__menu header__menu_type_authorized">
          <Link
            to={`${location.pathname === "/movies" ? "" : "/movies"}`}
            className={`header__menu-item header__menu-item_type_authorized ${
              location.pathname === "/movies"
                ? "header__menu-item_isactive"
                : ""
            }`}
          >
            Фильмы
          </Link>
          <Link
            to={`${
              location.pathname === "/saved-movies" ? "" : "/saved-movies"
            }`}
            className={`header__menu-item header__menu-item_type_authorized ${
              location.pathname === "/saved-movies"
                ? "header__menu-item_isactive"
                : ""
            }`}
          >
            Сохранённые фильмы
          </Link>
        </nav>
        <Link
          to={`${location.pathname === "/profile" ? "" : "/profile"}`}
          className="header__auth-container"
        >
          <p className="header__auth-text">Аккаунт</p>
          <button
            className={`header__menu-icon ${
              location.pathname === "/" ? "header__menu-icon_color_pink" : ""
            }`}
            type="button"
          ></button>
        </Link>
        <button
          className="header__button-burger"
          type="button"
          onClick={handleBurgerMenuClick}
        />
      </header>
      <Navigation isOpen={isNavigatonOpen} onClose={closeNavigation} />
    </>
  );
}

export default HeaderAuthorized;
