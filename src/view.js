export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const list = document.createElement("ul");
  data.forEach(film => {
    const card = document.createElement("li");
    card.innerHTML+=`
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento"></ul>
    <li>Nombre: </li><li itemprop="movieName">${film.name}</li>
    <li>Sinopsis: </li><li itemprop="shortDescription">${film.shortDescription}</li>
    <li>Descripción: </li><li itemprop="description">${film.description}</li>
    <li>Duración: </li><li itemprop="duration">${film.facts["duration"]}</li>
    <li>Estreno: </li><li itemprop="releaseYear"li>${film.facts["releaseYear"]}</li>
    <li>Género: </li><li itemprop="genres">${film.facts["genders"]}</li>
    <li>Recaudación: </li><li itemprop="boxOfficeRevenue">${film.facts["boxOfficeRevenue"]}</li>
    `
    list.appendChild(card);
  });
  return list;
};