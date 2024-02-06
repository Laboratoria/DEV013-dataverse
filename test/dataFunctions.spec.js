import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('filterData', () => {

  it('returns an array with filtered data by category', () => {
    const result = filterData(fakeData, "categoryPlant", "ornamental");
    expect(result).toEqual([
      {
        "id": "begonia",
        "categoryPlant":"ornamental",
        "name": "Begonia",
        "maintenanceNeeds": "Necesita riego regular y evitar la luz solar directa.",
        "scientificName": "Begonia",
        "applicationsPlant": "Jardinería decorativa, colecciones botánicas.",
        "climaticData": "Prefiere ambientes húmedos y sombreados.",
      },
      {
        "id": "azalea",
        "categoryPlant":"ornamental",
        "name": "Azalea",
        "maintenanceNeeds": "Requiere suelo ácido y poda después de la floración.",
        "scientificName": "Rhododendron",
        "applicationsPlant": "Jardinería ornamental, cultivo en macetas.",
        "climaticData": "Prefiere climas templados y suelo bien drenado.",
      },
    ]);
  });
  it ('returns an array with filtered data by id', () => {
    const result = filterData(fakeData, "id", "roble");
    expect(result).toEqual([
      {
        "id": "roble",
        "categoryPlant":"trees",
        "name": "Roble",
        "maintenanceNeeds": "Requiere espacio para crecer, poco mantenimiento una vez establecido.",
        "scientificName": "Quercus",
        "applicationsPlant": "Construcción, muebles, barriles para vino.",
        "climaticData": "Adaptable a diversos climas, prefiere suelos profundos.",
      },
    ])
  })
});


describe('sortData', () => {

  it('returns `anotherExample`', () => {
    expect(sortData()).toBe('OMG');
  });
});