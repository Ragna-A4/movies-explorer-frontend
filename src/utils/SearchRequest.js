export function SearchRequest(data, query, status) {
  if (status === true) {
    return data
      .filter((item) => item.duration <= 40)
      .filter(
        (item) =>
          item.nameRU
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim()) ||
          item.nameEN
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim())
      );
  } else {
    return data
      .filter(
        (item) =>
          item.nameRU
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim()) ||
          item.nameEN
            .toLowerCase()
            .trim()
            .includes(query.toLowerCase().trim())
      );
  }
}
