// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función filtro
//import dataset from './data/dataset.js';


export const filterData = (data, filterBy, value) => {
  return data.filter((data) => {
    if (data.facts[filterBy]) {
      return data.facts[filterBy] === value;
    }
    return false;
  });
};

//estadísticas
export const computeStats = (data, property, value) => {
  const newArray = data.map(element => element.facts[property] === value ? 1 : 0);
  const reduceData = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;
  return percentage.toFixed(2);
};


