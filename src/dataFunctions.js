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

export const computeStats = (data) => {
  const movies = data.flatMap((movie) => movie.facts.genders.split(", "));
  console.log(movies);
  const stats = movies.reduce((acc, genreFil) => {
    genreFil = genreFil.trim();
    acc[genreFil] += 1;
    return acc;
  }, {
    "Acción": 0,
    "Romance": 0,
    "Fantasía": 0,
    "Ciencia Ficción": 0,
    "Terror": 0,
    "Bélico": 0,
    "Suspenso": 0,
    "Infantil": 0,
    "Familia": 0,
    "Comedia": 0,
    "Drama": 0,
    "Aventura": 0,
    "Misterio": 0,
  });
  const statsText = Object.entries(stats).map(([genre, count]) => `${genre}: ${count}`).join(', ');

  return statsText;
};
  
// export const computeStats = (data) => {
//   const movies = data.flatMap((movie) => movie.facts.genders.split(", "));
//   console.log(movies.flat());
//   let stats = {
//     "Romance": 0,
//     "Fantasía": 0,
//     "Ciencia Ficción": 0,
//     "Terror": 0,
//     "Bélico": 0,
//     "Suspenso": 0,
//     "Infantil": 0,
//     "Familia": 0,
//     "Comedia": 0,
//     "Drama": 0,
//     "Aventura": 0,
//   };
//   const factsStats = movies.forEach(genreFil => {
//    stats[genreFil] += 1;
//   })
//   console.log(factsStats);
// };
// export const computeStats = (data) => {
//   const stats = {
//     "Romance": 0,
//     "Fantasía": 0,
//     "Ciencia Ficción": 0,
//     "Terror": 0,
//     "Bélico": 0,
//     "Suspenso": 0,
//     "Infantil": 0,
//     "Familia": 0,
//     "Comedia": 0,
//     "Drama": 0,
//     "Aventura": 0,
//   };

//   data.forEach((movie) => {
//   })
// }
// const stats = data.reduce(
//   (acc, movie) => {
//     if (movie.facts.genders.includes("Romance")) {
//       acc["Romance"] += 1;
//     } else if (movie.facts.genders.includes("Fantasía")) {
//       acc["Fantasía"] += 1;
//     } else if (movie.facts.genders.includes("Ciencia Ficción")) {
//       acc["Ciencia Ficción"] += 1;
//     } else if (movie.facts.genders.includes("Terror")) {
//       acc["Terror"] += 1;
//     } else if (movie.facts.genders.includes("Bélico")) {
//       acc["Bélico"] += 1;
//     } else if (movie.facts.genders.includes("Suspenso")) {
//       acc["Suspenso"] += 1;
//     } else if (movie.facts.genders.includes("Infantil")) {
//       acc["Infantil"] += 1;
//     } else if (movie.facts.genders.includes("Familia")) {
//       acc["Familia"] += 1;
//     } else if (movie.facts.genders.includes("Comedia")) {
//       acc["Comedia"] += 1;
//     } else if (movie.facts.genders.includes("Drama")) {
//       acc["Drama"] += 1;
//     } else if (movie.facts.genders.includes("Aventura")) {
//       acc["Aventura"] += 1;
//     }
//     return acc;
//   },
//   {
//     "Romance": 0,
//     "Fantasía": 0,
//     "Ciencia Ficción": 0,
//     "Terror": 0,
//     "Bélico": 0,
//     "Suspenso": 0,
//     "Infantil": 0,
//     "Familia": 0,
//     "Comedia": 0,
//     "Drama": 0,
//     "Aventura": 0,
//   }
// );
