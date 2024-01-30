// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// export const example = () => {
//   return "example";
// };

//funcion de filtrar por elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(
    (elemento) => elemento.facts[filterBy] === value);
  return filterElement;
}

//sort asc
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } if (sortOrder === "desc") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
}

//funcion de filtrar por carta peligrosa o inofensiva

export const dangerousDataFilter = (data, filterBy, value) => {
  const filterDangerous = data.filter(
    (dangerous) => dangerous.extraInfo[filterBy] === value.includes("true")
  );
  /* console.log("value: ", value); */
  /* console.log("data despues del filtro: ", filterDangerous); */
  //const porcentaje = (filterDangerous.length/data.length)*100; --- porcentaje
  return filterDangerous;
};

export const computeStats = (data) => {
  //console.log(data);
  const result = data.reduce((acumulador, carta) => {
    acumulador[carta.extraInfo.isDangerous ? 'peligrosas' : 'inofensivas'] += 1;
    //console.log(acumulador);
    return acumulador;
  },
  { peligrosas: 0, inofensivas: 0 }
  );
  const promPeligrosas = Math.round((result.peligrosas / data.length) * 100); // Math.round() redondear
  const promInofensivas = Math.round((result.inofensivas / data.length) * 100);
  //console.log('El porcentaje de cartas peligrosas son', promPeligrosas);
  //console.log('El porcentaje de cartas inocentes son', promInofensivas);
  return { promPeligrosas, promInofensivas }

}


//return `El porcentaje de cartas peligrosas son  &{percent}`;
