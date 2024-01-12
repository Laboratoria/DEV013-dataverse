//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/datasetAI.js';


document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = renderItems(data);

  // para que se agregue las tarjetas como hijas del elemento main
  document.body.appendChild(tarjetas);  
});
