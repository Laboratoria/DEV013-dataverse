//import { filterGenres, sortFilms } from "./dataFunctions.js";
import { sortFilms, filterByGenre } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
import moviesData from "./data/dataset.js";

const movieCards = document.querySelector("#root");
const cleanerButton = document.querySelector(".cleanerButton");
const movieSearch = document.querySelector(".movie-search");
const orderFilms = document.querySelector("#order");
const cardContainer = document.querySelector("#card-container");
const filterGenres = document.querySelector("#filter")
// const allGenres = moviesData.flatMap(movie => movie.facts.genres);
// const uniqueGenres = [...new Set(allGenres)];
// console.log(uniqueGenres);
// const cardContainer = document.querySelector("#card-container")
document.addEventListener("DOMContentLoaded", function() {
movieCards.appendChild(renderItems(data));

movieSearch.addEventListener("input", function () {
  const results = [];
  const textSearch = movieSearch.value.toLowerCase();
  const search = data.filter((elemento) => {
    return elemento.name.toLowerCase().includes(textSearch);
  });

  if (search) {
    movieCards.innerHTML = "";
    results.push(...search);
    movieCards.appendChild(renderItems(results));
  }
});

orderFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  const selectOrder = orderFilms.value;
  let filmAsc;

  if (selectOrder === "asc"){
    filmAsc = sortFilms(data, "name", "asc");
  }
  else {
    filmAsc = sortFilms(data, "name", "desc")
  }

  movieCards.appendChild(renderItems(filmAsc));
});

filterGenres.addEventListener("change", function () {
  const selectedGenre = filterGenres.value;
  const filteredData = filterByGenre(data, selectedGenre);
  
  movieCards.innerHTML = "";
  movieCards.appendChild(renderItems(filteredData));
});

cleanerButton.addEventListener("click", function () {});
});
// const simulateApiCall= () => {
//   return new Promise (resolve => {
//     setTimeout (()=> {
//       resolve (localData);
//     }, 1000);
//   });
// };

// fetch("./data/dataset.js")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error("Error loading JSON file", error));
// simulateApiCall()
// .then(data => {
  // const filteredData = filterBy (data, "someSortBy", "someValue");
//   const sortedData = sortFilms(filteredData, "someSortBy", "asc");
//   renderFilms(sortedData);
// })
// .catch(error=>console.error("Error simulando la carga de datos:", error));
//console.log(example, renderItems(data), data);
//renderItems(data);
