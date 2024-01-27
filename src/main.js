import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//ctrl + k + c
//ctrl + k + u
renderItems(data);//contiene la data incial
let filteredData;
const nav = document.querySelector('#root'); //contenedor
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
const inputSearchAnimal = document.getElementById("searchAnimal"); //llamar el input donde va el nombre
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); //limpiar nombre de inputSearchAnimal
const order = document.querySelector("[data-testid='select-sort']");//para ordenar
const statistics = document.getElementById("statistics");//contenedor modal
const closeModal = document.querySelector("#close");//cerrar modal
const openModal = document.querySelector("#details"); //abrir el modal
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = data; //acomplar la inf de la base de datos para usarla de manera interna, ya la uso de forma que quiera, para mantener la data filtrada()

buttonClearFilter.addEventListener("click", () => {//esto lo tengo que usar para limpiar los filtros
  console.log("hola");//mandar llamar la función
  nav.innerHTML = "";
  document.querySelector('[name=optionOne]').Checked =false;
  //falta que se quite la marca de los botones, el valor queda guardado, se debe resetar los valores no guardar
  renderItems(data);
});

openModal.addEventListener("click", (e) => {
  statistics.showModal();//showModal es una función establecida para abrir el modal
  console.log("gola");
  const titleH2 = document.getElementById("stats");
  if (e.target === openModal ) {
    titleH2.innerHTML = computeStats(data);//sustituir el h2 donde va el texto
    console.log("prueba", titleH2);
  }
  /*if (e.target === details) {
    //nav.innerHTML = " ";
    console.log("adiso");
    //console.log(computeStats(data));//undefined
    //console.log(renderItems(data));//retorna los ul y li
    prueba = computeStats(data)//stats.innerHTML; //computeStats(data);//tengo que llamar la estadística aparece undefined 
    console.log(renderItems( prueba));
  }
  return details.innerHTML = computeStats(data);*/
});

closeModal.addEventListener("click", function () {
  statistics.close(); 
});

/*order.addEventListener("change", (event) => {//
  let dataOrdered;//inicializar donde se estan guardando las tarjetas
  if (event.target.value === "asc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "asc");
  } if (event.target.value === "desc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "desc");
  }
  console.log("render", dataOrdered);
  return renderItems(dataOrdered);
}) */

order.addEventListener("change", (event) => {//ordenar SE MANTIENEN LOS DATOS ordenados AL LIMPIAR FILTRO
  //let dataOrdered;//inicializar donde se estan guardando las tarjetas
  //if (event.target.value === "asc") {
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  //} 
  //if (event.target.value === "desc") {
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  //}
  renderItems(filteredData);
});


filterPersonality.addEventListener("click", (e) => {//filtro personalidad
  if(!e.target.value) {//para que al dar clic fuera no haga nada
    return;
  }
  nav.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);//filteredData me esta guardando los filtros, si al filtrar quedan 10, se filtra sobre eso
  //filterResult.push(filterData(data, "gender", gender));
  renderItems(filteredData);
});


filterSpecie.addEventListener("click", (e) => {// CON ESTO FILTRO POR ESPECIES
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  //filterResult.push(filterData(data, "gender", gender));  
  /*if (document.getElementById("specieDog").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Perro");
  }
  if (document.getElementById("specieSquirrel").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ardilla");
  }
  if (document.getElementById("specieChicken").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Gallo");
  }
  if (document.getElementById("specieTiger").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Tigre");
  }
  if (document.getElementById("specieMouse").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ratón");
  }
  if (document.getElementById("specieWolf").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Lobo");
  }
  if (document.getElementById("specieDeer").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ciervo");
  }
  if (document.getElementById("specieDuck").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Pato");
  }
  if (document.getElementById("specieCat").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Gato");
  }
  if (document.getElementById("specieGoat").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Cabra");
  }
  if (document.getElementById("specieBear").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Oso");
  }
  if (document.getElementById("specieEagle").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Águila");
  }
  if (document.getElementById("specieHorse").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Caballo");
  }*/ 
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {//  CON ESTE CÓDIGO LLAMO AL FILTRAR POR GÉNERO
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";//si es masculino que me muestre el contenido, si es mujer que me muetre el contenido
  //filterdData = "";
  filteredData =  filterData(filteredData, "gender", e.target.value);
  /*if (document.getElementById("genderAll").checked){
    //nav.innerHTML;
    nav.innerHTML;//FALTA QUE LLAME A TODOS
    filterResult = filterData(data, "gender", "All");
    //return filterResult= event.target.value = filterData(data, "gender", "All")
  }
  if (document.getElementById("genderWomen").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "gender", "Femenino");
    //return filterResult = event.target.value = filterData(data, "gender", "Femenino");
  }
  if (document.getElementById("genderMasculine").checked){
    nav.innerHTML = "";
    //console.log(filterData(data, "gender", "Masculino"));
    filterResult = filterData(data, "gender", "Masculino");
    //return filterResult = event.target.value = filterData(data, "gender", "Masculino");
  }*/
  renderItems(filteredData);
});


const filterSearchNames = () => { //Buscador
  //console.log(inputSearchAnimal.value);
  nav.innerHTML = "";// debe iniciar vacio
  const dataNames = inputSearchAnimal.value.toLowerCase() //pasa todo a minuscula
  for (const items of data) { //recorrer la data
    const name = items.name.toLowerCase();//name referencia a la data
    if (name.indexOf(dataNames) !== -1) {// retorna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
      nav.innerHTML += `
      <dl>
      <img src=${items.imageUrl} alt=${items.name}/>      
      <dd>${items.name}</dd>
      <dd itemprop="species">${items.species}</dd>
      <dd itemprop="gender">${items.gender}</dd>
      <dd itemprop="personality">${items.personality}</dd>
      <dd itemprop="zodiacSign">${items.facts.zodiacSign}</dd>
      <dd itemprop="birthDate">${items.facts.birthDate}</dd>
      <dd itemprop="shortDescription">${items.shortDescription}</dd>
      </dl>  `
    }
  } //si sigue vacio en nav
  if (nav.innerHTML === "") {// retorna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
    nav.innerHTML += `
    <li>Sin resultados</li>`
  }
};
inputSearchAnimal.addEventListener("keyup", filterSearchNames); 
buttonClearName.addEventListener("click", function(e) {//con esto limpio el nombre escrito
  e.target.value = inputSearchAnimal.value = "";
  nav.innerHTML = "";
  renderItems(data);//corregir al dar clic me aparecen todos y el que busque
});
//filterSearchNames();

/*
  if (e.target.matches(input)) {
    console.log(e.target.value);
  }
  /*if(e.target.inputName) {
    data.forEach(names => {
      console.log(names.textContent.toLowerCase().includes(e.target.value));
    })
  }*/
  

//funcion para iniciar init

//FUNCIÓN PARA LA ESTADISTICA




/*
renderItems(data);
let filteredData;
const nav = document.querySelector('#root'); 
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); 
const inputSearchAnimal = document.getElementById("searchAnimal"); 
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); 
const order = document.querySelector("[data-testid='select-sort']");
const statistics = document.getElementById("statistics");
const closeModal = document.querySelector("#close");
const openModal = document.querySelector("#details");
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = data; 

buttonClearFilter.addEventListener("click", () => {
  nav.innerHTML = "";
  renderItems(data);
});

openModal.addEventListener("click", (e) => {
  statistics.showModal();
  const titleH2 = document.getElementById("stats");
  if (e.target === openModal ) {
    titleH2.innerHTML = computeStats(data);
  }
});

closeModal.addEventListener("click", function () {
  statistics.close(); 
});

order.addEventListener("change", (event) => {
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  renderItems(filteredData);
});


filterPersonality.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);
  renderItems(filteredData);
});


filterSpecie.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  
  filteredData =  filterData(filteredData, "gender", e.target.value);
 
  renderItems(filteredData);
});


const filterNames = () => { 
  nav.innerHTML = "";
  const dataNames = inputSearchAnimal.value.toLowerCase() 
  for (const items of data) { 
    const name = items.name.toLowerCase();
    if (name.indexOf(dataNames) !== -1) {
      nav.innerHTML += `
      <dl>
      <img src=${items.imageUrl} alt=${items.name}/>      
      <dd>${items.name}</dd>
      <dd itemprop="species">${items.species}</dd>
      <dd itemprop="gender">${items.gender}</dd>
      <dd itemprop="personality">${items.personality}</dd>
      <dd itemprop="zodiacSign">${items.facts.zodiacSign}</dd>
      <dd itemprop="birthDate">${items.facts.birthDate}</dd>
      <dd itemprop="shortDescription">${items.shortDescription}</dd>
      </dl>  `
    }
  } 
  if (nav.innerHTML === "") {
    nav.innerHTML += `
    <li>Sin resultados</li>`
  }
};
inputSearchAnimal.addEventListener("keyup", filterNames); 
buttonClearName.addEventListener("click", function() {
  nav.innerHTML = "";
  renderItems(data);
});
*/