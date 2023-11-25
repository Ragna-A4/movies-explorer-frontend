import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { SearchRequest } from "../../utils/SearchRequest";
import { currentUserContext} from "../../contexts/CurrentUserContext";

function Movies(props) {
  const currentUser = React.useContext(currentUserContext);
  // поисковый запрос
  const [searchQuery, setSearchQuery] = React.useState("");
  // ошибка, связанная со вводом поискового запроса
  const [searchError, setSearchError] = React.useState("");
  // фильтр короткометражек
  const [isActiveBar, setIsActiveBar] = React.useState(false);
  // фильмы со стороннего апи
  const [movies, setMovies] = React.useState([]);
  // фильмы, сохраненные пользователем
  const [savedMovies, setSavedMovies] = React.useState([]);
  // статус загрузки
  const [isLoading, setIsLoading] = React.useState(false);

  // при отрисовке страницы сохраняем в LS фильмы со стороннего апи, в переменную сохраненные фильмы
  React.useEffect(() => {
    Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
      .then((data) => {
        localStorage.setItem("fullMoviesList", JSON.stringify(data[0]));
        setSavedMovies(data[1]);
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
    if (previousBarStatus) {
      setIsActiveBar(previousBarStatus);
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
    setIsActiveBar(!isActiveBar);
  }

  React.useEffect(() => {
    if (searchQuery === "") {
      return;
    } else {
      const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
      const filteredResult = SearchRequest(
        fullMoviesList,
        searchQuery,
        isActiveBar
      );
      setMovies(filteredResult);
      localStorage.setItem("SearchResult", JSON.stringify(filteredResult));
      localStorage.setItem("ShortMoviesStatus", isActiveBar);
    }
  }, [isActiveBar]);

  // активируем поиск по данным из поисковой строки+фильтра, сохраняем данные в LS
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const fullMoviesList = JSON.parse(localStorage.getItem("fullMoviesList"));
    const searchResult = SearchRequest(
      fullMoviesList,
      searchQuery,
      isActiveBar
    );
    setMovies(searchResult);
    setIsLoading(false);
    localStorage.setItem("SearchResult", JSON.stringify(searchResult));
    localStorage.setItem("SearchRequest", searchQuery);
    localStorage.setItem("ShortMoviesStatus", isActiveBar);
  }

  function handleMovieAdd(movie) {
    console.log(movie);
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...movies]);
        console.log(savedMovies);
      })
      .catch((err) => console.log(`Err: ${err}`));
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
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
        <MoviesCardList
          movies={movies}
          isSaved={savedMovies.owner === currentUser._id ? true : false}
          onMovieAdd={handleMovieAdd}
          onMovieDelete={handleMovieDelete}
        />
      )}
      <Footer />
    </main>
  );
}

export default Movies;
