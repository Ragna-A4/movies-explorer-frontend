import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { currentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import * as auth from "../../utils/Auth";
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
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          setCurrentUser({});
          navigate("/signin", { replace: true });
        }
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

  function handleUpdateUser(name, email) {
    mainApi
      .patchProfile(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  loggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  loggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  loggedIn={isLoggedIn}
                  onUpdate={handleUpdateUser}
                  signOut={signout}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/signup"
              element={<Register isLoggedIn={isLoggedIn} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
