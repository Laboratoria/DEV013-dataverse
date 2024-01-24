// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
import { dangerousDataFilter, elementDataFilter } from "./dataFunctions.js";

//------------ funcion para renderizar la data--------------------------------
function renderData(data) {
  const body = document.getElementById("root");
  if (body) {
    const render = renderItems(data);
    body.innerHTML = render;
  }
}

renderData(data); // Total de la Data

//--------- filtrado elementos-------

let filtro = [];

const selectElement = document.querySelector('[data-testid="select-filter"]');
selectElement.addEventListener("change", (event) => {
  filtro = elementDataFilter(data, "elementEsencial", event.target.value); //datos que se imprime
  renderData(filtro);

  console.log(filtro);
  //console.log(filtro);
  //console.log (filtro = (data,event.target.value));
});
//console.log(elementDataFilter(data,"elementEsencial","Climáticos"));// data + campo que filtro y el valor que quiero filtrar

// function togglePopup(btn) {
//   console.log('adjsksjad');
// }
// const boton = document.getElementsByClassName('card-button');

// let popup = document.getElementById("popup-box");
// function togglePopup(){
//  popup.classList.add("popup-box .hidden");

// }

// function closePopup(){
//  popup.classList.remove("popup-box .hidden");

// }

//----------------- filtrado por carta inofensiva o peligrosa-----------------

let filterDangerous = [];

const selectDangerous = document.querySelector(
  '[data-testid="select-filter2"]'
);
selectDangerous.addEventListener("change", () => {
  const selected = selectDangerous.options[selectDangerous.selectedIndex].value;
  filterDangerous = dangerousDataFilter(data, "isDangerous", selected);

  console.log(filterDangerous);

  renderData(filterDangerous);
});
