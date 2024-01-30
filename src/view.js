export const renderItems = (data) => {
  
  //crear el contenedor y guardarlo en una variable 
  const cardList = document.getElementById("ulCards");

  //iterar en el arreglo (usar for each)
  // por cada elemento se debe crear un li 
  //cada li debe tener la estructura html predefinida 
  //cada li se debe agregar a la ul 
  //insertar el ul completo al dom 
  
  data.forEach(element => {
    //Se crea el elemento li
    const cardItem = document.createElement('li');

    //El elemento li se escribe en el DOM
    cardItem.innerHTML +=`<li class="card-container ${element.categoryPlant}" itemscope itemtype="https://schema.org">
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
        <button id="detalles" class="detalles">Detalles</button>
      </div>
    </article>
    <article id="back-card" class="hide" class="back-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" class="bachPlantImage" src="${element.imageUrl}">
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
            <img class="openModalBtn" id="openModalBtn" alt="Descripcion" src="resources/Icons/descripcion.png">
            <div class="back">
            <input type="image" id="Regresar" class="regresar" alt="Regresar"  src="resources/Icons/Regresar.png">
          </div>
          <div id="myModal" class="modal"> 
            <div class="modal-content-description">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
            </div>
          </div>
          <div id="myStatsModal" class="statsModal"> 
            <article class="modal-content-stats">
              <h3>${element.categoryPlant}</h3>
              <div class="factLabels">
                <div class="squares">
                  <div class="area">
                    <div class="square agua"></div>
                    <p>Agua</p>
                  </div>
                  <div class="area">
                    <div class="square luz"></div>
                    <p>Luz</p>
                  </div>
                  <div class="area">
                    <div class="square cuidado"></div>
                    <p>Cuidado</p>
                  </div>
                </div>
                <div class="statsTotals">
                  <h5 class="agua">Mucha</h5>
                  <h5 class="luz">Regular</h5>
                  <h5 class="cuidado">Poca</h5>
                </div>
              </div>
              <h4>Qué cuidados necesita este tipo de plantas?</h4>
            </article>
          </div>
        </div>
      </div>
    </article>
  </li>`

    
    //Calling the elements to give them an onclick event listener
    const btnOpenModal = cardItem.querySelector('.openModalBtn');
    const btnOpenStatsModal = cardItem.querySelector('.stats1');
    const myModal = cardItem.querySelector('.modal')
    const myStatsModal = cardItem.querySelector('.statsModal')

    //This function activates the buttons to open the popups
    btnOpenModal.addEventListener("click", () => 
    {
      myModal.style.display ="block";
    });

    document.addEventListener("click", (event) => {
      if (event.target === myModal) {
        myModal.style.display = "none";
      }
    });

    btnOpenStatsModal.addEventListener("click", () => 
    {
      myStatsModal.style.display ="block";
    });

    document.addEventListener("click", (event) => {
      if (event.target === myStatsModal) {
        myStatsModal.style.display = "none";
      }
    });









    //cardItem is created as a child of cardList
    cardList.appendChild(cardItem);
  });

  return cardList;
};