import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {props.movies.map(({ id, ...props }) => (
          <MoviesCard key={id} {...props} />
        ))}
      </div>
      <button className="moviescardlist__button" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
