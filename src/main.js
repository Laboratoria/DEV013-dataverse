import { renderItems } from './view.js';
import { filterData, computeStats } from './dataFunctions.js';
import data from './data/dataset.js';

const dataList = document.querySelector("#root");
dataList.appendChild(renderItems(data));

/*const filteredLiteratura = filterData(data, 'mainField', 'Literatura');
console.log(filteredLiteratura);
const filteredPoesía = filterData(data, 'mainField', 'Poesía');
console.log(filteredPoesía);
const filteredPoesiaLiteratura = filterData(data, 'mainField', 'Poesía, Novela');
console.log(filteredPoesiaLiteratura);*/

//filterData
//selecciona los elementos select
const filterSelectors = [
  { selector: '[data-testid="filter-type"]', property: "mainField" },
  { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
  //{selctor:'[data-testid="select-sort]', property:"name"},
];

// Agregar EventListenerpara los select
filterSelectors.forEach(({ selector }) => {
  const selectElement = document.querySelector(selector);
  selectElement.addEventListener("change", applyFilters);
});

//  EventListener para el botón de limpiar
const btnClear = document.getElementById("button-clear");
btnClear.addEventListener("click", function () {
  // Limpia los filtros y renderiza los datos originales
  resetFilters();
});

// Función para restablecer los filtros
function resetFilters() {
  // Recorre los selectores y establece sus valores en vacío
  filterSelectors.forEach(({ selector }) => {
    document.querySelector(selector).value = "";
  });
  dataList.innerHTML = "";
  dataList.appendChild(renderItems(data));
}

// Función para aplicar los filtros
function applyFilters() {
  // Obtiene los valores seleccionados de los elementos select
  const filters = filterSelectors.map(({ selector, property }) => ({
    property,
    value: document.querySelector(selector).value,
  }));

  // Realiza el filtrado de datos
  let filteredData = [...data];
  filters.forEach(({ property, value }) => {
    if (value) {
      filteredData = filterData(filteredData, property, value);
    }
  });

  // Limpia la lista antes de renderizar
  dataList.innerHTML = "";

  // Renderiza los datos filtrados
  dataList.appendChild(renderItems(filteredData));
}

//estadísticas

const buttonFacts = document.getElementById("button-facts");

// Agrega un event listener
buttonFacts.addEventListener("click", (e) => {
  e.preventDefault();
  dataList.innerHTML = "";
  filterSelectors.innerHTML = "Facts";
  dataList.appendChild(renderItems());
  const data = document.querySelector("#data");
  data.textContent = "Sabías qué " + computeStats(data, "mainField") + "---------";
  const result = document.querySelector()
});


