export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach((film) => {
    const card = document.createElement("li");
    card.innerHTML += `
    <div class="visual"> 
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <li itemtype="name">${film.name}</li>
    <li itemtype="genders">Género: ${film.facts["genders"]}</li>
    </ul>
    <label for="popUp"> </label>
    <button class="cardsBtn">Ver más</button>
    </div>
    <section class="windowModal hiden">
    <button class="closeWindow">X</button>
    <h2>${film.name}</h2>
    <div class="modalCard">
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
    <ul itemscope itemtype="nausicaa-del-valle-del-viento">
    <div class="card">
    <li itemtype="genders">Género: ${film.facts["genders"]}</li>
    <li itemtype="releaseYear">Estreno: ${film.facts["releaseYear"]}</li>
    <li itemtype="duration">Duración: ${film.facts["duration"]}</li>
    <li itemtype="boxOfficeRevenue">Recaudación: ${film.facts["boxOfficeRevenue"]}</li>
    <li itemtype"shortDescription">Sinopsis: ${film.shortDescription}</li>
    <li itemtype="description">Descripción: ${film.description}</li>
    </div>
    </ul>
    </div>
    </section>
    <div class="modalFondo hiden"></div>
    `;
    
    list.appendChild(card);

    const popUpWindow = card.querySelector(".windowModal");
    const buttonWindow = card.querySelector(".cardsBtn");
    const fondoModal = card.querySelector(".modalFondo");
    const closeWindow = card.querySelector(".closeWindow")

    buttonWindow.addEventListener("click", function () {
      popUpWindow.classList.remove("hiden");
      fondoModal.classList.remove("hiden");
      return buttonWindow;
    });
    closeWindow.addEventListener("click", function () {
      popUpWindow.classList.add("hiden");
      fondoModal.classList.add("hiden");
      return closeWindow;
    });
    fondoModal.addEventListener("click", function () {
      popUpWindow.classList.add("hiden");
      fondoModal.classList.add("hiden");
    });
  });
  return list;
};