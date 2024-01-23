import data from './data/dataset.js';






// function alDerecho() {
//   derecho = data.sort(function(a,b) {
//     if (a.id > b.id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return derecho;
// }

// function alReves() {
//   reves = data.sort(function(a,b){
//     if (a.id > b.id) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   return reves;
// }

let derecho = [];
let reves = [];

function sortOrder() {
  derecho = data.sort(function(a,b) {
    if (a.id > b.id) {
      true;
    } else {
      false;
    }
    return derecho;
  });

  reves = data.sort(function(a,b){
    if (a.id > b.id) {
      false;
    } else {
      true;
    }
    return reves;
  });
}

window.sortOrder=sortOrder;

