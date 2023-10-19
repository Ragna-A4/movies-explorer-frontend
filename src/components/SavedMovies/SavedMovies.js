import React from "react";

import Header from "../Header/Header";
import SearchBar from "../Movies/SearchBar/SearchBar";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <main className="movies">
      <Header />
      <SearchBar />
      <SavedMoviesCardList />
      <Footer />
    </main>
  );
}

export default SavedMovies;
