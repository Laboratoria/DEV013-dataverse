// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// export const filterGenres = (data) => {
//   return 'example';
// };

export const sortBy = (data, sortBy, sortOrder) => {
  return data.sort((a, b) =>{
  if (sortOrder  === asc) {
  return a[sortBy] > b[sortBy] ? 1 : -1;
 } else {
  return b[sortBy] > a[sortBy] ? 1 : -1:
 }
});
};

export const filterBy = (data, sortBy, value) => {
  return data.filter((item) => item[sortBy] === value);
};

//export const
