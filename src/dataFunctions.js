// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
// quiero filtrar la data
// quiero realizar una función para filtrar los datos que necesito

export const filtrerData = (data, filterBy, value) => {
  // Utiliza el método filter() para filtrar los datos
  return data.filter((data) => {
    // Verifica si el campo filterBy existe en el objeto de datos
    if (data.facts[filterBy]) {
      // Si existe, compara el valor del campo con el valor deseado
      return data.facts[filterBy] === value;
    }
    // Si el campo filterBy no existe, devuelve false para excluir este dato del resultado
    return false;
  });
};

// Función para ordenar los datos

function sortData(data, sortBy, sortOrder) {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
      if (sortOrder === 'asc') {
          return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
      }
  });
  return sortedData;
}






