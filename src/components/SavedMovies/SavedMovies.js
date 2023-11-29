import React from "react";

import "../Movies/Movies.css";
import Header from "../Header/Header";
import SearchBar from "../Movies/SearchBar/SearchBar";
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
  const [savedMoviesToggle, setSavedMoviesToggle] = React.useState(false);
  // фильмы, сохраненные пользователем
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem("SavedMoviesList")) || []
  );
  // текстовое сообщение об отсутствии фильмов по результатам поиска
  const [notFoundMovies, setIsNotFoundMovies] = React.useState("");

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
    setSavedMoviesToggle(!savedMoviesToggle);
    const filteredResult = SearchRequest(
      currentSavedMoviesList,
      searchQuery,
      !savedMoviesToggle
    );
    setSavedMovies(filteredResult);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery === "") {
      setSearchError("Нужно ввести ключевое слово");
      return;
    }

    const fullSavedMoviesList = JSON.parse(
      localStorage.getItem("SavedMoviesList")
    );
    const searchResult = SearchRequest(
      fullSavedMoviesList,
      searchQuery,
      savedMoviesToggle
    );
    if (searchResult.length < 1) {
      setIsNotFoundMovies("Ничего не найдено");
    }
    setSavedMovies(searchResult);
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const fullSavedMoviesList = JSON.parse(
          localStorage.getItem("SavedMoviesList")
        );
        const filtredSavrdMovieList = savedMovies.filter(
          (c) => c._id !== movie._id
        );
        const newSavedMovies = fullSavedMoviesList.filter(
          (c) => c._id !== movie._id
        );

        setSavedMovies(filtredSavrdMovieList);
        localStorage.setItem("SavedMoviesList", JSON.stringify(newSavedMovies));
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
        isActiveBar={savedMoviesToggle}
        value={searchQuery}
        error={searchError}
      />
      <SavedMoviesCardList
        searchResultMessage={notFoundMovies}
        movies={savedMovies}
        onMovieDelete={handleMovieDelete}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
