import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

function Form({
  title,
  name,
  children,
  buttonName,
  onSubmit,
  span,
  path,
  linkText,
}) {
  return (
    <main className="form">
      <Link to="/" className="form__logo" />
      <h1 className="form__title">{title}</h1>
      <form className="form__container" name={name} onSubmit={onSubmit}>
        {children}
        <button className="form__button" type="submit">
          {buttonName}
        </button>
      </form>
      <p className="form__span">
        {span}
        <Link to={path} className="form__link">
          {" "}
          {linkText}
        </Link>
      </p>
    </main>
  );
}

export default Form;
