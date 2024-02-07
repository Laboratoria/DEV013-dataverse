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
  it('returns the array in ascendant sorting', () => {
    sortData(fakeData, "id", 1);
    expect(fakeData).toEqual([
      {
        "id": "aloe-vera",
        "categoryPlant":"medicinal",
        "name": "Aloe Vera",
        "maintenanceNeeds": "Riego escaso y exposición a pleno sol o sombra parcial.",
        "scientificName": "Aloe barbadensis miller",
        "applicationsPlant": "Productos medicinales y cosméticos, jardinería.",
        "climaticData": "Resistente a la sequía, prefiere climas cálidos.",
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
        "id": "cactus-saguaro",
        "categoryPlant":"desert",
        "name": "Cactus Saguaro",
        "maintenanceNeeds": "Mínimo riego, evitar temperaturas bajo cero.",
        "scientificName": "Carnegiea gigantea",
        "applicationsPlant": "Jardinería desértica, simbolismo cultural.",
        "climaticData": "Resistente a la sequía, prefiere climas cálidos y secos.",
      },
      {
        "id": "menta",
        "categoryPlant":"aromatic",
        "name": "Menta",
        "maintenanceNeeds": "Controlar su crecimiento invasivo y proporcionar suficiente agua.",
        "scientificName": "Mentha",
        "applicationsPlant": "Cocina, bebidas, productos de higiene, remedios naturales.",
        "climaticData": "Prefiere suelos húmedos y lugares con sombra parcial.",
      },
      {
        "id": "roble",
        "categoryPlant":"trees",
        "name": "Roble",
        "maintenanceNeeds": "Requiere espacio para crecer, poco mantenimiento una vez establecido.",
        "scientificName": "Quercus",
        "applicationsPlant": "Construcción, muebles, barriles para vino.",
        "climaticData": "Adaptable a diversos climas, prefiere suelos profundos.",
      },
    ]);
  });
  it('returns the array in descendant sorting', () => {
    sortData(fakeData, "id", 2);
    expect(fakeData).toEqual([
      {
        "id": "roble",
        "categoryPlant":"trees",
        "name": "Roble",
        "maintenanceNeeds": "Requiere espacio para crecer, poco mantenimiento una vez establecido.",
        "scientificName": "Quercus",
        "applicationsPlant": "Construcción, muebles, barriles para vino.",
        "climaticData": "Adaptable a diversos climas, prefiere suelos profundos.",
      },
      {
        "id": "menta",
        "categoryPlant":"aromatic",
        "name": "Menta",
        "maintenanceNeeds": "Controlar su crecimiento invasivo y proporcionar suficiente agua.",
        "scientificName": "Mentha",
        "applicationsPlant": "Cocina, bebidas, productos de higiene, remedios naturales.",
        "climaticData": "Prefiere suelos húmedos y lugares con sombra parcial.",
      },
      {
        "id": "cactus-saguaro",
        "categoryPlant":"desert",
        "name": "Cactus Saguaro",
        "maintenanceNeeds": "Mínimo riego, evitar temperaturas bajo cero.",
        "scientificName": "Carnegiea gigantea",
        "applicationsPlant": "Jardinería desértica, simbolismo cultural.",
        "climaticData": "Resistente a la sequía, prefiere climas cálidos y secos.",
      },
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
      {
        "id": "aloe-vera",
        "categoryPlant":"medicinal",
        "name": "Aloe Vera",
        "maintenanceNeeds": "Riego escaso y exposición a pleno sol o sombra parcial.",
        "scientificName": "Aloe barbadensis miller",
        "applicationsPlant": "Productos medicinales y cosméticos, jardinería.",
        "climaticData": "Resistente a la sequía, prefiere climas cálidos.",
      },
    ])
  })
});