export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites GENERACION DINAMICA
  const list = document.createElement("ul");
  data.forEach(data => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemContainer.classList.add("card");

    itemContainer.innerHTML = `
        <dd itemprop="name">${data.name}</dd>
        <img src=${data.imageUrl} alt=${data.name}/> 
        <dd itemprop="Descripción"> ${data.description}</dd><br><br><br>
        <dt>Fecha de nacimiento:</dt><dd itemprop="fechaNacimiento">${data.facts.yearOfBirth}</dd><br>
        <dt>Fecha de muerte:</dt><dd itemprop="fechaMuerte">${data.facts.yearOfDeath}</dd><br>
        <dt> Lugar de nacimiento:</dt><dd itemprop="LugarNacimiento">${data.facts.birthPlace}</dd><br>
        <dt>Género:</dt><dd itemprop="genero">${data.facts.mainField}</dd>
         `
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "películas");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList)
  });

  return list;
};



/*export const cardListElement = document.getElementById('cardList');

async function fetchData() {
  try {
    const response = await fetch('./data/dataset.js');
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

function renderItems(data) {
  const card = document.createElement('li');
  card.innerHTML = `
    <img src="${data.imageUrl}" alt="${data.name}">
    <h2>${data.name}</h2>
    <p>${data.shortDescription}</p>
    <p>${data.facts.yearOfBirth} - ${data.facts.yearOfDeath}</p>
    <p>${data.facts.birthPlace}</p>
    <p>${data.facts.mainField}</p>
    <p>${data.description}</p>`;
  return card;
}

async function renderData() {
  try {
    const data = await fetchData();
    cardListElement.innerHTML = '';
    data.forEach(data => {
      const card = renderItems(data);
      cardListElement.appendChild(card);
    });
  } catch (error) {
    //console.error('Error rendering data:', error);
  }
}

renderData();*/
