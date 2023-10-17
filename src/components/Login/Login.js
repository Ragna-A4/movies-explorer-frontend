import React from "react";
import Form from "../Form/Form";

import "./Login.css";

function Login() {
  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        span="Ещё не зарегистрированы?"
        path="/signup"
        linkText="Регистрация"
      />
    </main>
  );
}

export default Login;
