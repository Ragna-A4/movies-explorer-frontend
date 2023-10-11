import React from "react";

import "./MoviesCard.css";

function MoviesCard({ image, name, duration, owner }) {
  const isOwn = owner === "me";
  const cardButtonClassName = `moviescard__button ${isOwn ?  "moviescard__button_type_downloaded" : "moviescard__button_type_tosave"}`;

  return (
    <div className="moviescard">
      <img className="moviescard__image" alt={name} src={image} />
      <button className={cardButtonClassName} type="button" />
      <div className="moviescard__container">
        <h2 className="moviescard__title">{name}</h2>
        <p className="moviescard__duration">{duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
