import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import * as auth from "../../utils/auth";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    const { name, email, password } = formValue;
    e.preventDefault();
    auth
      .register(name, email, password)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(`Err: ${err}`);
      });
  }

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        name="register"
        buttonName="Зарегистрироваться"
        onSubmit={handleSubmit}
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
            value={formValue.name}
            onChange={handleChange}
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
            id="email"
            autoComplete="email"
            required
            minLength="2"
            maxLength="30"
            value={formValue.email}
            onChange={handleChange}
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
            id="password"
            autoComplete="password"
            required
            minLength="8"
            maxLength="20"
            value={formValue.password}
            onChange={handleChange}
          ></input>
          <span className="form__input-description form__input-description_type_error"></span>
        </div>
      </Form>
    </main>
  );
}

export default Register;
