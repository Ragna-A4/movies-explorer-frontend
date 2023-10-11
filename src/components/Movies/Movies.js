import React from "react";

import "./Movies.css"
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchBar />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
