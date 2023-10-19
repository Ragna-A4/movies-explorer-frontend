import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";
import { initialData } from "../../../utils/data";

function MoviesCardList() {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {initialData.map((card) => (
          <MoviesCard
            key={card.movieId}
            image={card.image}
            name={card.name}
            duration={card.duration}
            owner={card.owner}
          />
        ))}
      </div>
      <button className="moviescardlist__button" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
