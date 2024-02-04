// import { computeStats } from "./data functions-Cleaning.js";
// import { wordSelection } from "./data functions-Cleaning.js";
// import { determinarImagen } from "./data functions-Cleaning.js";


//---- Fact by category
//---- No UI dependendant
//---- No need to compute at render stage.
//iterar en cada elemento del objeto
//contar cuantas son por categorria
//dentro del elemento acceder a facts
//obtener el valor de cada fact
//dependiendo de ese valor poner las imagenes



export const foo2 = (data) => {
  //1 - Create empty arraty to host categories

  //1.1 - Create structure to store total facts by category
  //2 - Iterate in data
  //3 - Identify category
  //4 - Extracts facts
  //5 - Store facts in corresponding category
  //6 - Calculate average by category for every fact
  //6.1 - Save total facts by category in dedicated structure
}

// Render fact for passed model image inside the UI card Item
// ----
// This function receives a plant model and extract the fact information
// rendering depending of the value found in the model
// @param plan: The plant model that contains the info
// @parm cardItem: The card that represents UI the element inside the DOM 
export const factImages = (plant, cardItem) => {
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

export const renderItems = (data) => {
  
  //crear el contenedor y guardarlo en una variable 
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

    //Se crea el elemento li
    const cardItem = document.createElement('li');

    //El elemento li se escribe en el DOM
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

    //---------------------------------------------------------------------------------------------------------    //<!-- Modals -->

    const modalsContainer = document.createElement('div');
    modalsContainer.className="modal-boxes";

    const descriptionModal = document.createElement('dialog');
    descriptionModal.id="description-modal";
    descriptionModal.className="description-modal";
    descriptionModal.innerHTML+= ` 
              <h3>${element.name}</h3>
              <p>${element.description}</p>
              <img class="close-button" alt="Cerrar" src="resources/Icons/Close.png">`

    //--------------------------------------------------------------------------------------------------------

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
                  <h5 class="water">Mucha</h5>
                  <h5 class="light">Regular</h5>
                  <h5 class="care">Poca</h5>
                </div>
              </div>
              <h4>Qué cuidados necesita este tipo de plantas?</h4>
              <img class="close-button" alt="Cerrar" src="resources/Icons/Close.png">`

    //-------------------------------------------------------------------------------------------------------
    
    cardList.appendChild(cardItem);
    factImages(element, cardItem);

    modalsContainer.appendChild(descriptionModal);
    modalsContainer.appendChild(statsModal);
    
    cardItem.insertAdjacentElement("afterend", modalsContainer);

    const icons = cardItem.querySelector("#icons");
    document.getElementById('icons');
    icons.appendChild(statisticsButton);
    icons.appendChild(descriptionButton);
    icons.appendChild(backButton);

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

    //------------------------------------------------------------------------------------------------------------
    // -- Facts in card
    //acceder a la data
    //iterar por cada elemento
    //ver de que categoria pertenece
    //llamar a funcion computeStats para hacer el calculo y wordSelection
    //seleccionar donde se va a mostrar la estadistica 
    //insertar el calculo usando innerHTML o textContent

    // statsModal.forEach((modal) =>{
    
    //   const averageWater= computeStats(data, "waterAmount");
    //   const wordWater= wordSelection(averageWater);
  
    //   const averageLight= computeStats(data, "sunLight");
    //   const wordLight = wordSelection(averageLight);
  
    //   const averageCare= computeStats(data, "careDifficulty");
    //   const wordCare= wordSelection(averageCare);
  
    //   const agua=modal.computeStats(".water");
    //   agua.textContent=`${wordWater}`;

    //   const luz= modal.computeStats(".light");
    //   luz.textContent=`${wordLight}`;

    //   const cuidado= modal.computeStats(".care"); 
    //   cuidado.textContent=`${wordCare}`;
    // })

    //-----------------------------------------------------------------------------------------------------
    
    // const water = element.facts.waterAmount;
    // const light = element.facts.sunLight;
    // const care = element.facts.careDifficulty;
    
    // function actualizarImagenes(fact, firstImage, secondImage, thirdImage, id) {
    //   const { activo, inactivo } = determinarImagen(id);
  
    //   if (fact === 1) {
    //     firstImage.src = activo;
    //     secondImage.src = inactivo;
    //     thirdImage.src = inactivo;
    //   } else if (fact === 2) {
    //     firstImage.src = activo;
    //     secondImage.src = activo;
    //     thirdImage.src = inactivo;
    //   } else if (fact === 3) {
    //     firstImage.src = activo;
    //     secondImage.src = activo;
    //     thirdImage.src = activo;
    //   }
    // }
    
  
    // Imagenes.agua
    // const firstImageWater = cardItem.querySelector("#minimum-water");
    // const secondImageWater = cardItem.querySelector("#medium-water");
    // const thirdImageWater = cardItem.querySelector("#maximum-water");
  
    // actualizarImagenes(water, firstImageWater, secondImageWater, thirdImageWater, "agua");
  
    // Imagenes.luz
    // const firstImageLight = cardItem.querySelector("#minimum-light");
    // const secondImageLight = cardItem.querySelector("#medium-light");
    // const thirdImageLight = cardItem.querySelector("#maximum-light");
  
    // actualizarImagenes(light, firstImageLight, secondImageLight, thirdImageLight, "luz");
  
    //Imagenes.cuidado
    // const firstImageCare = cardItem.querySelector("#minimum-care");
    // const secondImageCare = cardItem.querySelector("#medium-care");
    // const thirdImageCare = cardItem.querySelector("#maximum-care");
  
    // actualizarImagenes(care, firstImageCare, secondImageCare, thirdImageCare, "cuidado");

    //------------------------------------------------------------------------------------------------------------

  });
  return cardList;
}