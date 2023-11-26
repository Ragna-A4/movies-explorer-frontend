import React from "react";

import "../Movies/Movies.css";
import Header from "../Header/Header";
import SearchBar from "../Movies/SearchBar/SearchBar";
import Preloader from "../Movies/Preloader/Preloader";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Footer from "../Footer/Footer";
import { mainApi } from "../../utils/MainApi";
import { SearchRequest } from "../../utils/SearchRequest";

function SavedMovies(props) {
  // поисковый запрос
  const [searchQuery, setSearchQuery] = React.useState("");
  // ошибка, связанная со вводом поискового запроса
  const [searchError, setSearchError] = React.useState("");
  // фильтр короткометражек
  const [isActiveBar, setIsActiveBar] = React.useState(false);
  // фильмы, сохраненные пользователем
  const [savedMovies, setSavedMovies] = React.useState([]);
  // статус загрузки
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    mainApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("SavedMoviesList", JSON.stringify(data));
        setSavedMovies(data);
      })
      .catch((err) => console.log(`Err: ${err}`));
  }, []);

  // отслеживаем ввод в поисковой строке
  function handleChange(e) {
    const target = e.target;
    setSearchQuery(target.value);
    setSearchError(target.validationMessage);
  }

  // переключатель фильтра короткометражек
  function handleClick() {
    const currentSavedMoviesList = JSON.parse(
      localStorage.getItem("SavedMoviesList")
    );
    setIsActiveBar(!isActiveBar);
    const filteredResult = SearchRequest(
      currentSavedMoviesList,
      searchQuery,
      !isActiveBar
    );
    setSavedMovies(filteredResult);
  }

  //React.useEffect(() => {
  //  setSavedMovies(SearchRequest(SavedMovies, searchQuery, isActiveBar));
  //}, [isActiveBar]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const fullSavedMoviesList = JSON.parse(
      localStorage.getItem("SavedMoviesList")
    );
    const searchResult = SearchRequest(
      fullSavedMoviesList,
      searchQuery,
      isActiveBar
    );
    setSavedMovies(searchResult);
    setIsLoading(false);
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newSavedMovies = (state) =>
          state.filter((c) => c._id !== movie._id);
        setSavedMovies(newSavedMovies);
        localStorage.setItem("SavedMoviesList", JSON.stringify(savedMovies));
      })
      .catch((err) => console.log(`Err: ${err}`));
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
      {isLoading ? (
        <Preloader />
      ) : (
        <SavedMoviesCardList
          movies={savedMovies}
          onMovieDelete={handleMovieDelete}
        />
      )}
      <Footer />
    </main>
  );
}

export default SavedMovies;
