// import { computeStats } from "./data functions-Cleaning.js";
// import { wordSelection } from "./data functions-Cleaning.js";
// import { determinarImagen } from "./data functions-Cleaning.js";

// Render fact for passed model image inside the UI card Item
// ----
// This function receives a plant model and extract the fact information
// rendering depending of the value found in the model
// @param plan: The plant model that contains the info
// @parm cardItem: The card that represents UI the element inside the DOM 
export const renderFactImages = (plant, cardItem) => {
  // Create static elements
  const waterActiveImage = document.createElement("img");
  waterActiveImage.alt="Gota";
  waterActiveImage.src="resources/Icons/agua-activa.png";
  
  const waterActiveImage2 = document.createElement("img");
  waterActiveImage2.alt="Gota";
  waterActiveImage2.src="resources/Icons/agua-activa.png";

  const waterActiveImage3 = document.createElement("img");
  waterActiveImage3.alt="Gota";
  waterActiveImage3.src="resources/Icons/agua-activa.png";

  const lightActiveImage = document.createElement("img");
  lightActiveImage.alt="Luz";
  lightActiveImage.src="resources/Icons/luz-activa.png";
  
  const lightActiveImage2 = document.createElement("img");
  lightActiveImage2.alt="Luz";
  lightActiveImage2.src="resources/Icons/luz-activa.png";

  const lightActiveImage3 = document.createElement("img");
  lightActiveImage3.alt="Luz";
  lightActiveImage3.src="resources/Icons/luz-activa.png";

  const careActiveImage = document.createElement("img");
  careActiveImage.alt="Semaforo";
  careActiveImage.src="resources/Icons/cuidado-activa.png";

  const careActiveImage2 = document.createElement("img");
  careActiveImage2.alt="Semaforo";
  careActiveImage2.src="resources/Icons/cuidado-activa.png";

  const careActiveImage3 = document.createElement("img");
  careActiveImage3.alt="Semaforo";
  careActiveImage3.src="resources/Icons/cuidado-activa.png";

  // 1 - Iterar en data forEach
  // 2 - Get facts by type
  const waterAmount = plant.facts.waterAmount;
  const sunLight = plant.facts.sunLight;
  const careDifficulty = plant.facts.careDifficulty;

  const waterArea = cardItem.querySelector(".water-icons");
  document.getElementById('water');

  // 3 - condicionales
  // 3.1 repetir por fact
  // 3.2 water facts
  if (waterAmount === 1) {
    //4 dibujar 1 activa 2 inactivas
    waterArea.appendChild(waterActiveImage);
    waterActiveImage2.className="inactive";
    waterArea.appendChild(waterActiveImage2); //anadir clase
    waterArea.appendChild(waterActiveImage3);
    waterActiveImage3.className="inactive";
  } else if (waterAmount === 2) {
    //4 dibujar 2 activas 1 inactiva
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2); //anadir clase
    waterActiveImage3.className="inactive";
    waterArea.appendChild(waterActiveImage3);
  } else if (waterAmount === 3) {
    //4 dibujar 3 activas
    waterArea.appendChild(waterActiveImage);
    waterArea.appendChild(waterActiveImage2); //anadir clase
    waterArea.appendChild(waterActiveImage3);
  }

  const lightArea = cardItem.querySelector(".light-icons");
  document.getElementById('light');

  // 3.2 sun facts
  if (sunLight === 1) {
    //4 dibujar 1 activa 2 inactivas
    lightArea.appendChild(lightActiveImage);
    lightActiveImage2.className="inactive";
    lightArea.appendChild(lightActiveImage2); //anadir clase
    lightActiveImage3.className="inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 2) {
    //4 dibujar 2 activas 1 inactiva
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2); //anadir clase
    lightActiveImage3.className="inactive";
    lightArea.appendChild(lightActiveImage3);
  } else if (sunLight === 3) {
    //4 dibujar 3 activas
    lightArea.appendChild(lightActiveImage);
    lightArea.appendChild(lightActiveImage2); //anadir clase
    lightArea.appendChild(lightActiveImage3);
  }
  const careArea = cardItem.querySelector(".care-icons");
  document.getElementById('care');

  // 3.3 care facts
  if (careDifficulty === 1) {
    //4 dibujar 1 activa 2 inactivas
    careArea.appendChild(careActiveImage);
    careActiveImage2.className="inactive";
    careArea.appendChild(careActiveImage2); //anadir clase
    careActiveImage3.className="inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 2) {
    //4 dibujar 2 activas 1 inactiva
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2); //anadir clase
    careActiveImage3.className="inactive";
    careArea.appendChild(careActiveImage3);
  } else if (careDifficulty === 3) {
    //4 dibujar 3 activas
    careArea.appendChild(careActiveImage);
    careArea.appendChild(careActiveImage2); //anadir clase
    careArea.appendChild(careActiveImage3);
  }
}

export const renderStatisticsWords = (plant, statsModal, statsByCategory) => {

  //   <div class="statistics-totals">
  //   <h5 class="water">Mucha</h5>
  //   <h5 class="light">Regular</h5>
  //   <h5 class="care">Poca</h5>
  // </div>

  const waterAverageWord = document.createElement("h5");
  waterAverageWord.className="water";

  const statisticsContainer = statsModal.querySelector(".statistics-totals");
  statisticsContainer.appendChild(waterAverageWord);

  if(statsByCategory[plant.categoryPlant].average.waterAverage === 1) {
    waterAverageWord.innerHTML+="Poca";
  } else if(statsByCategory[plant.categoryPlant].average.waterAverage === 2) {
    waterAverageWord.innerHTML+="Regular";
  } else if(statsByCategory[plant.categoryPlant].average.waterAverage === 3) {
    waterAverageWord.innerHTML+="Mucha";
  }

}

export const renderItems = (data, statsByCategory) => {
  // Creating container to host all the cards AKA "list"
  const cardList = document.getElementById("ul-cards");
  
  data.forEach(element => {
    const statisticsButton = document.createElement('img');
    statisticsButton.className="modal-statistics-button";
    statisticsButton.alt="Estadísticas";
    statisticsButton.src="resources/Icons/estadisticas.png";

    const descriptionButton = document.createElement('img');
    descriptionButton.className="modal-description-button";
    descriptionButton.alt="Descripcion";
    descriptionButton.src="resources/Icons/descripcion.png";

    const backButton = document.createElement("img");
    backButton.id = "flip-button";
    backButton.className = "flip-button";
    backButton.alt = "Regresar";
    backButton.src = "resources/Icons/Regresar.png";

    //Creting the li element to represent the plant as UI card
    const cardItem = document.createElement('li');

    //Card item creation, every card represents a plant from the data. 
    cardItem.className="card-container " + element.categoryPlant;
    cardItem.setAttribute("itemscope", "");
    cardItem.setAttribute("itemtype", "https://schema.org");
    cardItem.innerHTML +=`
            <!-- Front card funciona -->
            <article class="front-card" id="front-card">
              <h2>${element.name}</h2>
              <div class="top-card">
                <img alt="Plant Name" src="${element.imageUrl}">
                <dl itemscope itemtype="https://schema.org" class="facts">
                  <div class="amounts" id="water">
                    <dt class="amount" id="water-amounts">Agua</dt>
                    <dd class="water-icons">
                      
                    </dd>
                  </div>
                  <div class="amounts" id="light">
                    <dt class="amount" id="water-amounts">Luz</dt>
                    <dd class="light-icons">
                      
                    </dd>
                  </div>
                  <div class="amounts" id="care">
                    <dt class="amount" id="water-amounts">Cuidado</dt>
                    <dd class="care-icons">
                      
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="botom-card">
                <p>${element.shortDescription}</p>
                <button class="details-button" id="details-button">Detalles</button>
              </div>
            </article>
            <!-- Back card, top funciona, icons y botom card-->
            <article id="back-card" class="hide">
              <h2>${element.name}</h2>
              <div class="top-card">
                <img alt="Plant Name" src=${element.imageUrl}>
                <dl itemscope itemtype="https://schema.org">
                  <dt class="scientific-name">${element.scientificName}</dt>
                  <dt>Familia botánica</dt><dd>${element.botanicalFamily}</dd>
                  <dt>Lugar de origen</dt><dd>${element.birthPlace}</dd>
                </dl>
              </div>
              <div class="bottom-card">
                <dl id="description">
                  <dt>Usos</dt><dd>${element.applicationsPlant}</dd>
                  <dt>Datos climáticos</dt><dd>${element.climaticData}</dd>
                  <dt>Mantenimiento</dt><dd>${element.maintenanceNeeds}</dd>
                </dl>
              </div>
              <div id="icons">
              </div>
            </article>`

    // Modal containers creation
    const modalsContainer = document.createElement('div');
    modalsContainer.className="modal-boxes";

    // Description Modal Creation Flow
    const descriptionModal = document.createElement('dialog');
    descriptionModal.id="description-modal";
    descriptionModal.className="description-modal";
    descriptionModal.innerHTML+= ` 
              <h3>${element.name}</h3>
              <p>${element.description}</p>
              <img class="close-button" alt="Cerrar" src="resources/Icons/Close.png">`

    // Stats Modal Creation Flow
    const statsModal= document.createElement('dialog');
    statsModal.id="statistics-modal";
    statsModal.className="statistics-modal";
    statsModal.innerHTML+=`
              <h3>${element.categoryPlant}</h3>
              <div class="statistics">
                <div class="graph-legend">
                  <div class="legend">
                    <div class="square water"></div>
                    <p>Agua</p>
                  </div>
                  <div class="legend">
                    <div class="square light"></div>
                    <p>Luz</p>
                  </div>
                  <div class="legend">
                    <div class="square care"></div>
                    <p>Cuidado</p>
                  </div>
                </div>
                <div class="statistics-totals">
                </div>
              </div>
              <h4>Qué cuidados necesita este tipo de plantas?</h4>
              <img class="close-button" alt="Cerrar" src="resources/Icons/Close.png">`

    //Plant card UI respresentation is ready to add to the list
    cardList.appendChild(cardItem);
    renderFactImages(element, cardItem);
    
    //Adding the modals to the card
    modalsContainer.appendChild(descriptionModal);
    modalsContainer.appendChild(statsModal);
    
    //Modals are added outside the UI card representation
    cardItem.insertAdjacentElement("afterend", modalsContainer);
    
    renderStatisticsWords(element, statsModal, statsByCategory);
    
    //Add footer to the reverse card that contains the buttons for 
    //stats, description and reverse
    const icons = cardItem.querySelector("#icons");
    document.getElementById('icons');
    icons.appendChild(statisticsButton);
    icons.appendChild(descriptionButton);
    icons.appendChild(backButton);

    //Add listeners to the buttons for the reverse inside the card
    //this listener nees to be added for every card, then those are executed
    //inside the forEach.
    //TODO: - Move this to a outside function.
    const closeButtonDescription = descriptionModal.querySelector(".close-button");
    closeButtonDescription.addEventListener("click", () =>{
      descriptionModal.close();
    });

    const closeButtonStats = statsModal.querySelector(".close-button");
    closeButtonStats.addEventListener("click", () =>{
      statsModal.close();
    });

    statisticsButton.addEventListener("click", () =>{
      statsModal.showModal();
    });

    descriptionButton.addEventListener("click", () =>{
      descriptionModal.showModal();
    });
  });
  return cardList;
}