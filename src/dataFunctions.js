export const filterGenders = (data, filterBy, value) => {
  const filter = data.filter((movie) => movie.facts[filterBy].includes(value));
  return filter;
};

export const sortFilms = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return movieA.localeCompare(movieB);
    } else {
      return movieB.localeCompare(movieA);
    }
  });
  return data;
};
