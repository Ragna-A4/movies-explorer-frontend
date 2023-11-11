import React from "react";

import Header from "../Header/Header";
import SearchBar from "../Movies/SearchBar/SearchBar";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <main className="movies">
      <Header loggedIn={props.loggedIn}/>
      <SearchBar />
      <SavedMoviesCardList />
      <Footer />
    </main>
  );
}

export default SavedMovies;
