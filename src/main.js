import { renderItems } from './view.js';
import data from './data/datasetAI.js';

//seleccionar el lugar donde se va a imprimir la data (puede ser con query selector)

const cards=renderItems(data);

document.main.appendChild(cards);

//seleccionar el boton 
//agregar un event listener al los botones 
// el evento a escuchar seria un click 
//al hacer click se ejecuta la funcion que debe hacer girar la tarjeta 

function turnCard() {

}


button-container.addEventListener('click',turnCard)



//document.querySelector('#root').appendChild(renderItems(data));

document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = renderItems(data);

  // para que se agregue las tarjetas como hijas del elemento main
  document.body.appendChild(tarjetas);  
});
