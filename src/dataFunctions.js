// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función filtro
import dataset from './data/dataset.js';


export const filterData = (data, filterBy, value) => {
  return data.filter((data) => {
    //object es el parametro para la función filter.Si se elige un filterBy "seaOfOrigin", "originCrew" o "status" la función retorna los elementos que dentro del filterBy sean iguales que el valor seleccionado.
    if (data.facts[filterBy]) {
      return data.facts[filterBy] === value;
    }
    //si el elemento no coincide con el valor de value no se agrega al resultado del filtro.
    return false;
  });
  
};

export const sortData = (data, sortBy, sortOrder) => {
    const sortedData = data.slice().sort((a, b) => {
      const valA = a[sortBy].toLowerCase();
      const valB = b[sortBy].toLowerCase();
  
      if (sortOrder === "asc") {
        return valA.localeCompare(valB);
      } else if (sortOrder === "desc") {
        return valB.localeCompare(valA);
      } else {
        return 0;
      }
    });
  
    return sortedData;
  };