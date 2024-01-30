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

/*`computeStats(data)`: la función`compute`o calcular, nos permitirá hacer cálculos estadísticos básicos 
para ser mostrados de acuerdo a la data proporcionada, 
esta función debe usar el método reduce.
*/

//Acceder a los valores de los facts 
//crear variable con un array vacio 
//usar forEach para iterar y crear una funcion que encuentre el valor de la propiedad requerida y lo guarde en el array
//iterar sobre el array con for y retornar la suma 
//guardar la suma en una variable promedio y dividir la suma entre el total de objetos
//retornar el promedio 
export const computeStats =(data, propiedadDeseada) => {
  const propertyValues=[]

  data.forEach(object => {
    //acceder a la propiedad
    const factToExtract = object.facts[propiedadDeseada];
    //agregar el resultado al array
    propertyValues.push(factToExtract)
  });

  const suma = propertyValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const promedio = suma/data.length;
  
  //return promedio;
  return Math.round(promedio);
}


//selecconar los dos tipos de imagen para cada fact (activa, inactiva Total:6)*
//agregar un id a los div's que contienen los facts
// if div tiene "X" id el valor de activo es este e inactivo sera este
//else if div tiene "X"...

/*
function determinarImagen(){
  if (#water){
    activo.src="x.png"
    inactivo.src="y.png"
  }
  else if (#luz){
    activo.src="x.png"
    inactivo="y.png"
  }
  else if(#care){
    activo.src="x.png"
    inactivo="y.png"
  }
}
*/

//por cada tarjeta son tres facts (agua,luz,cuidado)
//por cada fact son tres resultados (1,2,3)
// funcion para determinar cuantos de esos tres van a tener el icono de activo y cuantos de inactivo 

//Idea general de como funcionaria
//fact: agua / resultado: (1,*2,3)

/*

const agua = data.facts.agua;
const luz = data.facts.luz;
const cuidado = data.facts.care;

const primera = document.querySelector(".minimo");
const segunda = document.querySelector(".medio");
const tercera = document.querySelector(".alto");


function calculo (fact){

 if (fact === 1)
  {
   primera.src=activo
   segunda.src=inactivo
   tercera.src=inactivo 
  }
  else if (fact===2)
  {
    primera.src=activo
    segunda.src=activo
    tercera.src=inactivo
  }
  else if (fact ===3)
  {
    primera.src=activo
    segunda.src=activo
    tercera.src=activo
  }
}
*/

/*
const agua = data.facts.agua;
const luz = data.facts.luz;
const cuidado = data.facts.care;

function actualizarImagenes(fact, primera, segunda, tercera) {
  const activo = "ruta/imagen_activa.png";
  const inactivo = "ruta/imagen_inactiva.png";

  if (fact === 1) {
    primera.src = activo;
    segunda.src = inactivo;
    tercera.src = inactivo;
  } else if (fact === 2) {
    primera.src = activo;
    segunda.src = activo;
    tercera.src = inactivo;
  } else if (fact === 3) {
    primera.src = activo;
    segunda.src = activo;
    tercera.src = activo;
  }
}

// Llamada para el factor de agua
const primeraImagenAgua = document.querySelector(".minimo-agua");
const segundaImagenAgua = document.querySelector(".medio-agua");
const terceraImagenAgua = document.querySelector(".alto-agua");

actualizarImagenes(agua, primeraImagenAgua, segundaImagenAgua, terceraImagenAgua);

// Llamada para el factor de luz
const primeraImagenLuz = document.querySelector(".minimo-luz");
const segundaImagenLuz = document.querySelector(".medio-luz");
const terceraImagenLuz = document.querySelector(".alto-luz");

actualizarImagenes(luz, primeraImagenLuz, segundaImagenLuz, terceraImagenLuz);

// Llamada para el factor de cuidado
const primeraImagenCuidado = document.querySelector(".minimo-cuidado");
const segundaImagenCuidado = document.querySelector(".medio-cuidado");
const terceraImagenCuidado = document.querySelector(".alto-cuidado");

actualizarImagenes(cuidado, primeraImagenCuidado, segundaImagenCuidado, terceraImagenCuidado);
*/
// let planta = [1,2,3];
// let personalidad = [3,2,1];

// function match(planta, personalidad) {
//   let resultado = [];
//   for (i) {
//     if(planta[i] === personalidad[i])
//     resultado = resultado.push(4);
//   } else if (si es mayor por un numero) {
//     push x
//   } else if (si es menor por un numero) {
//     push x
//   } 
  
// }
