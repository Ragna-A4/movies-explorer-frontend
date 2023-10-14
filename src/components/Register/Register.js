import React from "react";
import Form from "../Form/Form";

function Register() {
  return (
    <>
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        span="Уже зарегистрированы?"
        path="/signin"
        linkText="Войти"
      />
    </>
  );
}

export default Register;
