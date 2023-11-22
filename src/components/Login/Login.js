import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";
import Form from "../Form/Form";

import "./Login.css";

function Login({ isLoggedIn, onLogin, submitError }) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  React.useEffect(() => {
    resetForm();
    // eslint-disable-next-line
  }, []);

  function handleSubmit(e) {
    const { email, password } = values;
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        name="login"
        validityStatus={isValid}
        buttonName="Войти"
        onSubmit={handleSubmit}
        onSubmitError={submitError}
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
            id="email"
            autoComplete="email"
            required
            minLength="2"
            maxLength="30"
            value={values.email}
            onChange={handleChange}
          ></input>
          <span className="form__input-description form__input-description_type_error">
            {errors.email}
          </span>
        </div>
        <div className="form__input-container">
          <label className="form__input-description form__input-description_type_label">
            Пароль
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            required
            minLength="8"
            maxLength="20"
            value={values.password}
            onChange={handleChange}
          ></input>
          <span className="form__input-description form__input-description_type_error">
            {errors.password}
          </span>
        </div>
      </Form>
    </main>
  );
}

export default Login;
