// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
import { computeStats, dangerousDataFilter, elementDataFilter, sortData, percent } from "./dataFunctions.js";

//------------ funcion para renderizar la data--------------------------------
function renderData(data) {
  const body = document.getElementById("root");
  if (body) {
    const render = renderItems(data);
    body.innerHTML = render;
  }
}

let cardsData = data // variable de la data original - variable global
renderData(data) // Total de la Data renderizada
//--------- filtrado elementos-------
const selectElement = document.querySelector('[data-testid="select-filter"]');
selectElement.addEventListener("change", (event) => {
  const filteredData = elementDataFilter(data, "elementEsencial", event.target.value); //datos que se imprime
  cardsData = filteredData; // asigno nuevo valor de data filtrada
  renderData(cardsData); //vuelves a renderizar la data filtrada en el elemento con id "root". Esto actualizará la vista para mostrar solo los elementos que cumplen con el criterio de filtrado seleccionado por el usuario.
  //console.log(filteredData);
  //console.log(elementDataFilter(data,"elementEsencial","Climáticos"));// data + campo que filtro y el valor que quiero filtrar
});


//----------------- filtrado por carta inofensiva o peligrosa-----------------

let filterDangerous = [];

const selectDangerous = document.querySelector('[data-testid="select-filter2"]');
const text = document.getElementById('text') // para mostrar estadisticas

selectDangerous.addEventListener("change", () => {
  const selected = selectDangerous.options[selectDangerous.selectedIndex].value;
  filterDangerous = dangerousDataFilter(data, "isDangerous", selected);
  cardsData = filterDangerous;
  console.log(selectDangerous.options[selectDangerous.selectedIndex].textContent);
  renderData(cardsData);
  const selectedContent = selectDangerous.options[selectDangerous.selectedIndex].textContent;

  if (selectedContent === 'Inofensiva') {
    text.textContent = `El  ${computeStats(data).promInofensivas}% de cartas son inofensivas` // ${} insertar valores de variables o expresiones dentro de una cadena de texto.
    //console.log(`promedio de : ${computeStats(data).promInofensivas}`);
  } else {
    text.textContent = `El ${computeStats(data).promPeligrosas}% de cartas son peligrosas`
  }
});

//----------------filtro por carta capturada por sakura-------------

/* let filterCaptured = []; */
let filterCapturedPercent = [];

const selectCaptured = document.querySelector(
  '[data-testid="select-estadistic"]'
);
selectCaptured.addEventListener("change", () => {
  filterCapturedPercent = percent(data, "capturedBySyaoran");
  const selectIndex = selectCaptured.options[selectCaptured.selectedIndex].textContent;

  if (selectIndex === "% Cartas capturadas por Sakura") {
    text.textContent = `El porcentaje de cartas capturadas por Sakura es ${filterCapturedPercent.percentSakura}%`;
  } else {
    text.textContent = `El porcentaje de cartas capturadas por Syaoran es ${filterCapturedPercent.percentSyaoran}%`;
  }
  //console.log(selectCaptured.options[selectCaptured.selectedIndex].textContent);
  //console.log(estadisticCaptured);
  //console.log(filterCapturedPercent);
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
// ------ boton de reseteo --- 
const resetBtn = document.querySelector('[data-testid="button-clear"]')
resetBtn.addEventListener('click', () => {
  //console.log(resetBtn);
  cardsData = data;
  renderData(cardsData);
  selectElement[0].selected = true;
  selectDangerous[0].selected = true;
  sortOrden[0].selected = true;
  text.textContent = "";
});

//--------------------- botones  de las cards --------------

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
