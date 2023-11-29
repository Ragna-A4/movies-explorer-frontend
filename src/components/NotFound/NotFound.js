import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link className="notfound__link" onClick={() => navigate(-2)}>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
