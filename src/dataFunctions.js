// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

//funcion de filtrar elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(elemento => elemento.facts[filterBy] === value);
  return filterElement;
}

