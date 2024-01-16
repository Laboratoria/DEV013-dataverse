// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

//------------------------------------------------------------------------------
const result = renderItems(data);

const body = document.getElementById("root");
body.innerHTML=result;
