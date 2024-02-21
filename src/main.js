import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const contenedor = document.querySelector('#root')

console.log(contenedor, renderItems(data), data);









