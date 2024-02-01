// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterGenres = () => {
  return "example";
};

export const sortBy = (data, sortBy, sortOrder) => {
  return data.sort((a, b) =>{
  if (sortOrder  === asc) {
  return a[sortBy] > b[sortBy] ? 1 : -1;
 } 
  else 
  return b[sortBy] > a[sortBy] ? 1 : -1;
});
};

export const filterBy = (data, sortBy, value) => {
  return data.filter((item) => item[sortBy] === value);
};

export const
export const sortFilms = (data, sortBy, sortOrder) => {

  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return movieA.localeCompare(movieB);
    }
    else (sortOrder === "desc") 
      return movieB.localeCompare(movieA)
  });
  return data;
};
