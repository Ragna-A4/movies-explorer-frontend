import React from "react";

import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";
import "./Profile.css";
import Header from "../Header/Header";
import { currentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdate, signOut }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const currentUser = React.useContext(currentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(values);
  }

  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <div className="profile__input-section">
            <div className="profile__input-container">
              <label className="profile__input-title">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                minLength="2"
                maxLength="30"
                value={values.name || ""}
                onChange={handleChange}
              ></input>
            </div>
            <span className="profile__input-error">{errors.name}</span>
          </div>
          <div className="profile__input-section">
            <div className="profile__input-container">
              <label className="profile__input-title">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                minLength="2"
                maxLength="30"
                value={values.email || ""}
                onChange={handleChange}
              ></input>
            </div>
            <span className="profile__input-error">{errors.email}</span>
          </div>
          <button
            className={`profile__button profile__button_type_save ${
              isValid !== true ? "profile__button_type_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Редактировать
          </button>
        </form>
        <Link
          to="/signin"
          className="profile__button profile__button_type_logout"
          onClick={signOut}
        >
          Выйти из аккаунта
        </Link>
      </main>
    </>
  );
}

export default Profile;
