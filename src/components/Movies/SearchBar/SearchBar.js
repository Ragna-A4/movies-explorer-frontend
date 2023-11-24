import React from "react";

import "./SearchBar.css";
import searchicon from "../../../images/icon_search.svg";
import SlideBar from "./SlideBar/SlideBar";

function SearchBar(props) {
  return (
    <section className="searchbar">
      <form className="searchbar__container" onSubmit={props.handleSubmit}>
        <img className="searchbar__icon" alt="лупа" src={searchicon} />
        <input
          className="searchbar__input"
          name="search"
          id="search"
          placeholder={props.placeholder}
          type="text"
          required
          minLength="2"
          onChange={props.handleChange}
          value={props.value}
        ></input>
        <button className="searchbar__button" type="submit">
          Найти
        </button>
        <div className="searchbar__slidebar searchbar__slidebar_location_inside">
          <SlideBar onClick={props.onClick} isActiveBar={props.isActiveBar} />
        </div>
      </form>
      <span className="searchbar__input-error">{props.error}</span>
      <div className="searchbar__slidebar searchbar__slidebar_location_outside">
        <SlideBar onClick={props.onClick} isActiveBar={props.isActiveBar} />
      </div>
    </section>
  );
}

export default SearchBar;
