import React from "react";
import Form from "../Form/Form";

import "./Register.css";

function Register() {
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        span="Уже зарегистрированы?"
        path="/signin"
        linkText="Войти"
      />
    </main>
  );
}

export default Register;
