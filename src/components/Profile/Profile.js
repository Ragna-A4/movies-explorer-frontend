import React from "react";

import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/UseFormWithValidation";
import "./Profile.css";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoToolTip";
import { currentUserContext } from "../../contexts/CurrentUserContext";
import { namePattern, emailPattern } from "../../utils/Patterns";

function Profile({ onUpdate, signOut, loggedIn, isSuccess }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const currentUser = React.useContext(currentUserContext);

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(values);
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
    resetForm(currentUser);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
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
                pattern={namePattern}
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
                pattern={emailPattern}
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
              isValid !== true ||
              (values.name === currentUser.name &&
                values.email === currentUser.email)
                ? "profile__button_type_disabled"
                : ""
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
      <InfoTooltip
        isSuccess={isSuccess}
        successMessage="Данные успешно изменены!"
        errorMessage="Что-то пошло не так! Попробуйте еще раз."
        isOpen={isOpenPopup}
        onClose={closePopup}
      />
    </>
  );
}

export default Profile;
