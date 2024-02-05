import { renderItems } from './view.js';
import { filterData , sortData } from './dataFunctions.js';
import data from './data/dataset.js';

const dataList = document.querySelector("#root");
let result = data;
dataList.appendChild(renderItems(data));

/*const filteredLiteratura = filterData(data, 'mainField', 'Literatura');
console.log(filteredLiteratura);
const filteredPoesía = filterData(data, 'mainField', 'Poesía');
console.log(filteredPoesía);
const filteredPoesiaLiteratura = filterData(data, 'mainField', 'Poesía, Novela');
console.log(filteredPoesiaLiteratura);*/


//selecciona los elementos select
const filterSelectors = [
	{ selector: '[data-testid="filter-type"]', property: "mainField" },
	{ selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
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
	renderItems(data);
});

// Función para restablecer los filtros
function resetFilters() {
	// Recorre los selectores y establece sus valores en vacío
	filterSelectors.forEach(({ selector }) => {
		document.querySelector(selector).value = "";
	});
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
}

//Ordenamiento descendente y ascendente
const sortName = document.querySelector('[data-testid="select-sort"]');

sortName.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortName.value;
    result = sortData(data, "name", sortOrder);
    renderDataList();
});

function renderDataList() {
    dataList.innerHTML = "";
    const resultList = renderItems(result);
    dataList.appendChild(resultList);
}