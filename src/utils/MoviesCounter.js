import React from "react";

export function useWidth() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const getWindowWidth = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
  };

  const handleResize = () => {
    setTimeout(getWindowWidth, 1000);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  return windowWidth;
}

export function useMoviesCounter(windowWidth) {
  const [moviesCounter, setMoviesCounter] = React.useState(0);
  const [moviesToAdd, setMoviesToAdd] = React.useState(0);

  function updateMoviesCounter() {
    if (windowWidth >= 1280) {
      setMoviesCounter(12);
      setMoviesToAdd(3);
      return;
    } else if (windowWidth >= 768) {
      setMoviesCounter(8);
      setMoviesToAdd(2);
      return;
    } else {
      setMoviesCounter(5);
      setMoviesToAdd(2);
      return;
    }
  }

  React.useEffect(() => {
    updateMoviesCounter();
    // eslint-disable-next-line
  }, [windowWidth]);

  function addMovies() {
    setMoviesCounter(moviesCounter + moviesToAdd);
  }

  return { moviesCounter, updateMoviesCounter, addMovies };
}
