export const renderItems = (data) => {
  //crear el contenedor y guardarlo en una variable 
  const cardList = document.createElement('ul');

  //iterar en el arreglo (usar for each)
  // por cada elemento se debe crear un li 
  //cada li debe tener la estructura html predefinida 
  //cada li se debe agregar a la ul 
  //insertar el ul completo al dom 

  /** Template string **/ 
  // container.innerHTML += `<p>${element.name}</p>`

  data.forEach(element => {
    const cardItem = document.createElement('li')

    cardItem.innerHTML += `<li class="card-container" itemscope itemtype="https://schema.org">
    <article id="front-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org">
          <dt itemprop="water-amount" class="amount">Water</dt>
            <dd>
              <img alt="Gota" src="${element.facts.water}" width="30px" height="30px">
              <img alt="Gota" src="${element.facts.water}" width="30px" height="30px">
              <img alt="Gota" src="${element.facts.water}" class="inactiva" width="30px" height="30px">
            </dd>
          <dt itemprop="light-amount" class="amount">Light</dt>
            <dd>
              <img alt="Sol" src="${element.facts.sunLigth}" width="30px" height="30px">
              <img alt="Sol" src="${element.facts.sunLigth}" class="inactiva" width="30px" height="30px">
              <img alt="Sol" src="${element.facts.sunLigth}" class="inactiva" width="30px" height="30px">
            </dd>
          <dt itemprop="care-amount" class="amount">Care</dt>
            <dd>
              <img alt="Semaforo" src="${element.facts.careDifficulty}" width="30px" height="30px">
              <img alt="Semaforo" src="${element.facts.careDifficulty}" width="30px" height="30px">
              <img alt="Semaforo" src="${element.facts.careDifficulty}" class="inactiva" width="30px" height="30px">
            </dd>
        </dl>
      </div>
      <p>${element.shortDescription}</p>
      <div class="button-container">
        <button>Detalles</button>
      </div>
    </article>
    <article id="back-card">
      <h2>${element.name}</h2>
      <div class="top-card">
        <img alt="Plant Name" src="${element.imageUrl}">
        <dl itemscope itemtype="https://schema.org">
          <dt>${element.scientificName}</dt>
          <dt class="detail">Botanical Family</dt><dd>${element.botanicalFamily}</dd>
          <dt class="detail">Usage</dt><dd>${element.applications}</dd>
          <dt class="detail">Climate data</dt><dd>${element.climaticData}</dd>
        </dl>
        <dl id="description">
          <dt>Description</dt><dd>${element.description}</dd>
          <dt>Maintenance</dt><dd>${element.maintenance}</dd>
        </dl>
      </div>
      <div id="icons">
        <div class="stats">
          <img class="stats1" alt="Estadisticas 1" src="resources/Icons/estadisticas-1.png">
          <img class="stats2" alt="Estadisticas 1" src="resources/Icons/estadisticas-2.png">
        </div>
        <div class="back">
          <img alt="Regresar" src="resources/Icons/Regresar.png">
        </div>
      </div>
    </article>
  </li>`

    cardList.appendChild(cardItem);

  });
  
  return cardList;
};