import React from "react";
import Form from "../Form/Form";

import "./Login.css";

function Login({onLogin}) {

  const [formValue, setFormValue] = React.useState({
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
    const { email, password } = formValue;
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        name="login"
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

export default Login;
