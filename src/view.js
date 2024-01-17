export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let html = ""; //contenedor
  data.forEach((cartas) => { // iterar datos, recorrer los datos  dl = define lista  dd = descripcion
    html += `                 
    <ul>
    <li class="card" itemscope itemtype="Cards">
    <dl>
      <dd class="imagen" itemprop="imagenUrl">
        <img class="img-card" src=${cartas.imageUrl} alt=${cartas.name}>
      </dd>
      <div class="cardInfo">
      <dt></dt><dd class="cardName" itemprop="name">${cartas.name} </dd>
      <dt></dt><dd class="cardDescription" itemprop="description">${cartas.shortDescription}</dd>
      </div>
    </dl> 
    </li>
    </ul>`
    //
  });

  
  return html


};


