export const filterData = (data, filterBy, value) => {
  return data.filter(objeto => objeto[filterBy] === value);
};
//---------------------------------------------------------------------------------------------------------------------------

export const sortData = (data, sortBy, sortOrder) => {
  data.sort(function(a,b){
    if (sortOrder === 1) {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 2) {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
};

export const createStatistics = (data) => {
  //1 - Create empty structure to host categories in arrays
  const statsByCategory = {
    "ornamental":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "medicinal":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "aromatic":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "desert":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
    "trees":{
      sum: {
        waterSum:0,
        lightSum:0,
        careSum:0
      },
      average:{
        waterAverage:0,
        lightAverage:0,
        careAverage:0
      },
      factsByPlants:[]
    },
  };
  //2 - Iterate in data
  data.forEach(plant => {
    //3 - Identify category
    const category = plant.categoryPlant;
    //4 - Extracts facts
    //5 - Store facts in corresponding category
    statsByCategory[category].factsByPlants.push(plant.facts);
    //anadiendo la suma de water average de 
    statsByCategory[category].sum.waterSum+=plant.facts.waterAmount;
    //calculando promedio
    statsByCategory[category].average.waterAverage=Math.round(statsByCategory[category].sum.waterSum/statsByCategory[category].factsByPlants.length);

    statsByCategory[category].sum.lightSum+=plant.facts.sunLight;
    //calculando promedio
    statsByCategory[category].average.lightAverage=Math.round(statsByCategory[category].sum.lightSum/statsByCategory[category].factsByPlants.length);

    statsByCategory[category].sum.careSum+=plant.facts.careDifficulty;
    //calculando promedio
    statsByCategory[category].average.careAverage=Math.round(statsByCategory[category].sum.careSum/statsByCategory[category].factsByPlants.length);
  });
  
  return statsByCategory;
  //6 - Calculate average by category for every fact
  //6.1 - Save total facts by category in dedicated structure
}