import { filterData } from './dataFunctions.js';
import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//Traer la información para hacer los eventos y llamados de las funciones
//crear una constante para realizar el filtrado
//traer los valores que van a ser filtrados, las opciones
//crear un evento y pasarle los valores 
//crear las constantes para traer los elementos

const contenedor = document.querySelector('#root')
//console.log(filterData(data,"Matemática"));
console.log(contenedor, renderItems(data), data);









