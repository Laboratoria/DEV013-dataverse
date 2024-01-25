import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';

const originalData = structuredClone(data); //clonar el arreglo de objetos
let currentData = data;

//Para mostrar las tarjetas
//guardar la ul con los items en una variable
const cards=renderItems(currentData);
//seleccionar el lugar donde se va a imprimir la data ("main")
//document.body.appendChild(cards) 
// lo anterior hacerlo con query selector o getElementbyId** (recomendacion de coach)
const mainContainer=document.querySelector("#root");
//se puede usar appenChild nuevamente y agregar la ul como hijo del elemento de id root
mainContainer.appendChild(cards);

function refreshPage() {
  window.location.reload()
}

window.refreshPage=refreshPage;

//usar onClick en cada boton descartado 
//se agrego clase comun a los botones para agregarles el listener a todos de un solo
//al hacer click en alguno de ellos se va a ejecutar la funcion definida
// identificar a que boton se le dio click
//llamar a la funcion de filtrado para que cree el nuevo array con la categoria que fue identificada
const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => {
  button.addEventListener('click',(e)=> {
    const category = e.target.getAttribute('data-category');
    currentData = filterData(data, 'categoryPlant', category);
    //console.log(filteredData)
    //console.log(e.target)
    clearView();
    renderItems(currentData);
  });
});
//hay que pasarle la data filtarada a renderItems para que renderice solo esas tarjetas 
//antes habria que limpiar/eliminar todas las tarjetas 
//creo que faltaria un boton para regresar a la vista inicial y que se rendericen todas las tarjetas 
export function clearView(){
  const cardsContainer=document.getElementById("ulCards");
  cardsContainer.innerHTML="";
}

const dropdown = document.getElementById("itemOrder");
dropdown.addEventListener("change", () => {
  const i = dropdown.selectedIndex;

  if (i === 1) {
    sortData(currentData, "id", 1);
    // console.log("derecho");
    // console.log(ascending);
    clearView();
    renderItems(currentData);
  } else if (i === 2) {
    sortData(currentData, "id", 2);
    // console.log("reves");
    // console.log(descending);
    clearView();
    renderItems(currentData);
  } else if (i === 3) {
    // console.log("aleatorio"); //regresar a caregorías en desorden
  } else if (i === 4) {
    clearView();
    currentData = originalData;
    renderItems(currentData);
  }
});




















//-----------------------------------------------------------------------------------------------------------------
//Esta solo nos funcionaba en la plantilla

/*//Funcionalidad al boton "Detalles" para mostrar el resto de la informacion
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
}*/
 
//-----------------------------------------------------------------------------------------------------------------
//Intento de usar delegacion de eventos 

//Intentando aplicar las funciones a todas las tarjetas 
//Delegacion de eventos

/*const mainContainer = document.getElementById("root");
mainContainer.addEventListener('click', function(e){
  if(e.target.matches('.button-container')) {
    const card=e.target.closest('.card-container');
    turnCard(card);
    if (e.target.matches('.back')) {
      const card=e.target.closest('.card-container');
      returnCard(card); 
    }
  }
})
function turnCard(card) {
  const frontCard=card.querySelector(".front-card");
  const backCard=card.querySelector(".back-card");
  let isCardFlipped = card.dataset.isFlipped === 'true';

  if (!isCardFlipped) {
    backCard.classList.toggle('hide');
    frontCard.classList.toggle('hide');
    card.dataset.isFlipped = 'true';
  }
} 
function returnCard (card){
  const frontCard=card .querySelector(".front-card");
  const backCard=card.querySelector(".back-card");
  let isCardFlipped = card.dataset.isFlipped === 'true';

  if(isCardFlipped){
    backCard.classList.toggle('hide');
    frontCard.classList.toggle('hide');
    card.dataset.isFlipped = 'false';
  }
}*/
