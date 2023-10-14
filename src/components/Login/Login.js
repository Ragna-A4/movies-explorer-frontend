import React from "react";
import Form from "../Form/Form";

function Login() {
  return (
    <>
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        span="Ещё не зарегистрированы?"
        path="/signup"
        linkText="Регистрация"
      />
    </>
  );
}

export default Login;
