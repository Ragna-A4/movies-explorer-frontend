import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <div className="aboutProject__title-container">
        <h2 className="aboutProject__title">О проекте</h2>
      </div>
      <div className="aboutProject__description">
        <div className="aboutProject__block">
          <article className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </article>
          <p className="aboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__block">
          <article className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </article>
          <p className="aboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__timeline-container">
        <div className="aboutProject__timeline-schale aboutProject__timeline-schale_theme_dark">
          1 неделя
        </div>
        <div className="aboutProject__timeline-schale">4 недели</div>
        <p className="aboutProject__timeline-title">Back-end</p>
        <p className="aboutProject__timeline-title">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
