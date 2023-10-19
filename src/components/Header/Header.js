import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Header.css";

import Navigation from "../Navigation/Navigation";

function Header() {

    const [isNavigatonOpen, setIsNavigationOpen] = React.useState(false);
  
    function handleBurgerMenuClick() {
      setIsNavigationOpen(true);
    }
  
    function closeNavigation() {
      setIsNavigationOpen(false);
    }

  let { pathName } = useLocation;
  return (
    <>
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
      <Link
        to={`${pathName === "/profile" ? "" : "/profile"}`}
        className="header__auth-container"
      >
        <p className="header__auth-text">Аккаунт</p>
        <button className="header__menu-icon" type="button"></button>
      </Link>
      <button className="header__button-burger" type="button" onClick={handleBurgerMenuClick}/>
    </header>
    <Navigation isOpen={isNavigatonOpen} onClose={closeNavigation} />
    </>
  );
}

export default Header;
