import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';

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
  window.location.reload()
}

window.refreshPage=refreshPage;

//-------------------------------------------------------------------------------------------------------------
//seleccionar donde se va a mostrar la estadistica 
//llamar a funcion computeStats para hacer el calculo 
//insertar el calculo usando innerHTML o textContent

//en vez de el numero entero que se muestre (poca, medio,mucha)
//funcion para determinar la palabra 
//recibir el promedio y dependiendo de este me retorna la palabra
const mostrarPalabra = function (promedio){
  if (promedio===1){
    return "Poca"
  }
  else if(promedio===2){
    return "Regular"
  }
  else if(promedio===3){
    return "Mucha"
  }
  return mostrarPalabra;
}

const promedioAguaGeneral= computeStats(data, "waterAmount");
const palabraAgua= mostrarPalabra(promedioAguaGeneral);
console.log(promedioAguaGeneral);
console.log(palabraAgua);

const promedioLuzGeneral= computeStats(data, "sunLigth");
const palabraLuz = mostrarPalabra(promedioLuzGeneral);
console.log(promedioLuzGeneral);
console.log(palabraLuz);

const promedioCuidadoGeneral= computeStats(data, "careDifficulty");
const palabracuidado= mostrarPalabra(promedioCuidadoGeneral);
console.log(promedioCuidadoGeneral);
console.log(palabracuidado);

document.querySelector("#promedioAgua").textContent=`Promedio de agua: ${palabraAgua}`;
document.querySelector("#promedioLuz").textContent=`Promedio de Luz: ${palabraLuz}`;
document.querySelector("#promedioCuidado").textContent=`Promedio de Cuidado: ${palabracuidado}`;

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

    //console.log(currentData);

    const promedioAguaCategory= computeStats(currentData, "waterAmount");
    const palabraAgua= mostrarPalabra(promedioAguaCategory);
    //console.log(promedioAguaGeneral);

    const promedioLuzCategory= computeStats(currentData, "sunLigth");
    const palabraLuz = mostrarPalabra(promedioLuzCategory);
    //console.log(promedioLuzGeneral);

    const promedioCuidadoCategory= computeStats(currentData, "careDifficulty");
    const palabracuidado= mostrarPalabra(promedioCuidadoCategory);
    //console.log(promedioCuidadoGeneral);
    document.querySelector("#promedioAgua").textContent=`Promedio de agua: ${palabraAgua}`;
    document.querySelector("#promedioLuz").textContent=`Promedio de Luz: ${palabraLuz}`;
    document.querySelector("#promedioCuidado").textContent=`Promedio de Cuidado: ${palabracuidado}`;

    clearView();
    renderItems(currentData);
  });
});

//Esta función limpia la pantalla
//Se debe llamar antes de cambiar el valor de currentData
//para que no se sobreescriban los elementos del objeto
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
//cuando el usuario de enter
function filterByName()
{
  const inputName = document.getElementById('inputName');
  const inputReceive = inputName.value;
  //usar toUpperCase por si el usuario introduce la primera letra en minuscula
  //seleccionar la primera letra 
  //usar el metodo y guardar el nombre corregido en otra variable
  //pasarle esa ultima variable a la funcion 

  const firstLetter = inputReceive[0].toUpperCase();
  //console.log(firstLetter);
  const inputCorrected= firstLetter + inputReceive.slice(1)
  //console.log(inputCorrected);

  const filteredName = filterData(clonedData, 'name', inputCorrected); //revisar este data
  //console.log(inputName.value);
  clearView();
  renderItems(filteredName);
}

//Recordatorio: tener en cuenta los comportamientos por default
//(Cuando presionas la tecla Enter en un formulario, se activa el evento
//de envío del formulario (submit). Si no se previene este comportamiento predeterminado,
//la página se recargará y tu script de JavaScript se reiniciará.)
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
//Se declara una variable que llama al botón de ordenar
const dropdown = document.getElementById("itemOrder");
//A esa variable se le agrega el evento change
dropdown.addEventListener("change", () => {
  //Se declára una variable con el valor de dropdown aplicandole el metodo selectedIndex
  //el cual indica cuál de las opciones se han seleccionado
  const i = dropdown.selectedIndex;
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

//   //si se selecciona el indice 1
//   if (i === 1) {
//     //Actualiza el valor de active sorting a 1
//     activeSorting = i;
//     //Y se ejecuta la funcion sortData a curreantData, usando los ids y con el orden 1 (al derecho a-z) 
//     sortData(currentData, "id", 1);
//     //Se limpia la página
//     clearView();
//     //Y se ejecula la funcion renderItems con current data actualizado
//     renderItems(currentData);
//     //Si se selecciona el indice 2 se ejecuta lo mismo pero con el orden 2 (al reves z-a)
//   } else if (i === 2) {
//     activeSorting = i;
//     sortData(currentData, "id", 2);
//     // console.log("reves");
//     // console.log(descending);
//     clearView()
//     renderItems(currentData);
//   } else if (i === 3) {
//     clearView();
//     renderItems(clonedData);
//   }
// });

//------------------------------------------------------------------------------------------------------------

//Delegacion de eventos
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
    turnCard(cardContainer); 
  }
});

function turnCard(cardContainer) 
{
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card");
  //alterar la propiedad "display" para ocultar y mostrar diferentes partes de la tarjeta
  // Alternar la clase 'hide' entre la parte posterior y frontal de la tarjeta
  backCard.classList.toggle('hide');
  frontCard.classList.toggle('hide');
}

/*function returnCard (cardContainer)
{
  //lo mismo, pero al reves xd 
  const frontCard=cardContainer.querySelector("#front-card");
  const backCard=cardContainer.querySelector("#back-card")
  backCard.classList.add('hide');
  frontCard.classList.remove('hide');
}*/

//-----------------------------------------------------------------------------------------------------------------

/*

//necesitas que se aplique a todas las tarjetas 
//seleccionarlas (clase comun?) 
//se devuelve un objeto
const containers =document.getElementsByClassName('card-container');
console.log(containers);
//se convierte en un array y se itera con forEach
Array.from(containers).forEach(container => {

  const index = Array.from(containers).indexOf(container);
  // ccceder a la información de la tarjeta actual en currentData
  const currentDataItem = currentData[index];
  const facts = currentDataItem.facts;

  const water = facts.waterAmount;
  console.log(water);
  const ligth = facts.sunLigth;
  console.log(ligth);
  const care = facts.careDifficulty;
  console.log(care);


  function determinarImagen(id) {
    let activo;
    let inactivo;

    if (id==="agua") {
      activo = "resources/Icons/agua-activa.png";
      inactivo = "resources/Icons/agua-inactiva.png";
    } else if (id==="luz") {
      activo = "resources/Icons/luz-activa.png";
      inactivo = "resources/Icons/luz-inactiva.png";
    } else if (id==="cuidado") {
      activo = "resources/Icons/cuidado-activa.png";
      inactivo = "resources/Icons/cuidado-inactiva.png";
    }
    return { activo, inactivo };
  }


  function actualizarImagenes(fact, firstImage, secondImage, thirdImage, id) {
    const { activo, inactivo } = determinarImagen(id);

    if (fact === 1) {
      firstImage.src = activo;
      secondImage.src = inactivo;
      thirdImage.src = inactivo;
    } else if (fact === 2) {
      firstImage.src = activo;
      secondImage.src = activo;
      thirdImage.src = inactivo;
    } else if (fact === 3) {
      firstImage.src = activo;
      secondImage.src = activo;
      thirdImage.src = activo;
    }
    console.log(actualizarImagenes);

  }

  // Imagenes.agua
  const firstImageWater = container.querySelector("#minimo-agua");
  console.log(firstImageWater);
  const secondImageWater = container.querySelector("#medio-agua");
  console.log(secondImageWater);
  const thirdImageWater = container.querySelector("#alto-agua");
  console.log(thirdImageWater);

  actualizarImagenes(water, firstImageWater, secondImageWater, thirdImageWater, "agua");

  // Imagenes.luz
  const firstImageLigth = container.querySelector("#minimo-luz");
  console.log(firstImageLigth);
  const secondImageLigth = container.querySelector("#medio-luz");
  console.log(secondImageLigth);
  const thirdImageLigth = container.querySelector("#alto-luz");
  console.log(thirdImageLigth);

  actualizarImagenes(ligth, firstImageLigth, secondImageLigth, thirdImageLigth, "luz");

  // Imagenes.cuidado
  const firstImageCare = container.querySelector("#minimo-cuidado");
  console.log(firstImageCare);
  const secondImageCare = container.querySelector("#medio-cuidado");
  console.log(secondImageCare);
  const thirdImageCare = container.querySelector("#alto-cuidado");
  console.log(thirdImageCare);

  actualizarImagenes(care, firstImageCare, secondImageCare, thirdImageCare, "cuidado");

});

*/
//---------------------------------------------------------------------------------------------------------------
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