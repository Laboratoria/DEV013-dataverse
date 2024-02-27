// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
<<<<<<< HEAD
//
export const filterData = (data, filterBy, value) => {
  const filtrarEspecialidad = data.filter((persona) => {
  let valorEspecialidad = persona.facts.mainField;
  
  if(value== "Matemáticas" || value== "Ciencias de la computación" || value== "Filosofía" || value== "Composición musical" || value=="video juegos" || value=="Física" || value=="Actuación"||value=="Física de particulas"||value=="Astronomía"||value=="Astrofísica"||value=="Química"||value=="Microbiología"||value=="Bioquímica"||value=="Cristalografía"){
  console.log(persona.facts.mainField);
 });
 return filterData;
};

()
export const sortData = (data, sortBy, sortOrder) => {
  return [];
};
=======
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






>>>>>>> 92ed2bcbb25646ba0a03fd1b186b9f963fcd78e6
