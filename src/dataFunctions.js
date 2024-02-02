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

const unSort = Array.from(dataset);
export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name") {
    if (sortOrder === "asc") {
      // Ordena de la A a la Z
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      // Ordena de la Z a la A 
      return data.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return unSort; 
    }
  }
};