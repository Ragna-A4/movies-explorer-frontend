import React from "react";

import "./MoviesCard.css";

function MoviesCard({ movie, onMovieAdd, onMovieDelete, isSaved }) {
  function formatDuration(time) {
    if (time < 60) {
      return `${time}м`;
    } else {
      return `${Math.floor(time / 60)}ч ${time % 60}м`;
    }
  }

  function handleAddClick() {
    onMovieAdd(movie);
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
          src={`https://api.nomoreparties.co/${movie.image.url}`}
        />
      </a>
      {isSaved === true && (
        <button
          className="moviescard__button moviescard__button_type_downloaded"
          type="button"
          onClick={handleDeleteClick}
        ></button>
      )}
      {isSaved === false && (
        <button
          className="moviescard__button moviescard__button_type_tosave"
          type="button"
          onClick={handleAddClick}
        ></button>
      )}

      <div className="moviescard__container">
        <h2 className="moviescard__title">{movie.nameRU}</h2>
        <p className="moviescard__duration">{formatDuration(movie.duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
