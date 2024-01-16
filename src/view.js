const cardListElement = document.getElementById('cardList');

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
    <h2>${data.name}</h2>
    <img src="${data.imageUrl}" alt="${data.name}">
    <p>${data.shortDescription}</p>
    <p>${data.facts.yearOfBirth} - ${data.facts.yearOfDeath}</p>
    <p>${data.facts.birthPlace}</p>
    <p>${data.facts.mainField}</p>
    <p>${data.description}</p>
    <a href="${data.extraInfo.imageSource}" target="_blank">Image Source</a>
  `;
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

renderData();