import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

//------------------------------------------------------------------------------

const result = renderItems(data);

const names = result.names;
const description = result.description;

console.log(names, description);
