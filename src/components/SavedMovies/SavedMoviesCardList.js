import React from "react";
import SavedMoviesCard from "./SavedMoviesCard";

import "../Movies/MoviesCardList/MoviesCardList.css";

function SavedMoviesCardList(props) {
  return (
    <section className="moviescardlist">
      {props.movies.length === 0 ? (
        <p className="moviescardlist__no-result"> Ничего не найдено </p>
      ) : (
        <div className="moviescardlist__container">
          {props.movies.map((movie) => (
            <SavedMoviesCard
              key={movie._id}
              movie={movie}
              onMovieDelete={props.onMovieDelete}
            />
          ))}
        </div>
      )}
      <div className="moviescardlist__button-container" />
    </section>
  );
}

export default SavedMoviesCardList;
