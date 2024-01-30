// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
import {
  dangerousDataFilter,
  elementDataFilter,
  sortData,
  percent,
} from "./dataFunctions.js";
//------------ funcion para renderizar la data--------------------------------
function renderData(data) {
  const body = document.getElementById("root");
  if (body) {
    const render = renderItems(data);
    body.innerHTML = render;
  }
}

let cardsData = data; // variable de la data original - variable global
renderData(data); // Total de la Data renderizada

//--------- filtrado elementos-------
const selectElement = document.querySelector('[data-testid="select-filter"]');
selectElement.addEventListener("change", (event) => {
  const filteredData = elementDataFilter(
    data,
    "elementEsencial",
    event.target.value
  ); //datos que se imprime
  cardsData = filteredData; // asigno nuevo valor de data filtrada
  renderData(filteredData); //vuelves a renderizar la data filtrada en el elemento con id "root". Esto actualizará la vista para mostrar solo los elementos que cumplen con el criterio de filtrado seleccionado por el usuario.
  //console.log(filteredData);
  //console.log (filteredData = (data,event.target.value));
});
//console.log(elementDataFilter(data,"elementEsencial","Climáticos"));// data + campo que filtro y el valor que quiero filtrar

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

//----------------filtro por carta capturada por sakura-------------

/* let filterCaptured = []; */
let filterCapturedPercent = [];

const selectCaptured = document.querySelector(
  '[data-testid="select-estadistic"]'
);
selectCaptured.addEventListener("change", () => {
  /* filterCaptured = estadisticFilter(
    data,
    "capturedBySyaoran",
    event.target.value
  ); */
  filterCapturedPercent = percent(data, "capturedBySyaoran");

  const estadisticCaptured = document.getElementById("estadistic");

  const selectIndex =
    selectCaptured.options[selectCaptured.selectedIndex].textContent;

  if (selectIndex === "% Cartas capturadas por Sakura") {
    estadisticCaptured.textContent = `El porcentaje de cartas capturadas por Sakura es ${filterCapturedPercent.percentSakura}%`;
  } else {
    estadisticCaptured.textContent = `El porcentaje de cartas capturadas por Sakura es ${filterCapturedPercent.percentSyaoran}%`;
  }

  console.log(selectCaptured.options[selectCaptured.selectedIndex].textContent);
  console.log(estadisticCaptured);
  console.log(filterCapturedPercent);
});

//---------------- estadisticas de cartas capturadas -------------

//--------- ordenar-------
const sortOrden = document.querySelector('[data-testid="select-sort"]');
sortOrden.addEventListener("change", (e) => {
  const sortedData = sortData(cardsData, "name", e.target.value);
  console.log(sortedData);
  cardsData = sortedData;
  renderData(sortedData);
});

//--------------------- botones --------------

const popup = document.querySelectorAll(".popup-box");
const btn = document.querySelectorAll(".card-button");
const btnClose = document.querySelectorAll(".popup-close-btn");
btn.forEach(function (button, index) {
  button.addEventListener("click", function () {
    popup[index].style.display = "block";
  });
});

//agregar fuera de la ventana cerrar

window.onclick = function (event) {
  popup.forEach(function (popup) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
//agregar boton cierre

btnClose.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    const popups = closeButton.closest(".popup-box");
    if (popups) {
      popups.style.display = "none";
    }
  });
});
