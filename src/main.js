import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
console.log(filterData(data,"Matemática"));
const dataCompleta = [...data];
console.log(dataCompleta);

const filtros = document.querySelector('#filtros');
// aqui renderizamos los item sacados del dataset con la funcion que creamos en view y lo pasamos a html
const contenedor = document.querySelector('#root');
contenedor.appendChild(renderItems(dataCompleta)); //se pasa la data renderizada a HTML
const elementos = document.querySelector('#filtro'); //obtener el elemento select filtro
const ordenarData = document.querySelector('#orden');//obtener el elemento select orden

elementos.addEventListener('change', (event)=>{ //agregar un addEventListener para escuchar el evento change
  const valorOpciones = event.target.value;                  
  const resultadoFiltrado = filterData(dataCompleta, "mainField", valorOpciones);        
  console.log(resultadoFiltrado);       //aplicar la función para filtrar y pasar parametros
  contenedor.innerHTML= " "; //se limpia el HTML para evitar que se acumulen las opciones cuando se filtra varias veces
  //Se visualiza en pantalla
  contenedor.appendChild(renderItems(resultadoFiltrado));
  
});

ordenarData.addEventListener('change', (event)=>{
  const valorOrdenar = event.target.value;
  const resultadoOrdenar = sortData(dataCompleta, "name", valorOrdenar);
  console.log(resultadoOrdenar);
  contenedor.innerHTML= " ";
  contenedor.appendChild(renderItems(resultadoOrdenar));
  
});

const btn = document.querySelector('#boton');
btn.addEventListener('click', (e)=>{
 const eventCurrentTarget = e.currentTarget;
 elementos;
 ordenarData;
 
});

/*
Traer el boton con un querySelector 
Hacer un evento click para el boton resetear
Identificar que filtro esta siendo cambiado
Volver a su valor por defecto

*/
