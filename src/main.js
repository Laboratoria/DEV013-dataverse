import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//Traer la información para hacer los eventos y llamados de las funciones
//crear una constante para realizar el filtrado
//traer los valores que van a ser filtrados, las opciones
//crear un evento y pasarle los valores 
//crear las constantes para traer los elementos
const contenedor = document.querySelector('#root');

console.log(filterData(data,"Matemática"));
console.log(contenedor, renderItems(data), data);


//const para el botón de limpiado o reset
//const selectFilter = document.querySelector('select[data-testid="select-filter"]');
//const selectSort = document.queryselector('select¨[data-testid="select-sort"]'); 

const elementos = document.querySelector('#filtro'); //obtener el elemento select


elementos.addEventListener('change', (event)=>{ //agregar un addEventListener para escuchar el evento change
    let propiedadOpciones = elementos.keys(data.facts.mainField);
    let valorOpciones = elementos.value;
         //crear una var para guardar el valor de las opciones del select
    console.log(valorOpciones);  
    console.log(propiedadOpciones);                          
    let resultadoFiltro = filterData(data, valorOpciones);        
    console.log(resultadoFiltro);                 //aplicar la función para flitrar y pasar parametros
});





