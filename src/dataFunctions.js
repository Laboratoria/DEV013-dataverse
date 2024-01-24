// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return "example";
};

//funcion de filtrar por elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(
    (elemento) => elemento.facts[filterBy] === value
  );

  console.log("value: ", value);
  console.log("data despues del filtro: ", filterElement);
  return filterElement;
};

//funcion de filtrar por carta peligrosa o inofensiva

export const dangerousDataFilter = (data, filterBy, value) => {
  const filterDangerous = data.filter(
    (dangerous) => dangerous.extraInfo[filterBy] === value.includes("true")
  );
  /* console.log("value: ", value); */
  /* console.log("data despues del filtro: ", filterDangerous); */
  return filterDangerous;
};
