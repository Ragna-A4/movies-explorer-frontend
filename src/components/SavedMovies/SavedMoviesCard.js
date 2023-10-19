import React from "react";

import "../Movies/MoviesCard/MoviesCard.css";

function SavedMoviesCard({ image, name, duration, owner }) {
  return (
    <div className="moviescard">
      <img className="moviescard__image" alt={name} src={image} />
      <button
        className="moviescard__button moviescard__button_type_todelete"
        type="button"
      />
      <div className="moviescard__container">
        <h2 className="moviescard__title">{name}</h2>
        <p className="moviescard__duration">{duration}</p>
      </div>
    </div>
  );
}

export default SavedMoviesCard;
