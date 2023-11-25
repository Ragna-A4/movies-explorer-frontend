class MainApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResult(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка - ${res.status}`);
  }

  getMovies() {
    return fetch(this.baseUrl + "/movies", {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  addMovie(data) {
    return fetch(this.baseUrl + "/movies", {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        description: data.description,
        country: data.country,
        director: data.director,
        year: data.year,
        duration: data.duration,
        trailerLink: data.trailerLink,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
    }).then((res) => this._checkResult(res));
  }

  deleteMovie(movieId) {
    return fetch(this.baseUrl + `/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  getProfile() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  patchProfile({ name, email }) {
    return fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkResult(res));
  }
}

const mainApi = new MainApi({
  //baseUrl: "https://api.movies.av4.nomoredomainsicu.ru",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export { mainApi };
