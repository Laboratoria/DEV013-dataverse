export const renderItems = (data) => {
  //console.log(data)

  const list = document.createElement ("ul");
  // iterar sobre cada objeto de dataset
  data.forEach(data=> {
    const itemList = document.createElement('li');
    const itemContainer = document.createElement('dl');
    itemList.classList.add("card");
    itemContainer.innerHTML = 
      `  
      <dt class= "cards"><img src=${data.imageUrl} alt=${data.name}></dt>
      <dd class= "front" itemprop="name">${data.name}</dd>
      <dt class="opción" >Nacionalidad:</dt> <dd class = "back" itemprop="Nacionalidad">${data.facts.birthPlace}</dd>
      <dt class="opción" >Especialidad:</dt> <dd class = "back" itemprop="Especialidad">${data.facts.mainField}</dd>
      <dt class="opción" >Fecha de Nacimiento:</dt> <dd class= "back" itemprop="fechaDeNacimiento">${data.facts.yearOfBirth}</dd>
      <dt class="opción" >Fecha de Muerte:</dt> <dd class= "back" itemprop="fechaDeMuerte">${data.facts.yearOfDeath}</dd>
      <dt class="opción" >Descripción:</dt> <dd class= "back" itemprop="Descripción">${data.description}</dd> 
      
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