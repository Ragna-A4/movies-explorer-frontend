import React from "react";

import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__title-container">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__block">
        <article className="techs__subtitle">7 технологий</article>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__element">HTML</li>
        <li className="techs__element">CSS</li>
        <li className="techs__element">JS</li>
        <li className="techs__element">React</li>
        <li className="techs__element">Git</li>
        <li className="techs__element">Express.js</li>
        <li className="techs__element">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
