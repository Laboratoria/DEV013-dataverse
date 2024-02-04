import { renderItems } from './view-cleaning.js';
import data from './data/dataset.js';
import { filterData } from './data-functions-Cleaning.js';
import { sortData } from './data-functions-Cleaning.js';

const clonedData = structuredClone(data); //clona el arreglo de objetos
let currentData = data;
//Esta variable almacena el valor de la seleccion del boton orderBy
//para que no sea descartado al cambiar de categoría
let activeSorting = 0;

//------------------------------------------------------------------------------------------------------------
//Se declara una variable cuyo valor es la funcion renderItems con el parámetro currentData
const cards=renderItems(currentData);

//Se declara una variable que trae el valor de root
const mainContainer=document.querySelector("#root");

//Se declara cards como hijo de mainContainer
mainContainer.appendChild(cards);

//Esta función refresca la página completa. Se le aplica a los elementos de la sección brand
function refreshPage() {
  window.location.reload();
}
window.refreshPage=refreshPage;

//--------------------------------------------------------------------------------------------------------------

const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => 
{
  button.addEventListener('click',(e)=> 
  {
    const category = e.target.getAttribute('data-category');
    currentData = filterData(data, 'categoryPlant', category);
    if (activeSorting === 1) {
      sortData(currentData, "id", 1);
    } else if (activeSorting === 2) {
      sortData(currentData, "id", 2);
    }

    clearView();
    renderItems(currentData);
    return currentData;
  });
});

//------------------------------------------------------------------------------------------------
//Esta función limpia la pantalla
//Se debe llamar antes de cambiar el valor de currentData
//para que no se sobreescriban los elementos del objeto
function clearView(){
  const cardsContainer=document.getElementById("ul-cards");
  cardsContainer.innerHTML="";
}

//------------------------------------------------------------------------------------------------------
//Filtrar por nombre 

function filterByName(){
  const inputName = document.getElementById('input-name');
  const inputReceive = inputName.value;

  const firstLetter = inputReceive[0].toUpperCase();
  const inputCorrected= firstLetter + inputReceive.slice(1)

  const filteredName = filterData(clonedData, 'name', inputCorrected);
  clearView();
  renderItems(filteredName);
}
//--------------------------------------------------------------------------------------------------------

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  filterByName();
});

const inputName = document.getElementById('input-name');
inputName.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filterByName();
  }
});

//-----------------------------------------------------------------------------------------------------------
//Se declara una variable que llama al botón de ordenar
const dropdown = document.getElementById("item-order");
//A esa variable se le agrega el evento change
dropdown.addEventListener("change", () => {
  //Se declára una variable con el valor de dropdown aplicandole el metodo selectedIndex
  //el cual indica cuál de las opciones se han seleccionado
  const i = dropdown.selectedIndex;
  //si se selecciona el indice 1
  if (i === 3) {
    clearView();
    renderItems(clonedData);
  } else {
    activeSorting = i;
    clearView();
    sortData(currentData, "id", i);
    renderItems(currentData);
  }
});

//------------------------------------------------------------------------------------------------------------

const princContainer = document.getElementById("ul-cards");
princContainer.addEventListener("click",(event) => {
  const cardContainer= event.target.closest('.card-container');
  if(event.target.matches('.details-button')) 
  {
    turnCard(cardContainer);
  }
  else if (event.target.matches('.flip-button')) 
  {
    turnCard(cardContainer); 
  }
});

function turnCard(cardContainer){
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");
  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}

//-----------------------------------------------------------------------------------------------------------------
