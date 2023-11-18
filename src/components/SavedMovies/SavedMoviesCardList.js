import React from "react";
import SavedMoviesCard from "./SavedMoviesCard";

import "../Movies/MoviesCardList/MoviesCardList.css";
import { initialData } from "../../utils/data";

function SavedMoviesCardList() {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__container">
        {initialData.map((card) => {
          if (card.owner === "me") {
            return (
              <SavedMoviesCard
                key={card.movieId}
                image={card.image}
                name={card.name}
                duration={card.duration}
                owner={card.owner}
              />
            );
          }
        })}
      </div>
      <div className="moviescardlist__button-container" />
    </section>
  );
}

export default SavedMoviesCardList;
