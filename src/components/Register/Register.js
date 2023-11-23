import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";
import Form from "../Form/Form";

import "./Register.css";

function Register({ isLoggedIn, onRegister, submitError }) {
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
    const { name, email, password } = values;
    e.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        name="register"
        validityStatus={isValid}
        buttonName="Зарегистрироваться"
        onSubmit={handleSubmit}
        onSubmitError={submitError}
        span="Уже зарегистрированы?"
        path="/signin"
        linkText="Войти"
      >
        <div className="form__input-container">
          <label className="form__input-description form__input-description_type_label">
            Имя
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            minLength="2"
            maxLength="30"
            value={values.name}
            onChange={handleChange}
          ></input>
          <span className="form__input-description form__input-description_type_error">
            {errors.name}
          </span>
        </div>
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

export default Register;
