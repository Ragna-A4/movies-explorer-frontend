import React from "react";
import Form from "../Form/Form";

import "./Login.css";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        onSubmit={handleSubmit}
        span="Ещё не зарегистрированы?"
        path="/signup"
        linkText="Регистрация"
      >
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
      </Form>
    </main>
  );
}

export default Login;
