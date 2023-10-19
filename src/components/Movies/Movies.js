import React from "react";

import "./Movies.css"
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
// import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <main className="movies">
      <Header />
      <SearchBar />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

export default Movies;
