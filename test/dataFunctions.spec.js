import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('filterData', () => {

  it('filtrado de data por especialidad', () => {
    const result = filterData(fakeData, 'mainField', 'Especialidad');
    expect(result).toHaveLength(13);
    result.forEach((data) => {
      expect(data.facts.mainField).toBe('Especialidad');
    });
  });
});


describe('sortData', () => {
  const especialidad = [
    { mainField: 'Actuación'},
    { mainField: 'Astrofísica'},
    { mainField: 'Astronomía'},
    { mainField: 'Bioquímica'},
    { mainField: 'Ciencia de la Computación'},
    { mainField: 'Cristalografía'},
    { mainField: 'Composición Musical, Video Juegos'},
    { mainField: 'Filosofía'},
    { mainField: 'Física'},
    { mainField: 'Física de Partículas'},
    { mainField: 'Matemáticas'},
    { mainField: 'Microbiología'},
    { mainField: 'Química'},
   
  ];

  it('ordena los datos por especialidad en orden ascendente', () => {
    const result = sortData(fakeData, { sortBy: 'mainField', sortOrder: 'asc' });
    expect(result[0].name).toBe('Actuación');
    expect(result[1].name).toBe('Astrofísica');
    expect(result[2].name).toBe('Astronomía');
    expect(result[3].name).toBe('Bioquímica');
    expect(result[4].name).toBe('Ciencia de la Computación');
    expect(result[5].name).toBe('Cristalografía');
    expect(result[6].name).toBe('Composición Musical, Video Juegos');
    expect(result[7].name).toBe('Filosofía');
    expect(result[8].name).toBe('Física');
    expect(result[9].name).toBe('Física de Partículas');
    expect(result[10].name).toBe('Matemáticas');
    expect(result[11].name).toBe('Microbiología');
    expect(result[12].name).toBe('Química');
   
  });

  it('Ordena los nombres de manera Descendente', () => {
    const result = sortData(fakeData, { sortBy: 'mainField', sortOrder: 'desc' });
    expect(result[0].name).toBe('Química');
    expect(result[1].name).toBe('Microbiología');
    expect(result[2].name).toBe('Matemáticas');
    expect(result[3].name).toBe('Física de Partículas');
    expect(result[4].name).toBe('Física');
    expect(result[5].name).toBe('Filosofía');
    expect(result[6].name).toBe('Composición Musical, Video Juegos');
    expect(result[7].name).toBe('Cristalografía');
    expect(result[8].name).toBe('Ciencia de la Computación');
    expect(result[9].name).toBe('Bioquímica');
    expect(result[10].name).toBe('Astronomía');
    expect(result[11].name).toBe('Astrofísica');
    expect(result[12].name).toBe('Actuación');
  });

});
