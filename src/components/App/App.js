import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrenUserContext";

import "./App.css";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import * as auth from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(`Err: ${err}`);
      });
  }

  const checkToken = () => {
    mainApi
      .getProfile()
      .then((data) => {
        if (!data) {
          return;
        }
        setCurrentUser(data);
        setLoggedIn(true);
        navigate(location.pathname);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(`Err: ${err}`);
      });
  };

  React.useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    mainApi
      .getProfile()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Err: ${err}`));
  }, [isLoggedIn]);

  function signout() {
    auth
    .signout()
    .then(res => {
      if(res) {
        setLoggedIn(false);
        setCurrentUser({});
        navigate("/signin", {replace: true});
      }
    })
    .catch((err) => console.log(`Err: ${err}`));
  }


  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  userData={currentUser}
                  signOut={signout}
                />
              }
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
