import React from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";

function Movies(props) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    moviesApi
      .getMovies()
      .then((data) => setMovies(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="movies">
      <Header loggedIn ={props.loggedIn}/>
      <SearchBar />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
      <Footer />
    </main>
  );
}

export default Movies;
