import { computeStats } from "./data functions Cleaning.js";
import { wordSelection } from "./data functions Cleaning.js";
import { determinarImagen } from "./data functions Cleaning.js";
export const renderItems = (data) => {
  
  //crear el contenedor y guardarlo en una variable 
  const cardList = document.getElementById("ul-cards");

  //iterar en el arreglo (usar for each)
  // por cada elemento se debe crear un li 
  //cada li debe tener la estructura html predefinida 
  //cada li se debe agregar a la ul 
  //insertar el ul completo al dom 
  
  data.forEach(element => {
    //Se crea el elemento li
    const cardItem = document.createElement('li');

    //El elemento li se escribe en el DOM
    cardItem.innerHTML += `<li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org" itemprop="pant">
            <!-- Front card funciona -->
            <article class="front-card" id="front-card">
              <h2>${element.name}</h2>
              <div class="top-card">
                <img alt="Agave Azul" src="${element.imageUrl}">
                <dl itemscope itemtype="https://schema.org" class="facts">
                  <div class="amounts" id="water">
                    <dt class="amount">Agua</dt>
                    <dd>
                      <img alt="Gota" src="resources/Icons/agua-activa.png">
                      <img alt="Gota" src="resources/Icons/agua-activa.png">
                      <img alt="Gota" src="resources/Icons/agua-inactiva.png" class="inactive">
                    </dd>
                  </div>
                  <div class="amounts" id="light">
                    <dt class="amount">Luz</dt>
                    <dd>
                      <img alt="Sol" src="resources/Icons/luz-activa.png">
                      <img alt="Sol" src="resources/Icons/luz-inactiva.png" class="inactive">
                      <img alt="Sol" src="resources/Icons/luz-inactiva.png" class="inactive">
                    </dd>
                  </div>
                  <div class="amounts" id="care">
                    <dt class="amount">Cuidado</dt>
                    <dd>
                      <img alt="Semaforo" src="resources/Icons/cuidado-activa.png">
                      <img alt="Semaforo" src="resources/Icons/cuidado-activa.png">
                      <img alt="Semaforo" src="resources/Icons/cuidado-inactiva.png" class="inactive">
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
                <img alt="Plant Name" src="resources/Images/agave-azul.png">
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
                <img class="modal-statistics-button" alt="Estadísticas" src="resources/Icons/estadisticas.png">
                <img class="modal-description-button" id="modal-description-button" alt="Descripción" src="resources/Icons/descripcion.png">
                <input type="image" id="flip-button" class="flip-button" alt="Regresar" src="resources/Icons/Regresar.png">
              </div>
            </article>
          </li>` 
    //---------------------------------------------------------------------------------------------------------    //<!-- Modals -->

    const descriptionModal = document.createElement('dialog');
    //console.log(descriptionModal);

    descriptionModal.innerHTML+= 
          `<dialog class="modal-boxes> 
            <article id="description-modal" class="description-modal">
              <h3>${element.name}</h3>
              <p>${element.description}</p>
            </article>`

    //--------------------------------------------------------------------------------------------------------

    const statsModal= document.createElement('article');
            
    statsModal.innerHTML+=
            `<article id="statistics-modal" class="statistics-modal"> 
              <h3>${element.categoryPlant}</h3>
              <div class="statistics">
                <div class="graph-legend">
                  <div class="legend">
                    <div class="water-square"></div>
                    <p>Agua</p>
                  </div>
                  <div class="legend">
                    <div class="light-square"></div>
                    <p>Luz</p>
                  </div>
                  <div class="legend">
                    <div class="care-square"></div>
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
            </article>
          </dialog>`

    //-------------------------------------------------------------------------------------------------------

    //cardItem is created as a child of cardList
    cardList.appendChild(cardItem);
    cardList.appendChild(descriptionModal);
    cardList.appendChild(statsModal);

    //----------------------------------------------------------------------------------------------------------

    const btnOpenModal = document.querySelectorAll('.modal-description-button');
    //console.log(btnOpenModal);
    const btnOpenStatsModal = document.querySelectorAll('.modal-statistics-button');
    //console.log(btnOpenStatsModal);
    const myModals = document.querySelectorAll('.description-modal');
    //console.log(myModals);
    const myStatsModals = document.querySelectorAll('.statistics-modal');
    //console.log(myStatsModals);
    
    btnOpenModal.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        myModals[index].style.display = "block";
      });
    
      document.addEventListener("click", (event) => {
        if (event.target === myModals[index]) {
          myModals[index].style.display = "none";
        }
      });
    });
    
    btnOpenStatsModal.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        myStatsModals[index].style.display = "block";
      });
    
      document.addEventListener("click", (event) => {
        if (event.target === myStatsModals[index]) {
          myStatsModals[index].style.display = "none";
        }
      });
    });

    //------------------------------------------------------------------------------------------------------------
    //llamar a funcion computeStats para hacer el calculo y wordSelection
    //seleccionar donde se va a mostrar la estadistica 
    //insertar el calculo usando innerHTML o textContent

    myStatsModals.forEach((modal) =>{
    
      const averageWater= computeStats(data, "waterAmount");
      const wordWater= wordSelection(averageWater);
      //console.log(averageWater);
      //console.log(wordWater);
  
      const averageLight= computeStats(data, "sunLight");
      const wordLight = wordSelection(averageLight);
      //console.log(averageLight);
      //console.log(wordLight);
  
      const averageCare= computeStats(data, "careDifficulty");
      const wordCare= wordSelection(averageCare);
      //console.log(averageCare);
      //console.log(wordCare);
  
      const agua=modal.querySelector(".water");
      agua.textContent=`${wordWater}`;
      //console.log(agua);
      const luz= modal.querySelector(".light");
      luz.textContent=`${wordLight}`;
      //console.log(luz);
      const cuidado= modal.querySelector(".care"); 
      cuidado.textContent=`${wordCare}`;
      //console.log(cuidado);
    })

    //-----------------------------------------------------------------------------------------------------
    const water = element.facts.waterAmount;
    //console.log(water);
    const light = element.facts.sunLight;
    //console.log(light);
    const care = element.facts.careDifficulty;
    //console.log(care);
  
    function actualizarImagenes(fact, firstImage, secondImage, thirdImage, id) {
      const { activo, inactivo } = determinarImagen(id);
  
      if (fact === 1) {
        firstImage.src = activo;
        secondImage.src = inactivo;
        thirdImage.src = inactivo;
      } else if (fact === 2) {
        firstImage.src = activo;
        secondImage.src = activo;
        thirdImage.src = inactivo;
      } else if (fact === 3) {
        firstImage.src = activo;
        secondImage.src = activo;
        thirdImage.src = activo;
      }
      //console.log(actualizarImagenes);
  
    }
  
    // Imagenes.agua
    const firstImageWater = cardItem.querySelector("#minimum-water");
    //console.log(firstImageWater);
    const secondImageWater = cardItem.querySelector("#medium-water");
    //console.log(secondImageWater);
    const thirdImageWater = cardItem.querySelector("#maximum-water");
    //console.log(thirdImageWater);
  
    actualizarImagenes(water, firstImageWater, secondImageWater, thirdImageWater, "agua");
  
    // Imagenes.luz
    const firstImageLight = cardItem.querySelector("#minimum-light");
    //console.log(firstImageLight);
    const secondImageLight = cardItem.querySelector("#medium-light");
    //console.log(secondImageLight);
    const thirdImageLight = cardItem.querySelector("#maximum-light");
    //console.log(thirdImageLight);
  
    actualizarImagenes(light, firstImageLight, secondImageLight, thirdImageLight, "luz");
  
    // Imagenes.cuidado
    const firstImageCare = cardItem.querySelector("#minimum-care");
    //console.log(firstImageCare);
    const secondImageCare = cardItem.querySelector("#medium-care");
    //console.log(secondImageCare);
    const thirdImageCare = cardItem.querySelector("#maximum-care");
    //console.log(thirdImageCare);
  
    actualizarImagenes(care, firstImageCare, secondImageCare, thirdImageCare, "cuidado");

    //------------------------------------------------------------------------------------------------------------

  });
  return cardList;
};