// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
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
