import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useWidth, useMoviesCounter } from "../../../utils/MoviesCounter";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  const width = useWidth();
  const { moviesCounter, addMovies } = useMoviesCounter(width);

  function isSaved(movie) {
    const checkIsSaved = JSON.parse(localStorage.getItem("SavedMoviesList"));
    if (!checkIsSaved) {
      return;
    }
    return checkIsSaved.some((item) => {
      if (item.movieId === movie.id) {
        movie._id = item._id;
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <section className="moviescardlist">
      {props.movies.length === 0 ? (
        <p className="moviescardlist__no-result">{props.searchResultMessage}</p>
      ) : (
        <div className="moviescardlist__container">
          {props.movies.slice(0, moviesCounter).map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onMovieAdd={props.onMovieAdd}
              onMovieDelete={props.onMovieDelete}
              isSaved={isSaved(movie)}
            />
          ))}
        </div>
      )}
      <button
        className={
          moviesCounter < props.movies.length
            ? "moviescardlist__button"
            : "moviescardlist__button-container"
        }
        type="button"
        onClick={addMovies}
      >
        {moviesCounter < props.movies.length ? "Ещё" : ""}
      </button>
    </section>
  );
}

export default MoviesCardList;
