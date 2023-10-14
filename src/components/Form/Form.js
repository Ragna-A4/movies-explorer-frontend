import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Form.css";

function Form(props) {
  let { pathName } = useLocation();
  return (
    <main className="form">
      <Link to="/" className="form__logo" />
      <h1 className="form__title">{props.title}</h1>
      <form className="form__container">
        <div
          className={`${
            pathName === "/signin"
              ? "form__input-container form__input-container_status_inactive"
              : "form__input-container"
          }`}
        >
          <label className="form__input-description form__input-description_type_label">
            Имя
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="30"
          ></input>
          <span className="form__input-description form__input-description_type_error"></span>
        </div>
        <div className="form__input-container">
          <label className="form__input-description form__input-description_type_label">
            E-mail
          </label>
          <input
            className="form__input"
            type="email"
            name="email"
            required
            minLength="2"
            maxLength="30"
          ></input>
          <span className="form__input-description form__input-description_type_error"></span>
        </div>
        <div className="form__input-container">
          <label className="form__input-description form__input-description_type_label">
            Пароль
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            required
            minLength="8"
            maxLength="20"
          ></input>
          <span className="form__input-description form__input-description_type_error"></span>
        </div>
      </form>
      <button className="form__button" type="submit">
        {props.buttonName}
      </button>
      <p className="form__span">
        {props.span}
        <Link to={props.path} className="form__link">
          {" "}{props.linkText}
        </Link>
      </p>
    </main>
  );
}

export default Form;
