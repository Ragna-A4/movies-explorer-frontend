class MoviesApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResult(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка - ${res.status}`);
  }

  getMovies() {
    return fetch(`${this.baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export { moviesApi };
