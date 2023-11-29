import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { SearchRequest } from "../../utils/SearchRequest";
//import { currentUserContext } from "../../contexts/CurrentUserContext";

function Movies(props) {
  // const currentUser = React.useContext(currentUserContext);
  // поисковый запрос
  const [searchQuery, setSearchQuery] = React.useState(
    localStorage.getItem("SearchRequest") || ""
  );
  // ошибка, связанная со вводом поискового запроса
  const [searchError, setSearchError] = React.useState("");
  // фильтр короткометражек
  const [moviesToggle, setMoviesToggle] = React.useState(false);
  // фильмы со стороннего апи
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("FullMoviesList")) || []
  );
  // фильмы, сохраненные пользователем
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem("SavedMoviesList")) || []
  );
  // статус загрузки
  const [isLoading, setIsLoading] = React.useState(false);
  // текстовое сообщение об отсутствии фильмов по результатам поиска
  const [notFoundMovies, setIsNotFoundMovies] = React.useState("");

  // при отрисовке страницы сохраняем в LS фильмы со стороннего апи, в переменную сохраненные фильмы
  React.useEffect(() => {
    mainApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("SavedMoviesList", JSON.stringify(data));
      })
      .catch((err) => console.log(`Err: ${err}`));
  }, []);

  // при отрисовке страницы выводим последний запрос, фильтр и список фильмов или ничего
  React.useEffect(() => {
    const previousRequest = localStorage.getItem("SearchRequest");
    const previousBarStatus = localStorage.getItem("ShortMoviesStatus");
    const previousResult = JSON.parse(localStorage.getItem("SearchResult"));

    if (previousRequest) {
      setSearchQuery(previousRequest);
    }

    if (previousBarStatus === true) {
      setMoviesToggle(true);
    } else if (previousBarStatus === false) {
      setMoviesToggle(false);
    }

    if (previousResult) {
      setMovies(previousResult);
    }
  }, []);

  // отслеживаем ввод в поисковой строке
  function handleChange(e) {
    const target = e.target;
    setSearchQuery(target.value);
    setSearchError(target.validationMessage);
  }

  // переключатель фильтра короткометражек
  function handleClick() {
    const newBarStatus = !moviesToggle;

    if (searchQuery === "") {
      return;
    } else {
      const fullMoviesList = JSON.parse(localStorage.getItem("FullMoviesList"));
      const filteredResult = SearchRequest(
        fullMoviesList,
        searchQuery,
        newBarStatus
      );
      setMovies(filteredResult);
      setMoviesToggle(newBarStatus);
      localStorage.setItem("SearchResult", JSON.stringify(filteredResult));
      localStorage.setItem("ShortMoviesStatus", newBarStatus);
    }
  }

  function handleSearchRequest() {
    const fullMoviesList = JSON.parse(localStorage.getItem("FullMoviesList"));

    if (fullMoviesList) {
      const searchResult = SearchRequest(
        fullMoviesList,
        searchQuery,
        moviesToggle
      );

      if (searchResult.length < 1) {
        setIsNotFoundMovies("Ничего не найдено");
      }

      setMovies(searchResult);

      localStorage.setItem("SearchResult", JSON.stringify(searchResult));
      localStorage.setItem("SearchRequest", searchQuery);
      localStorage.setItem("ShortMoviesStatus", moviesToggle);

      return;
    }
  }

  // активируем поиск по данным из поисковой строки+фильтра, сохраняем данные в LS
  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery === "") {
      setSearchError("Нужно ввести ключевое слово");
      return;
    }

    //handleSearchRequest(searchQuery);
    const fullMoviesList = JSON.parse(localStorage.getItem("FullMoviesList"));

    if (fullMoviesList) {
      const searchResult = SearchRequest(
        fullMoviesList,
        searchQuery,
        moviesToggle
      );

      if (searchResult.length < 1) {
        setIsNotFoundMovies("Ничего не найдено");
      }

      setMovies(searchResult);

      localStorage.setItem("SearchResult", JSON.stringify(searchResult));
      localStorage.setItem("SearchRequest", searchQuery);
      localStorage.setItem("ShortMoviesStatus", moviesToggle);

      return;
    }
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        localStorage.setItem("FullMoviesList", JSON.stringify(data));
        handleSearchRequest(searchQuery);
        setIsLoading(false);
      })
      .catch((err) => console.log(`Err: ${err}`));
    
  }

  function handleMovieAdd(movie) {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        localStorage.setItem(
          "SavedMoviesList",
          JSON.stringify([data, ...savedMovies])
        );
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const fullSavedMoviesList = JSON.parse(
          localStorage.getItem("SavedMoviesList")
        );
        const newSavedMovies = fullSavedMoviesList.filter(
          (c) => c._id !== movie._id
        );
        setSavedMovies(newSavedMovies);
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
        isActiveBar={moviesToggle}
        value={searchQuery}
        error={searchError}
      />
      <MoviesCardList
        searchResultMessage={notFoundMovies}
        movies={movies}
        onMovieAdd={handleMovieAdd}
        onMovieDelete={handleMovieDelete}
        isLoading={isLoading}
      />
      <Footer />
    </main>
  );
}

export default Movies;
