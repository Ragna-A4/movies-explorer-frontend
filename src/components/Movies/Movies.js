import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";

function Movies(props) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchError, setSearchError] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    moviesApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("fullMoviesList", JSON.stringify(data));
      })
      .finally(() => setIsLoading(false));
  }, []);

  function handleChange(e) {
    const target = e.target;
    setSearchQuery(target.value);
    setSearchError(target.validationMessage);
  }

  function handleSubmit(e) {
    const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
    e.preventDefault();
    console.log(fullMoviesList);
    const searchResult = fullMoviesList.filter(
      (data) =>
        data.nameRU
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim()) ||
        data.nameEN
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim())
    );
    setMovies(searchResult);
    console.log(movies);
  }

  return (
    <main className="movies">
      <Header loggedIn={props.loggedIn} />
      <SearchBar
        placeholder="Фильм"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={searchQuery}
        error={searchError}
      />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
      <Footer />
    </main>
  );
}

export default Movies;
