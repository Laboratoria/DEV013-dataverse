import { dangerousDataFilter, elementDataFilter, sortData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

//console.log(fakeData);

describe("funcionalidad de filtrado elementDataFilter", () => {
  it("esto deberia filtrar por la propiedad 'elementEsencial' los objetos de la Data", () => {
    expect(elementDataFilter(fakeData, 'elementEsencial', 'Dualidad')).toStrictEqual([{ "name": "Libra", "facts": { "elementEsencial": "Dualidad" }, "extraInfo": { "isDangerous": false } }]);
    expect(elementDataFilter(fakeData, 'elementEsencial', 'Versatil')).toStrictEqual([{ "name": "Fly", "facts": { "elementEsencial": "Versatil" }, "extraInfo": { "isDangerous": false } }]);
    expect(elementDataFilter(fakeData, 'elementEsencial', 'Climáticos')).toStrictEqual([{ "name": "Storm", "facts": { "elementEsencial": "Climáticos" }, "extraInfo": { "isDangerous": true } }]);

  });
});

describe("funcionalidad de filtrado dangerousDataFilter", () => {
  it("deberia filtar por la propiedad'isDangerous' los objetos de la Data", () => {
    expect(dangerousDataFilter(fakeData, 'isDangerous', 'true')).toStrictEqual([{ "name": "Storm", "facts": { "elementEsencial": "Climáticos" }, "extraInfo": { "isDangerous": true } }]);
  })
})


const ascData = [fakeData[2], fakeData[0], fakeData[3], fakeData[4], fakeData[1]];    // como sera el orden
const descData = [fakeData[1], fakeData[4], fakeData[3], fakeData[0], fakeData[2]]

describe("funcion ascendente de 'sortData' ", () => {
  it("esto deberia ordenar de forma ascendente  los objetos del array", () => {
    const ascOrden = (sortData(fakeData, 'name', "asc"))
    expect(ascOrden).toEqual(ascData);
  });
});

describe("funcion descendente 'sortData' ", () => {
  it("esto deberia ordenar de forma descedente  los objetos del array", () => {
    const descOrden = (sortData(fakeData, 'name', "desc"))
    expect(descOrden).toEqual(descData);
  });
});

describe ("estadistica", () => {
  it ("esto deberia devolverme el porcentaje de cuantas cartas son 'Inofensivas' y 'Peligrosas'", ()=>{
    expect(computeStats(fakeData)).toStrictEqual({"promInofensivas": 80, "promPeligrosas": 20})
  })
})