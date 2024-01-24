import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';

//------------------------------------------------------------------------------------------------------------
//Para mostrar las tarjetas
//guardar la ul con los items en una variable
const cards=renderItems(data);
//seleccionar el lugar donde se va a imprimir la data ("main")
//document.body.appendChild(cards) 
// lo anterior hacerlo con query selector o getElementbyId** (recomendacion de coach)
const mainContainer=document.querySelector("#root");
//se puede usar appenChild nuevamente y agregar la ul como hijo del elemento de id root
mainContainer.appendChild(cards);

//--------------------------------------------------------------------------------------------------------------
//se agrego clase comun a los botones para agregarles el listener a todos de un solo
//al hacer click en alguno de ellos se va a ejecutar la funcion definida
// identificar a que boton se le dio click
//llamar a la funcion de filtrado para que cree el nuevo array con la categoria que fue identificada
const categoryButtons=document.querySelectorAll('.category');
categoryButtons.forEach(button => 
{
  button.addEventListener('click',(e)=> 
  {
    const category = e.target.getAttribute('data-category');
    const filteredData = filterData(data, 'categoryPlant', category);
    //console.log(filteredData)
    //console.log(e.target)
    clearView();
    renderItems(filteredData);
  });
});
//hay que pasarle la data filtarada a renderItems para que renderice solo esas tarjetas 
//antes habria que limpiar/eliminar todas las tarjetas 
//creo que faltaria un boton para regresar a la vista inicial y que se rendericen todas las tarjetas 
function clearView()
{
  const cardsContainer=document.getElementById("ulCards");
  cardsContainer.innerHTML="";
}

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
  if (event.target.matches('.regresar')) 
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
//Ventanas Modales 
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

// Cierra el modal si se hace clic fuera del contenido del modal
window.onclick = function (event) 
{
  const modal = document.getElementById("myModal");
  if (event.target === modal) 
  {
    modal.style.display = "none";
  }
};

/* Función para ocultar el modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}*/

/*const openModalBtn = document.getElementById("openModalBtn");
openModalBtn.addEventListener("click", ()=>{
  // Función para mostrar el modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
});*/



//---------------------------------------------------------------------------------------------------------------