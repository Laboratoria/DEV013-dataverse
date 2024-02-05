// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//export const filterGenres = () => {
//};

export const filterBy = (data, sortBy, value) => {
  return data.filter((item) => item[sortBy] === value);
};

export const sortFilms = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const movieA = a[sortBy].toLowerCase();
    const movieB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return movieA.localeCompare(movieB);
    } else {
      return movieB.localeCompare(movieA);
    }
  });
  return data;
};

export const renderItems = (data) => {
  console.log(data);
  const cardContainer = document.querySelector("#card-container");
  cardContainer.innerHTML = "";

  films.forEach(film => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const duration = document.createElement("p");
    const releaseYear = document.createElement("p");
    const genres = document.createElement("p");
    const boxOfficeRevenue = document.createElement(p);

    image.src = film.imageUrl;
    name.innerText = film.name;
    description.innerText = film.shortDescription;
    duration.innerText = `${film.facts.duration}`;
    releaseYear.innerText = `${film.facts.releaseYear}`;
    genres.innerText = `${film.facts.genders.join(", ")}`;
    boxOfficeRevenue.innerText = `${film.facts.boxOfficeRevenue}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(duration);
    card.appendChild(releaseYear);
    card.appendChild(genres);
    card.appendChild(boxOfficeRevenue);

    cardContainer.appendChild(card);

    // card.innerHTML = `
      // <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
      // <ul itemscope itemtype="http://schema.org/Movie">
        // <li itemprop="name">Nombre: ${film.name}</li>
        // <li itemprop="description">Sinopsis: ${film.shortDescription}</li>
        // <li itemprop="description">Descripción: ${film.description}</li>
        // <li itemprop="duration">Duración: ${film.facts.duration}</li>
        // <li itemprop="datePublished">Estreno: ${film.facts.releaseYear}</li>
        // <li itemprop="genre">Género: ${film.facts.genders.join(", ")}</li>
        // <li itemprop="boxOffice">Recaudación: ${film.facts.boxOfficeRevenue}</li>
      // </ul>
    // `;
    // cardContainer.appendChild(card);
  });
};
