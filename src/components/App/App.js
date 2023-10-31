import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
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
              <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
