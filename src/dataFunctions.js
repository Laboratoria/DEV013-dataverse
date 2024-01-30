// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return "example";
};

//funcion de filtrar por elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(
    (elemento) => elemento.facts[filterBy] === value
  );
  return filterElement;
};

//sort asc
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  if (sortOrder === "desc") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
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

//funcion para obtener estadisticas de porcentaje de cartas capturadas por Sakura y Syaoran

/* export const estadisticFilter = (data, filterBy, value) => {
  const filterCaptured = data.filter(
    (captured) => captured.extraInfo[filterBy] === value.includes("false")
  );

  return filterCaptured;
}; */

//funcion para estadisticas

export const percent = (data, filterBy) => {
  const filterCaptured = data.filter(
    (captured) => captured.extraInfo[filterBy] === true
  );

  const percentSyaoran = Math.round(
    (filterCaptured.length / data.length) * 100
  );

  const percentSakura = 100 - percentSyaoran;

  return {
    percentSakura,
    percentSyaoran,
  };

  //cartas capturadas por sakura = 11 / total 24
  //cartas capturadas por syaoran = 13 / total 24
  // si 24 es a 100% entonces 11 es a X / X = (11*100)/24 o (11/24)*100
  // si 24 es a 100% entonces 13 es a X / X = (13*100)/24 o (13/24)*100
};
