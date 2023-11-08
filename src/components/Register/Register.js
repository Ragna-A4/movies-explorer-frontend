import React from "react";
import { useNavigate } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import Form from "../Form/Form";
import * as auth from "../../utils/Auth";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const currentUser = React.useContext(currentUserContext);

  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    const { name, email, password } = values;
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
        validityStatus={isValid}
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
