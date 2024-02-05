export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const list = document.createElement("ul");
  data.forEach(film => {
    const card = document.createElement("li");
    card.innerHTML+=`
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <li itemtype >Nombre: </li><li itemtype itemprop="movieName">${film.name}</li>
    <li itemtype >Sinopsis: </li><li itemtype itemprop="shortDescription">${film.shortDescription}</li>
    <li itemtype >Descripción: </li><li itemtype itemprop="description">${film.description}</li>
    <li itemtype >Duración: </li><li itemtype itemprop="duration">${film.facts["duration"]}</li>
    <li itemtype >Estreno: </li><li itemtype itemprop="releaseYear"li>${film.facts["releaseYear"]}</li>
    <li itemtype >Género: </li><li itemtype itemprop="genres">${film.facts["genders"]}</li>
    <li itemtype >Recaudación: </li><li itemtype itemprop="boxOfficeRevenue">${film.facts["boxOfficeRevenue"]}</li>
    </ul>
    `
    list.appendChild(card);
  });
  return list;
};