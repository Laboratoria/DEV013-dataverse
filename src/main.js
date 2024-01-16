/*import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
console.log(example, renderItems(data), data);*/

import { renderItems } from './view.js';

import data from './data/dataset.js';
console.log(data);

const dataList = document.querySelector("#root");

dataList.appendChild(renderItems(data));

