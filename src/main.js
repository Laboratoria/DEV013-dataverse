import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';
import data from './data/dataset.js';

const dataList = document.querySelector("#root");
let result = data;
dataList.appendChild(renderItems(data));

//filterData
//selecciona los elementos select
const filterSelectors = [
  { selector: '[data-testid="filter-type"]', property: "mainField" },
  { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
];

const sortName = document.querySelector('[data-testid="select-sort"]');

// Agregar EventListenerpara los select
filterSelectors.forEach(({ selector }) => {
  const selectElement = document.querySelector(selector);
  selectElement.addEventListener("change", applyFilters);
});

// EventListener para el botón de limpiar
const btnClear = document.getElementById("button-clear");
btnClear.addEventListener("click", function () {
  // Limpia los filtros y renderiza los datos originales
  resetFilters();
  renderItems(data);
  clearStats();

});

// Función para restablecer los filtros
function resetFilters() {// Recorre los selectores y establece sus valores en vacío
  filterSelectors.forEach(({ selector }) => {
    document.querySelector(selector).value = "";
  });
  sortName.value = "none";
  result = sortData(data, "name", "asc");//agregado
  renderDataList();
  
}

// Función para aplicar los filtros
function applyFilters() {
  // Obtén los valores seleccionados de los elementos select
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


  // Realiza el ordenamiento de datos
  //sortName = document.querySelector('[data-testid="select-sort"]');
  const sortOrder = sortName.value;
  result = sortData(filteredData, { sortBy: "name", sortOrder });

  // Renderiza los datos filtrados y ordenados
  renderDataList();
}


// Ordenamiento descendente y ascendente
//sortName = document.querySelector('[data-testid="select-sort"]');
sortName.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  // Realiza acciones con el valor seleccionado, por ejemplo, ordenar los datos
  result = sortData(result, { sortBy: "name", sortOrder: selectedValue });

  // Renderiza los datos filtrados y ordenados
  renderDataList();
});

function renderDataList() { // Función para renderizar la lista con los datos actuales
  dataList.innerHTML = "";
  const resultList = renderItems(result);
  dataList.appendChild(resultList);
}

//// Estadisticas///
const buttonFacts = document.querySelector('[data-testid="button-facts"]');

buttonFacts.addEventListener('click', (e) => {
  const buttonInfo = e.target.dataset.info; // Obtener el valor del atributo data-info
  // Acciones al hacer clic en el botón con el valor obtenido
  const stats = computeStats(data, buttonInfo);
  renderStats(stats);
});

// Función para renderizar las estadísticas en el contenedor
function renderStats(stats) {
  // Obtener la referencia al contenedor de estadísticas por su id
  const statsContainer = document.getElementById('stats-container');
  // Verificar si el contenedor de estadísticas existe
  if (statsContainer) {
    // Limpiar contenido anterior
    statsContainer.innerHTML = '';
    // Mostrar las estadísticas en el contenedor
    statsContainer.appendChild(renderStatsElement(stats));
  } 
}

// Función para renderizar las estadísticas como elementos HTML
function renderStatsElement(stats) {
  // Crear elementos HTML para mostrar las estadísticas (puedes personalizar según tus necesidades)
  const statsElement = document.createElement('div');
  statsElement.textContent = 'ESTADÍSTICAS';

  // Agregar estadísticas de países
  statsElement.appendChild(renderStatsCategory('📶 Cantidad de escritoras por nacionalidad', stats.countries));

  // Agregar estadísticas de géneros
  statsElement.appendChild(renderStatsCategory('📶 Cantidad de escritoras por género literario', stats.genres));

  return statsElement;
}

// Función para renderizar estadísticas de una categoría específica
function renderStatsCategory(categoryName, categoryStats) {
  const categoryElement = document.createElement('div');
  categoryElement.textContent = `${categoryName}:`;

  // Iterar sobre las estadísticas y agregarlas al elemento
  for (const item in categoryStats) {
    const itemStats = categoryStats[item];
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item}: ${itemStats}`;
    categoryElement.appendChild(itemElement);
  }

  return categoryElement;
}

function clearStats() {
  const statsContainer = document.getElementById('stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = '';
  }
}

//abrir pantalla emergente
const statsDialog = document.getElementById('statsDialog');
buttonFacts.addEventListener('click', () => {
  statsDialog.showModal();
});

// Cierra el modal
statsDialog.addEventListener('click', (event) => {
  if (event.target === statsDialog) {
    closeStatsDialog();
  }
});

// Función para cerrar el modal de estadísticas
function closeStatsDialog() {
  statsDialog.close();
}