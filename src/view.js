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
   itemList.classList.add("card");
   itemContainer.innerHTML = `  
      <dt class= "cards"><img src=${data.imageUrl} alt=${data.name}></dt>
      <dt class="opción" >Nombre:</dt><dd class= "opción-front" itemprop="name">${data.name}</dd>
      <dt class="opción" >Descripción:</dt> <dd class= "opción-front" itemprop="DescripciónC":>${data.shortDescription}</dd>
      <dt class="opción" >Fecha de nacimiento:</dt> <dd class= "opción-back" itemprop="fechaDeNacimiento">${data.facts.yearOfBirth}</dd>
      <dt class="opción" >Fecha de muerte:</dt> <dd class= "opción-back" itemprop="fechaDeMuerte">${data.facts.yearOfDeath}</dd>
      <dt class="opción" >Nacionalidad:</dt> <dd class = "opción-back" itemprop="Nacionalidad">${data.facts.birthPlace}</dd>
      <dt class="opción" >Descripción:</dt> <dd class= "opción-back"itemprop="Descripción">${data.description}</dd> 
    
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