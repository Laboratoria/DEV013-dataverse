import { filtrerData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const contenedor = document.querySelector('#root')

console.log(filtrerData(data,"Matemática"));
console.log(contenedor, renderItems(data), data);

const elementos = document.querySelector('#tercera');

contenedor.addEventListener('change', ()=>{
    elementos.especialidad
    
});





