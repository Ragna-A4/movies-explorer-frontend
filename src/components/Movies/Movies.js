import React from "react";

import "./Movies.css"
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Movies;
