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

//---------------------------------------------------------------------------------------------------------------------------

// export const computeStats =(data, propiedadDeseada) => {
//   const propertyValues=[];

//   data.forEach(object => {
//     //acceder a la propiedad
//     const factToExtract = object.facts[propiedadDeseada];
//     //agregar el resultado al array
//     propertyValues.push(factToExtract);
//   });

//   const suma = propertyValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   const promedio = suma/data.length;
  
//   return Math.round(promedio);
// };

//-------------------------------------------------------------------------------------------------------------

//en vez de el numero entero que se muestre (poca, medio,mucha)
//funcion para determinar la palabra que debe
//recibir el promedio y dependiendo de este me retorna la palabra
// export const wordSelection = function (promedio){
//   if (promedio===1){
//     return "Poca";
//   }
//   else if(promedio===2){
//     return "Regular";
//   }
//   else if(promedio===3){
//     return "Mucha";
//   }
//   return wordSelection;
// }

//--------------------------------------------------------------------
// export function determinarImagen(id) {
//   let activo;
//   let inactivo;

//   if (id==="water") {
//     activo = "resources/Icons/agua-activa.png";
//     inactivo = "resources/Icons/agua-inactiva.png";
//   } else if (id==="light") {
//     activo = "resources/Icons/luz-activa.png";
//     inactivo = "resources/Icons/luz-inactiva.png";
//   } else if (id==="care") {
//     activo = "resources/Icons/cuidado-activa.png";
//     inactivo = "resources/Icons/cuidado-inactiva.png";
//   }
//   return { activo, inactivo };
// }

//---------------------------------------------------------------------------------------------




























//------------------------------------------------------------------------------------------------------------------

//tengo que calcular el promedio
//para eso tengo que seleccionar todas las tarjetas con la misma categoria
//en cada tarjeta se debe acceder a facts
//y sumar todos los valores de cada fact
//luego sacar el promedio

// export const getAverage =(data, fact) => { 
//   let sum = "";
//   let quantity = "";

//   data.forEach(object.categoryPlant => {
//     sum += object.facts[fact];
//     quantity +=1;
//   });

//   const average = suma/quantity;
  
//   return Math.round(average);
// };

//-------------------------------------------------------------------------------------------------------------

// export const chooseTag = function (average){
//   if (average===1){
//     return "Poca";
//   }
//   else if(average===2){
//     return "Regular";
//   }
//   else if(average===3){
//     return "Mucha";
//   }
//   return wordSelection;
// }

//--------------------------------------------------------------------
// export function determinarImagen(id) {
//   let activo;
//   let inactivo;

//   if (id==="water") {
//     activo = "resources/Icons/agua-activa.png";
//     inactivo = "resources/Icons/agua-inactiva.png";
//   } else if (id==="light") {
//     activo = "resources/Icons/luz-activa.png";
//     inactivo = "resources/Icons/luz-inactiva.png";
//   } else if (id==="care") {
//     activo = "resources/Icons/cuidado-activa.png";
//     inactivo = "resources/Icons/cuidado-inactiva.png";
//   }
//   return { activo, inactivo };
// }

//---------------------------------------------------------------------------------------------
