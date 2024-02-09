// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterGenders = (data, filterBy, value) => {

  const filter = data.filter(movie => movie.facts[filterBy].includes(value));
  return filter; 
};

export const filterBy = (data, sortBy, value) => {
  return data.filter((item) => item[sortBy] === value);
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

// export const filterByGenre = (data, genre)=> {
//   if (genre === "all") {
//     return data;
//   } else {
//     return data.filter(elemento => elemento.facts.genders.includes(genre));
//   }
// };
