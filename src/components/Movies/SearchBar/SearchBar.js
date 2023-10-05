import React from "react";

import "./SearchBar.css";
import searchicon from "../../../images/icon_search.svg";

function SearchBar() {
  return (
    <section className="searchbar">
      <div className="searchbar__container">
        <img className="searchbar__icon" alt="лупа" src={searchicon} />
        <input
          className="searchbar__input"
          placeholder="Фильм"
          type="search"
          required=""
        ></input>
        <button className="searchbar__button" type="button">
          Найти
        </button>
        <div className="searchbar__slidebar searchbar__slidebar_location_inside">
          <button className="searchbar__slidebar-icon searchbar__slidebar-icon_switched_on" type="button" />
          <span className="searchbar__slidebar-text">Короткометражки</span>
        </div>
      </div>
      <div className="searchbar__slidebar searchbar__slidebar_location_outside">
          <button className="searchbar__slidebar-icon searchbar__slidebar-icon_switched_on" type="button" />
          <span className="searchbar__slidebar-text">Короткометражки</span>
        </div>
    </section>
  );
}

export default SearchBar;
