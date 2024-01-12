import { renderItems } from './view.js';
import data from './data/datasetAI.js';


document.querySelector('section[name="cards"]').appendChild(renderItems(data))
//console.log(renderItems(data), );
/*
const seeMoreButton = document.getElementById("seeMoreButton");
seeMoreButton.addEventListener("click", function seeMore() {
    // document.getElementsByID("front-card").className = "front-card hide";
    // document.getElementsByID("back-card").className = "back-card show";
});*/


//renderItems(data)