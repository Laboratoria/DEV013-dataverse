// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función filtro

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
// Funcion para ordenar ASC y DESC
export const sortData = (data, sortConfig) => {
  const { sortBy, sortOrder } = sortConfig;

  const sortedData = data.slice().sort((a, b) => {
    const valA = valorOrdenar(a, sortBy);
    const valB = valorOrdenar(b, sortBy);

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
  
// Funcion para ordenar asc y desc junto con los filtros de genero y paises
const valorOrdenar = (item, sortBy) => {
  switch (sortBy) {
  case "mainField":
    return item.facts[sortBy];
  case "countryNacimiento":
    return item.facts[sortBy];
  default:
    
    return String(item[sortBy]).toLowerCase();
  }
};