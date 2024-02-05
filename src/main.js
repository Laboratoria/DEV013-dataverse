//import { filterGenres, sortFilms } from "./dataFunctions.js";
import { sortFilms, filterBy } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const movieCards = document.querySelector("#root");
const cleanerButton = document.querySelector(".cleanerButton");
const movieSearch = document.querySelector(".movie-search");
const orderFilms = document.querySelector("#orderFilms");
const cardContainer = document.querySelector("#card-container");
// const cardContainer = document.querySelector("#card-container")

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
  else if (selectOrder === "desc") {
    filmAsc = sortFilms(data, "name", "desc");
  } else {
    filmAsc = sortFilms(data, "name", "defecto");
  }

  movieCards.appendChild(renderItems(filmAsc));
});

cleanerButton.addEventListener("click", function () {});

const simulateApiCall= () => {
  return new Promise (resolve => {
    setTimeout (()=> {
      resolve (localData);
    }, 1000);
  });
};

simulateApiCall()
.then(data => {
  const filteredData = filterBy (data, "someSortBy", "someValue");
  const sortedData = sortFilms(filteredData, "someSortBy", "asc");
  renderFilms(sortedData);
})
.catch(error=>console.error("Error simulando la carga de datos:", error));
//console.log(example, renderItems(data), data);
//renderItems(data);
