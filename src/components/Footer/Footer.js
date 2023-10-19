import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">© 2023. Саша Чернова</p>
        <div className="footer__links-container">
          <a
            className="footer__link"
            target="_blank"
            rel='noreferrer'
            href="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            target="_blank"
            rel='noreferrer'
            href="https://github.com/"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
