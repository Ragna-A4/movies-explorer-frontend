import React from "react";

import selfy from "../../../images/student.jpeg";
import arrow from "../../../images/icon_arrow.svg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe__title-container">
        <h2 className="aboutMe__title">Студент</h2>
      </div>
      <div className="aboutMe__container">
        <div className="aboutMe__description">
          <h2 className="aboutMe__name">Александра</h2>
          <p className="aboutMe__job">Веб-разработчик, 37 лет</p>
          <article className="aboutMe__text">
            Живу в Москве с мужем и лапочкой дочкой.
            <br />
            Год назад заинтересовалась веб-разработкой и записалась на курс
            Яндекс.Практикума. Для закрепления навыков после обучения хочу
            присоединиться к большой команде с наставниками и практикой обмена
            опытом. Интересны стажировки или позиция джуна. <br />
            Как показал мне мой 15-летний опыт в аналитике, сфера деятельности
            не так важна. Да, у каждой отрасли есть свои нюансы, но любой
            продукт или услуга нацелены на человека и его потребности. Поэтому
            хочется заниматься классными проектами для людей.
          </article>
          <a
            className="aboutMe__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ragna-A4"
          >
            Github
          </a>
        </div>
        <img className="aboutMe__selfy" alt="мое_фото" src={selfy} />
      </div>
      <div className="aboutMe__portfolio">
        <h2 className="aboutMe__portfolio-title">Портфолио</h2>
        <ul className="aboutMe__projects">
          <li className="aboutMe__project">
            <a
              className="aboutMe__project-name"
              target="_blank"
              rel="noreferrer"
              href="https://ragna-a4.github.io/how-to-learn/"
            >
              Статичный сайт
            </a>
            <img
              className="aboutMe__project-icon"
              alt="стрелка_статичный_сайт"
              src={arrow}
            />
          </li>
          <li className="aboutMe__project">
            <a
              className="aboutMe__project-name"
              target="_blank"
              rel="noreferrer"
              href="https://ragna-a4.github.io/russian-travel/"
            >
              Адаптивный сайт
            </a>
            <img
              className="aboutMe__project-icon"
              alt="стрелка_адаптивный_сайт"
              src={arrow}
            />
          </li>
          <li className="aboutMe__project">
            <a
              className="aboutMe__project-name"
              target="_blank"
              rel="noreferrer"
              href="https://ragna-a4.github.io/mesto/"
            >
              Одностраничное приложение
            </a>
            <img
              className="aboutMe__project-icon"
              alt="стрелка_одностраничное_приложение"
              src={arrow}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
