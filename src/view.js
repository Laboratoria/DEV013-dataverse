export const renderItems = (data) => {
  const list = document.createElement("ul");
  data.forEach((film) => {
    const card = document.createElement("li");
    card.innerHTML += `
      <div class="card">
        <div class="visual">
          <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
          <div id="root">
            <ul itemscope itemtype="nausicaa-del-valle-del-viento">
              <div class="container">
                <li itemtype="name">${film.name}</li>
                <li itemtype="genders">Género: ${film.facts["genders"]}</li>
                <button class="ver-mas">Ver más</button>
                <div class="noVisual">
                  <dialog id="modal-${film.id}"> 
                    <li itemtype="releaseYear">Estreno: ${film.facts["releaseYear"]}</li>
                    <li itemtype="duration">Duración: ${film.facts["duration"]}</li>
                    <li itemtype="boxOfficeRevenue">Recaudación: ${film.facts["boxOfficeRevenue"]}</li>
                    <li itemtype"shortDescription">Sinopsis: ${film.shortDescription}</li>
                    <li itemtype="description">Descripción: ${film.description}</li>
                    <button class="ver-menos">Ver menos</button>
                  </dialog>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    `;
    card.querySelector(".ver-mas").addEventListener("click", () => {
      document.getElementById(`modal-${film.id}`).showModal();
    });

    card.querySelector(".ver-menos").addEventListener("click", () => {
      document.getElementById(`modal-${film.id}`).close();
    });
    list.appendChild(card);
  });
  return list;
};