import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useWidth, useMoviesCounter } from "../../../utils/MoviesCounter";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  const width = useWidth();
  const { moviesCounter, addMovies } = useMoviesCounter(width);

  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {props.movies.slice(0, moviesCounter).map(({ id, ...props }) => (
          <MoviesCard key={id} {...props} />
        ))}
      </div>
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
