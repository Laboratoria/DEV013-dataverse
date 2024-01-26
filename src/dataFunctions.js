/*
`filterData(data, filterBy, value)`: esta función recibe tres parámetros. 
El primer parámetro,`data`, nos entrega los datos. 
El segundo parámetro,`filterBy`, nos dice con respecto a cuál de los campos de la data se quiere filtrar.
El tercer parámetro,`value`, indica el valor de campo que queremos filtrar.*/

//recorrer el array (ya lo hace el filter) 
//por cada objeto(elemento del arreglo) hacer la comparacion de si la propiedad por que esta siendo filtrada tiene el valor buscado 
//ejemplo, si se esta filtrando por categoria, esta corresponde al "campo" es decir "filterBy"
//el value seria el valor de esa propiedad especifica (ejemplo "ornamental")
//si coincide retornara true y se guardara en el nuevo array
//filterBy = categoryPlant' 
export const filterData = (data, filterBy, value) => {
  return data.filter(objeto => objeto[filterBy] === value);
}

//luego hay que actuaizar la interfaz y que solo se rendericen las tarjetas del nuevo array
//se podria agregar un onclick al boton y que al hacer click se ejecute la funcion pero con los parametros correspondientes


/*`sortData(data, sortBy, sortOrder)`: esta función`sort`u ordenar recibe tres parámetros.
 El primer parámetro,`data`, nos entrega los datos. 
 El segundo parámetro,`sortBy`, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
  El tercer parámetro,`sortOrder`, indica si se quiere ordenar de manera ascendente o descendente.*/

/*export const sortData = (data, sortBy, sortOrder) => {
  return data.sort()

};
*/

/*`computeStats(data)`: la función`compute`o calcular, nos permitirá hacer cálculos estadísticos básicos 
para ser mostrados de acuerdo a la data proporcionada, 
esta función debe usar el método reduce.
*/

export const sortData = (data, sortBy, sortOrder) => {
  // let forData = data.slice();
  // if ((sortOrder === 4)) {
  //   return forData;
  // }
  data.sort(function(a,b) {
    if (a[sortBy] > b[sortBy]) {
      if (sortOrder === 1) {
        return true;
      } else if (sortOrder === 2) {
        return false;
      }
    } else {
      if (sortOrder === 1) {
        return false;
      } else if (sortOrder === 2) {
        return true;
      }
    }
  });
}

