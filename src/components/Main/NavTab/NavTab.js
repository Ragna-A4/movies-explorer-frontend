import React from "react";

import "./NavTab.css";

function NavTab() {
  return (
    <section className="navTab">
      <nav className="navTab__links-container">
        <a className="navTab__link" href="#aboutProject">
          О проекте
        </a>
        <a className="navTab__link" href="#techs">
          Технологии
        </a>
        <a className="navTab__link" href="#aboutMe">
          Студент
        </a>
      </nav>
    </section>
  );
}

export default NavTab;
