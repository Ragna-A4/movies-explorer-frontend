import React from "react";

import "./MoviesCard.css";

function MoviesCard({ image, nameRU, duration, owner }) {
  const isOwn = owner === "me";
  const cardButtonClassName = `moviescard__button ${
    isOwn
      ? "moviescard__button_type_downloaded"
      : "moviescard__button_type_tosave"
  }`;

  function formatDuration(time) {
    if (time < 60) {
      return `${time}м`;
    } else {
      return `${Math.floor(time / 60)}ч ${time % 60}м`;
    }
  }

  return (
    <div className="moviescard">
      <img
        className="moviescard__image"
        alt={nameRU}
        src={`https://api.nomoreparties.co/${image.url}`}
      />
      <button className={cardButtonClassName} type="button" />
      <div className="moviescard__container">
        <h2 className="moviescard__title">{nameRU}</h2>
        <p className="moviescard__duration">{formatDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
