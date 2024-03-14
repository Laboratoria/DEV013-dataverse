import { filterData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('pruebas a la función filtrar', () => {
  it('Se espera que filterData sea truthy', () => {
    expect(filterData).toBeTruthy();
  });
  // Con toBeTruthy esperamos que exista nuestro método

});

