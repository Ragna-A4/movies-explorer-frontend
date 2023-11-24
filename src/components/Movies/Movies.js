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
  const [isActiveBar, setIsActiveBar] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const previuosResult = JSON.parse(localStorage.getItem("SearchResult"));
    console.log(previuosResult);
    if (!previuosResult) {
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem("fullMoviesList", JSON.stringify(data));
        })
        .finally(() => setIsLoading(false));
    } else {
      setMovies(previuosResult);
      setSearchQuery(localStorage.getItem("SearchRequest"));
      setIsActiveBar(localStorage.getItem("ShortMoviesStatus"));
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const currentShortMoviesStatus = localStorage.getItem("ShortMoviesStatus");
    const currentSearchResult = JSON.parse(
      localStorage.getItem("SearchResult")
    );
    const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
    if (
      isActiveBar === currentShortMoviesStatus ||
      currentShortMoviesStatus === null
    ) {
      return;
    } else if (isActiveBar === true) {
      const newSearchResult = currentSearchResult.filter(
        (item) => item.duration <= 60
      );
      localStorage.setItem("ShortMoviesStatus", isActiveBar);
      localStorage.setItem("SearchResult", JSON.stringify(newSearchResult));
      setMovies(newSearchResult);
    } else {
      const newSearchResult = fullMoviesList.filter(
        (item) =>
          item.nameRU
            .toLowerCase()
            .trim()
            .includes(searchQuery.toLowerCase().trim()) ||
          item.nameEN
            .toLowerCase()
            .trim()
            .includes(searchQuery.toLowerCase().trim())
      );
      localStorage.setItem("ShortMoviesStatus", isActiveBar);
      localStorage.setItem("SearchResult", JSON.stringify(newSearchResult));
      setMovies(newSearchResult);
    }
    // eslint-disable-next-line
  }, [isActiveBar]);

  function handleChange(e) {
    const target = e.target;
    setSearchQuery(target.value);
    setSearchError(target.validationMessage);
  }

  function handleClick() {
    setIsActiveBar(!isActiveBar);
  }

  function handleSubmit(e) {
    const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
    e.preventDefault();
    if (isActiveBar === true) {
      const searchResult = fullMoviesList
        .filter((data) => data.duration <= 60)
        .filter(
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
      localStorage.setItem("SearchResult", JSON.stringify(searchResult));
      localStorage.setItem("SearchRequest", searchQuery);
      localStorage.setItem("ShortMoviesStatus", isActiveBar);
    } else {
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
      localStorage.setItem("SearchResult", JSON.stringify(searchResult));
      localStorage.setItem("SearchRequest", searchQuery);
      localStorage.setItem("ShortMoviesStatus", isActiveBar);
    }
  }

  return (
    <main className="movies">
      <Header loggedIn={props.loggedIn} />
      <SearchBar
        placeholder="Фильм"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onClick={handleClick}
        isActiveBar={isActiveBar}
        value={searchQuery}
        error={searchError}
      />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
      <Footer />
    </main>
  );
}

export default Movies;
