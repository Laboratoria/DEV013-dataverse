import { sortData, filterByAge } from '../src/dataFunctions.js';
import { data as testData } from './data.js';

// Se crea primer test para la funcioón de ordenamiento.
describe('sortData function', () => {
  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden ascendiente
  const sortAsc = [testData[1], testData[0], testData[2]];
  it('Se retornan los datos ordenados de forma ascendente', () => {
    const resultAsc = sortData(testData, "name", "asc");
    expect(resultAsc).toEqual(sortAsc);
  });
  //Declaramos constante con el ordenamiento que debe existir en un dato falso y que retorne un orden descendiente
  const sortDesc = [testData[2], testData[0], testData[1]];
  it('Se retornan los datos ordenados de forma descendente', () => {
    const resultDesc = sortData(testData, "name", "desc");
    expect(resultDesc).toEqual(sortDesc);
  });
});
// se crea segundo test de Filtro rango de edad
describe('filterByAge function', () => {
  it('Debería devolver solo los elementos con el rango de edad especificado', () => {
    const filteredData = filterByAge(testData, '3 a 5 años');
    expect(filteredData.length).toBe(1); // Verifica que solo hay un elemento en el resultado
    expect(filteredData[0].facts.RangoDeEdad).toBe('3 a 5 años'); // Verifica que el elemento devuelto tenga el rango de edad correcto
  });

});

