import { filterGenders, sortFilms } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
const newData = [...data]

const movieCards = document.querySelector("#root");
const cleanerButton = document.querySelector(".cleanerButton");
const movieSearch = document.querySelector(".movie-search");
const gendersFilms = document.querySelector("#filter");
const orderFilms = document.querySelector("#order");
const verMas = document.querySelector("#ver-mas");
const verMenos = document.querySelector("#ver-menos")
const modal = document.querySelector("#modal")

movieCards.appendChild(renderItems(newData));

movieSearch.addEventListener("input", function () {
  const results = [];
  const textSearch = movieSearch.value.toLowerCase();
  const search = newData.filter((elemento) => {
    return elemento.name.toLowerCase().includes(textSearch);
  });

  if (search) {
    movieCards.innerHTML = "";
    results.push(...search);
    movieCards.appendChild(renderItems(results));
  }
});

gendersFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  const selectedGender = gendersFilms.value;
  const filterMovie = filterGenders(newData, "genders", selectedGender);
  sortFilms;
  movieCards.appendChild(renderItems(filterMovie));

});

orderFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  const selectOrder = orderFilms.value;
  let filmAsc;

  if (selectOrder === "asc") {
    filmAsc = sortFilms(newData, "name", "asc");
  } else {
    filmAsc = sortFilms(newData, "name", "desc");
  }

  movieCards.appendChild(renderItems(filmAsc));
});

cleanerButton.addEventListener("click", function () {});

verMas.addEventListener("click", ()=>{
  modal.showModal();
});

verMenos.addEventListener("click", ()=>{
  modal.close();
});
