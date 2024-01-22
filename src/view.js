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
        <button class="card-button" onclick="togglePopup(this)" >Ver mas</button>
      </div>
      <div class="popup-box">
        <div class="popup-content">
          <div class="pop-header">
            <dd class="cardName" itemprop="name">${cartas.name} </dd>
            <dt></dt><dd class="inactiva" itemprop="shortdescription">${cartas.shortDescription}</dd>
          </div>
          <div class="popup-body">
            <dt></dt><dd class="inactiva" itemprop="description">${cartas.description}</dd> 
            <dt></dt><dd class="inactiva" itemprop="elemnt">${cartas.elementEsencial}</dd>
            <dt></dt><dd class="inactiva" itemprop="power">${cartas.facts.powerFul}</dd>
            <dt></dt><dd class="inactiva" itemprop="danger">${cartas.extraInfo.isDangerous}</dd>
          </div>
          <div class="popup-footer">
            <button onclick="closePopup()" class="popup-close-btn inactiva"   >X</button>
          </div>
        </div>
      </div>
      </dl> 
    </li>
    </ul>`
    
  });

  return html
};




