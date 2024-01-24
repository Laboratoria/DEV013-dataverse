export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  let html = ""; //contenedor
  data.forEach((cartas) => { // iterar datos, recorrer los datos  dl = define lista  dd = descripcion
    html += `                 
    <ul>
    <li class="card" itemscope itemtype="Cards">
    <dl>
    <div class="card-front active">
      <dd class="img-container" itemprop="imagenUrl">
        <img class="img-card" src=${cartas.imageUrl} alt=${cartas.name}>
      </dd>
        <dd class="cardName" itemprop="name">${cartas.name} </dd>
        <dd class="cardDescription" itemprop="shortdescription">${cartas.shortDescription}</dd>
        <button class="card-button">Ver mas</button>
    </div>
      <div class="popup-box">
        <div class="popup-content">
          <div class="pop-header">
            <dd class="cardNameUp" itemprop="name">${cartas.name} </dd>
            <dt></dt><dd class="popupShortDescription" itemprop="shortdescription">${cartas.shortDescription}</dd>
          </div>
          <dd class="img-ContentBody" itemprop="imagenUrl">
          <img class="imgBody" src=${cartas.imageUrl} alt=${cartas.name}>
          </dd>
          <div class="popup-body">
            <dt>Descripción</dt><dd class="inactiva" itemprop="description">${cartas.description}</dd> 
            <dt>Elemento:</dt><dd class="inactiva" itemprop="elemnt">${cartas.facts.elementEsencial}</dd>
            <dt>Poder:</dt><dd class="inactiva" itemprop="power">${cartas.facts.powerFul}</dd>
            <dt>Peligro:</dt><dd class="inactiva" itemprop="danger">${cartas.extraInfo.isDangerous}</dd>
          </div>
          <div class="popup-footer">
            <button  class="popup-close-btn">Close</button>
          </div>
        </div>
      </div>
      </dl> 
    </li>
    </ul>`
    
  });

  return html
};




