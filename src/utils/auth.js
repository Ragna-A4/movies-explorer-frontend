export const baseUrl = "https://api.movies.av4.nomoredomainsicu.ru"

function checkResult(res) {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка - ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResult(res));
};

export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResult(res));
};

export const signout = () => {
  return fetch(`${baseUrl}/signout`, {
    method: "POST",
    credentials: 'include',
  }).then((res) => checkResult(res));
};

export const getContent = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then((res) => checkResult(res));
};