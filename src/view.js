export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach((film) => {
    const card = document.createElement("li");
    card.innerHTML += `
    <div class="card">
    <div class="visual">
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <div class="root">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <div class="container">
    <li itemtype="name">${film.name}</li>
    <li itemtype"genres">Género: ${film.facts["genders"]}</li>
    </div>
    </div>
    <div class="noVisual"> 
    <li itemtype"shortDescription">Sinopsis: ${film.shortDescription}</li>
    <li itemtype="description">Descripción: ${film.description}</li>
    <li itemtype="duration">Duración: ${film.facts["duration"]}</li>
    <li itemtype="releaseYear">Estreno: ${film.facts["releaseYear"]}</li>
    <li itemtype="boxOfficeRevenue">Recaudación: ${film.facts["boxOfficeRevenue"]}</li>
    </div>
    </ul>
    </div>
    </div>
    </div>
    `;
    list.appendChild(card);
  });
  return list;
};
// export const renderItems = (data) => {
//   console.log(data);
//   const cardContainer = document.querySelector("#card-container");
//   cardContainer.innerHTML = "";

//   data.forEach(film => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const image = document.createElement("img");
//     const name = document.createElement("h2");
//     const description = document.createElement("p");
//     const duration = document.createElement("p");
//     const releaseYear = document.createElement("p");
//     const genres = document.createElement("p");
//     const boxOfficeRevenue = document.createElement("p");

//     image.src = film.imageUrl;
//     name.innerText = film.name;
//     description.innerText = film.shortDescription;
//     duration.innerText = `${film.facts.duration}`;
//     releaseYear.innerText = `${film.facts.releaseYear}`;
//     genres.innerText = `${film.facts.genders.join(", ")}`;
//     boxOfficeRevenue.innerText = `${film.facts.boxOfficeRevenue}`;

//     card.append(image, name, description, duration, releaseYear, genres, boxOfficeRevenue);

//     cardContainer.appendChild(card);

//     // card.innerHTML = `
//       // <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
//       // <ul itemscope itemtype="http://schema.org/Movie">
//         // <li itemprop="name">Nombre: ${film.name}</li>
//         // <li itemprop="description">Sinopsis: ${film.shortDescription}</li>
//         // <li itemprop="description">Descripción: ${film.description}</li>
//         // <li itemprop="duration">Duración: ${film.facts.duration}</li>
//         // <li itemprop="datePublished">Estreno: ${film.facts.releaseYear}</li>
//         // <li itemprop="genre">Género: ${film.facts.genders.join(", ")}</li>
//         // <li itemprop="boxOffice">Recaudación: ${film.facts.boxOfficeRevenue}</li>
//       // </ul>
//     // `;
//     // cardContainer.appendChild(card);
//   });
// };