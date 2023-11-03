import React from "react";

import { Link } from "react-router-dom";

import "./Profile.css";
import Header from "../Header/Header";

function Profile(props) {
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">Привет, {props.userData.name}</h1>
        <form className="profile__form">
          <div className="profile__input-container">
            <label className="profile__input-title">Имя</label>
            <input className="profile__input"></input>
          </div>
          <div className="profile__input-container">
            <label className="profile__input-title">E-mail</label>
            <input className="profile__input"></input>
          </div>
          <button className="profile__button profile__button_type_save" type="submit">Редактировать</button>
        </form>
        <Link to="/signin" className="profile__button profile__button_type_logout" onClick={props.signOut}>Выйти из аккаунта</Link>
      </main>
    </>
  );
}

export default Profile;
