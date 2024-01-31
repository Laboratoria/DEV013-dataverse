//import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

document.addEventListener("DOMContentLoaded", function () {
    const movieCards = document.querySelector("#root");
    movieCards.appendChild(renderItems(data));
    
    const cleanerButton = document.querySelector(".cleanerButton");
    cleanerButton.addEventListener("click", function() {
   
      const filteredAndSortedData = dataFunction.sortBy(data, "name", "asc");
      movieCards.innerHTML = "";
      movieCards.appendChild(renderItems(filteredAndSortedData));
    });
  
    const filter = document.getElementById("filter");
    const order = document.getElementById("order");

    const movieSearch = document.querySelector(".movie-search");
    movieSearch.addEventListener("input", function () {
      const results = [];
      const textSearch = movieSearch.value.toLowerCase();
      const search = data.filter((elemento) => {
        return elemento.name.toLowerCase().includes(textSearch)
      });
      
      if (search) {
        movieCards.innerHTML = "";
        results.push(...search);
        movieCards.appendChild(renderItems(results))
      }
  });
});

//console.log(example, renderItems(data), data);
//renderItems(data);
