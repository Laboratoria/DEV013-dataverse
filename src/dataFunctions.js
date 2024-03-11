// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
// quiero filtrar la data
// quiero realizar una función para filtrar los datos que necesito

export const filterData = (data, filterBy, value) => {
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

export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    const nombreA = a[sortBy];
    const nombreB = b[sortBy];
    if (sortOrder === 'asc') {
      return nombreA > nombreB ? 1 : -1;
    } else {
      return nombreB < nombreA ? -1 : 1;
    }
  
  });
  return sortedData;
  

};




//export const computeStats = (data) => {
//}



