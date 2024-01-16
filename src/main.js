import { renderItems } from './view.js';
import data from './data/datasetAI.js';

//Para mostrar las tarjetas
//guardar la ul con los items en una variable
const cards=renderItems(data);
//seleccionar el lugar donde se va a imprimir la data ("main")
//se puede usar appenChild nuevamente con agregar la ul como hijo del elemento main
document.body.appendChild(cards);


//Funcionalidad al boton "Detalles" para mostrar el resto de la informacion
//seleccionar el boton (hay que encontrar otra forma :')
const seeDetailsButton = document.getElementById("front-card").getElementsByClassName("button-container");
const returnBotton= document.getElementById("back");

//agregar un event listener al los botones 
// el evento a escuchar seria un click 
seeDetailsButton[0].addEventListener('click',turnCard);
returnBotton.addEventListener('click',returnCard);

// 'isFlipped' va a ser una variable que controla el estado de la tarjeta
let isFlipped = false;
const frontCard=document.getElementById("front-card");
const backCard=document.getElementById("back-card");

//al hacer click se ejecuta la funcion que debe hacer girar la tarjeta 
function turnCard() {
//alterar la propiedad "display" para ocultar y mostrar diferentes partes de la tarjeta
  if (isFlipped) {
    // Alternar la clase 'hide' en la parte posterior de la tarjeta.
    backCard.classList.toggle('hide');
    frontCard.classList.toggle('hide');
  }
  isFlipped = !isFlipped
}

function returnCard (){
  if(!isFlipped){
    backCard.classList.toggle('hide');
    frontCard.classList.toggle('hide');
    isFlipped = !isFlipped
  }
}