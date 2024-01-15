import React from "react";

import "../Movies/MoviesCard/MoviesCard.css";

function SavedMoviesCard({ movie, onMovieDelete }) {
  function formatDuration(time) {
    if (time < 60) {
      return `${time}м`;
    } else {
      return `${Math.floor(time / 60)}ч ${time % 60}м`;
    }
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }
  return (
    <div className="moviescard">
      <a
        className="moviescard__trailerlink-redirect"
        target="_blank"
        rel="noreferrer"
        href={movie.trailerLink}
      >
        <img
          className="moviescard__image"
          alt={movie.nameRU}
          src={movie.image}
        />
      </a>
      <button
        className="moviescard__button moviescard__button_type_todelete"
        type="button"
        onClick={handleDeleteClick}
      />
      <div className="moviescard__container">
        <h2 className="moviescard__title">{movie.nameRU}</h2>
        <p className="moviescard__duration">{formatDuration(movie.duration)}</p>
      </div>
    </div>
  );
}

export default SavedMoviesCard;
