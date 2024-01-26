import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';

const clonedData = structuredClone(data); //clonar el arreglo de objetos
let currentData = data;
let activeSorting = 0;

//------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
//se agrega clase comun a los botones para agregarle el listener a todos de un solo
//al hacer click en alguno de ellos se va a ejecutar la funcion definida
// identificar a que boton se le dio click
//llamar a la funcion de filtrado para que cree el nuevo array con la categoria que fue identificada
const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => 
{
  button.addEventListener('click',(e)=> 
  {
    const category = e.target.getAttribute('data-category');
    currentData = filterData(data, 'categoryPlant', category);
    //console.log(filteredData)
    //console.log(e.target)
    if (activeSorting === 1) {
      sortData(currentData, "id", 1);
    } else if (activeSorting === 2) {
      sortData(currentData, "id", 2);
    }
    clearView();
    renderItems(currentData);
  });
});
//hay que pasarle la data filtarada a renderItems para que renderice solo esas tarjetas 
//antes habria que limpiar/eliminar todas las tarjetas 
//creo que faltaria un boton para regresar a la vista inicial y que se rendericen todas las tarjetas 
function clearView(){
  const cardsContainer=document.getElementById("ulCards");
  cardsContainer.innerHTML="";
}

//------------------------------------------------------------------------------------------------------------
//Filtrar por nombre 

//crear una funcion que
//reciba el nombre que proporciona el usuario
//llame a filterdata para buscarlo 
//limpie la interfaz
// y se lo pase a render items para que solo muestre esa tarjeta 
//donde debo llamarla? cuando el usuario de enter o click en boton submit?
function filterByName()
{
  const inputName = document.getElementById('inputName');
  const inputReceive = inputName.value;
  const filteredName = filterData(clonedData, 'name', inputReceive); //revisar este data
  //console.log(inputName.value);
  clearView();
  renderItems(filteredName);
}

//Recordatorio: tener en cuenta los comportamientos por default ( Cuando presionas la tecla Enter en un formulario, se activa el evento de envío del formulario (submit). Si no se previene este comportamiento predeterminado, la página se recargará y tu script de JavaScript se reiniciará.)
//decirle que en vez de su comportamiento por default ejecute filterByName
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  filterByName();
});

const inputName = document.getElementById('inputName');
inputName.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filterByName();
  }
});

//-----------------------------------------------------------------------------------------------------------
//llamar a la funcion para ordenar
const dropdown = document.getElementById("itemOrder");
dropdown.addEventListener("change", () => {
  const i = dropdown.selectedIndex;

  if (i === 1) {
    activeSorting = 1;
    sortData(currentData, "id", 1);
    // console.log("derecho");
    // console.log(ascending);
    clearView();
    renderItems(currentData);
  } else if (i === 2) {
    activeSorting = 2;
    sortData(currentData, "id", 2);
    // console.log("reves");
    // console.log(descending);
    clearView();
    renderItems(currentData);
  } else if (i === 3) {
    clearView();
    renderItems(clonedData);
  }
});

//------------------------------------------------------------------------------------------------------------
//Delegacion de eventos (intento xd)
//Funcion para hacer girar las tarjetas
const princContainer = document.getElementById("ulCards");
princContainer.addEventListener("click",(event) => 
{
  const cardContainer= event.target.closest('.card-container');
  if(event.target.matches('.detalles')) 
  {
    turnCard(cardContainer);
  }
  else if (event.target.matches('.regresar')) 
  {
    returnCard(cardContainer); 
  }
});

function turnCard(cardContainer) 
{
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");
  //alterar la propiedad "display" para ocultar y mostrar diferentes partes de la tarjeta
  // Alternar la clase 'hide' entre la parte posterior y frontal de la tarjeta
  backCard.classList.remove('hide');
  frontCard.classList.add('hide');
}

function returnCard (cardContainer)
{
  //lo mismo, pero al reves xd 
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card")
  backCard.classList.add('hide');
  frontCard.classList.remove('hide');
}

//-----------------------------------------------------------------------------------------------------------------
/*Ventanas Modales  
//Codigo en view.js
const principal= document.getElementById("ulCards");
principal.addEventListener("click", (event)=>
{
  //const cardContainer= event.target.closest('.card-container');
  if (event.target.matches('.openModalBtn')) 
  {
    const modal = document.querySelector('.modal');
    modal.style.display ="block";
  }
})

//Cierra el modal si se hace clic fuera del contenido del modal
  window.onclick = function (event) 
{
  const modal = document.getElementById("myModal");
  if (event.target === modal) 
  {
    modal.style.display = "none";
  }
};*/

//---------------------------------------------------------------------------------------------------------------