export const renderItems = (data) => {
  
  //crear el contenedor y guardarlo en una variable 
  const cardList = document.getElementById("ulCards");

  //iterar en el arreglo (usar for each)
  // por cada elemento se debe crear un li 
  //cada li debe tener la estructura html predefinida 
  //cada li se debe agregar a la ul 
  //insertar el ul completa al dom 

  /** Template string **/ 
  // container.innerHTML += `<p>${element.name}</p>`

  
  data.forEach(element => {
    const cardItem = document.createElement('li');

    cardItem.innerHTML += `<li class="card-container" itemscope itemtype="https://schema.org">
    <article id="front-card" class="front-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org" class="facts">
          <div class="amounts">
            <dt itemprop="water-amount" class="amount">Agua</dt>
              <dd>
                <img alt="Gota" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-activa.png?raw=true" >
                <img alt="Gota" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-activa.png?raw=true" >
                <img alt="Gota" class="inactiva" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/agua-inactiva.png?raw=true" >
              </dd>
          </div>
          <div class="amounts">
            <dt itemprop="light-amount" class="amount">Luz</dt>
              <dd>
                <img alt="Sol" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-activa.png?raw=true" >
                <img alt="Sol" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-inactiva.png?raw=true" >
                <img alt="Sol" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/luz-inactiva.png?raw=true">
              </dd>
          </div>
          <div class="amounts">
            <dt itemprop="care-amount" class="amount">Cuidado</dt>
              <dd>
                <img alt="Semaforo" src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-activa.png?raw=true" >
                <img alt="Semaforo" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-inactiva.png?raw=true" >
                <img alt="Semaforo" class="inactiva"  src="https://github.com/Etelbina/dataverse/blob/main/src/resources/Icons/cuidado-inactiva.png?raw=true" >
              </dd>
          </div>
        </dl>
      </div>
      <p>${element.shortDescription}</p>
      <div class="button-container">
        <button id="detalles" onclick="turnCard(this)" >Detalles</button>
      </div>
    </article>
    <article id="back-card" class="hide" class="back-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org">
          <dt class="scientific">${element.scientificName}</dt>
          <dt class="detail">Familia botánica</dt><dd>${element.botanicalFamily}</dd>
          <dt>Lugar de origen</dt><dd>${element.birthPlace}</dd>
        </dl>
      </div>
      <div class="bottom-card">
        <dl id="description">
        <dt class="detail">Usos</dt><dd>${element.applicationsPlant}</dd>
        <dt>Datos climáticos</dt><dd>${element.climaticData}</dd>
        <dt>Mantenimiento</dt><dd>${element.maintenanceNeeds}</dd>
        </dl>
        <div id="icons">
          <div class="stats">
            <img class="stats1" alt="Estadisticas" src="resources/Icons/estadisticas.png">
            <img class="stats2" alt="Descripcion" src="resources/Icons/descripcion.png">
          <div class="back">
          <input type="image" onclick="returnCard(this)" id="Regresar" name="Regresar" alt="Regresar"  src="resources/Icons/Regresar.png">
          </div>
        </div>
      </div>
    </article>
  </li>`

    cardList.appendChild(cardItem);

  });
  
  return cardList;
};


//al hacer click se ejecuta la funcion que debe hacer girar la tarjeta 

function turnCard(botton) {
  const cardContainer=  botton.closest('.card-container');
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");

  //alterar la propiedad "display" para ocultar y mostrar diferentes partes de la tarjeta
  // Alternar la clase 'hide' entre la parte posterior y frontal de la tarjeta
  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}
 
function returnCard (botton) {
  //lo mismo, pero al reves xd 
  const cardContainer=  botton.closest('.card-container');
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card")

  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}

//hacer las variable globales 
window.turnCard=turnCard;
window.returnCard=returnCard;


//Ventanas Modales/Popup


/*function popUpDescription(botton){
  const popUpDescrip= botton.closest('.card-container');
  const popUp= popUpDescrip.querySelector('popUpDescription');


}

window.popUpDescription=popUpDescription;*/




// import { refreshPage } from './main.js';
// import { sortOrder } from './dataFunctions.js';
// import data from './data/dataset.js';

// const ids = document.getElementById("id");
// const selection = document.getElementById("itemOrder");
// const i = selection.selectedIndex;
// const sorted = sortOrder();

// function sortData(data, sortBy, sortOrder) {

//   if (i === 1) {
//     console.log(derecho);
//     // return derecho;
//     return renderItems(derecho);
//   } else if (i === 2) {
//     console.log(reves);
//     // return reves;
//     return renderItems(reves);
//   } else if (i === 3) {
//     console.log("aleatorio"); //regresar a caregorías en desorden
//   } else {
//     refreshPage();
//   }
// }

// window.sortData=sortData;




