export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let html = ""; //contenedor
  data.forEach((cartas) => { // iterar datos, recorrer los datos  dl = define lista  dd = descripcion
    html += `                 
    <dl itemscope itemtype="Cards">
    <dd itemprop="imagenUrl">
    <img class="img-cartas" src=${cartas.imageUrl} alt=${cartas.name}>
    </dd>
    <dt>Nombre:</dt>
    <dd itemprop="name">${cartas.name} </dd>
    <dt>Descripción:</dt>
    <dd itemprop="description">${cartas.shortDescription}</dd>
    <dt>Poder:</dt>
    <dd itemprop="power">${cartas.facts.powerFul}</dd>
    </dl>`
    //
  });
  return html


};


