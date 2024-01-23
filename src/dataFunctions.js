// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

//funcion de filtrar elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(elemento => elemento.facts[filterBy] === value);
  return filterElement;
}

//sort asc
export const sortData = (data,sortBy,sortOrder) =>{
  if (sortOrder === "asc"){
    return data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
  } if (sortOrder === "desc"){
    return data.sort((a,b) => b[sortBy].localeCompare(a[sortBy]));
  }
}

