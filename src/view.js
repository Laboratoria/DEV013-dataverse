export const renderItems = (data) => {
  //console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  //Debe tener las funciones para rederizar los elementos dinamicamente
  //función renderItems(data): recibe los datos renderizarlos y devolver 1 elemento DOM o cadena de datos

  const list = document.createElement ("ul");
  // iterar sobre cada objeto de dataset
  data.forEach(data=> {
   const itemList = document.createElement('li');
   const itemContainer = document.createElement('dl');
   itemContainer.innerHTML = `
      <img src=${data.imageUrl} alt=${data.name}/>
      <dd itemprop="name">${data.name}</dd>
      <dd itemprop="DescripciónC"> ${data.shortDescription}</dd>
      <dt>Fecha de nacimiento:</dt><dd itemprop="fechaDeNacimiento">${data.facts.yearOfBirth}</dd>
      <dt>Fecha de muerte:</dt><dd itemprop="fechaDeMuerte">${data.facts.yearOfDeath}</dd>
      <dt>Nacionalidad:</dt><dd itemprop="Nacionalidad">${data.facts.birthPlace}</dd>
      <dt>Especialidad: </dt><dd itemprop="Especialidad">${data.facts.mainField}</dd>
      <dt>Descripción:</dt><dd itemprop="Descripción">${data.description}</dd>
      `
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "Científicas");
    itemList.appendChild(itemContainer);
    list.appendChild(itemList);

  });
  const divContenedorTarjetas = document.querySelector('#root');
  divContenedorTarjetas.appendChild(list);
  return list;
  
};