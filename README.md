# Dataverse

## 1. Resumen del proyecto

Se realiza este proyecto con el propósito de recaudar toda la información de **Las mejores Cientificas del Mundo**.
Con ese propósito, nuestro set de datos fueron generados usando el ChatGPT.

Se agrega dos "Filtros" para que nuestros usuarios puedan realizar la búsqueda más eficaz. Incluyendo, realiza la creación de un botón, para que se
pueda "Limpiar" y así pueda realizar la búsqueda desde el principio.

## 2. Funcionalidades

Hemos cubierto las funcionalidades requeridas. El objetivo principal, era que se pueda visualizar la data.
* El usuario debe tener la facilidad de navegar por la página web.
* El usuario debe entender la información de cada cientifica.
* El usuario debe usar los filtros y los botones sin inconvenientes.
* La página debe ser usada en cualquier dispositivo.
* Las tarjetas deben resaltar los valores de las propiedades de la data que
  le interesaría a la usuaria ver. Por ejemplo: nombre, fecha, imagen, etc.
  Si vas a filtrar u ordenar por una propiedad, la tarjeta tiene que mostrar
  el valor de esta propiedad a la usuaria.

Por ejemplo, la siguiente data correspondiente a Ada Lovelace: url([![adalovelece.jpg](https://i.postimg.cc/hv3hHmWh/adalovelece.jpg)](https://postimg.cc/dZrqCL0K))

  ```json
    {
      "id": "ada-lovelace",
      "name": "Ada Lovelace",
      "shortDescription": "Pionera de la informática, fue la primera programadora.",
      "description": "Una visionaria del siglo XIX ...",
      "imageUrl": "URL_DE_LA_IMAGEN_GENERADA",
      "facts": {
        "yearOfBirth": 1843,
        "placeOfBirth": "London, England",
        "mainField": "Computer Science",
      }
    }
```


3. Criterios de aceptación mínimos del proyecto
Se cumple con los requerimientos necesarios para que nuestra página web sea útil al usuario. Por ejemplo:

* **Uso de HTML semántico**

  - [ ] Tiene un `<header>` con `<h1>`
  - [ ] Tiene un `<footer>`
  - [ ] Tiene un `<main>` con `<h2>`
  - [ ] Todas las etiquetas de controles (inputs, selects, radio, etc) tienen `<label>`
  - [ ] `<ul>` esta usado para dibujar la data
  - [ ] Los hijos de `<li>` usan attributos de microdata `itemscope` e `itemprop`

* **Uso de selectores de CSS**

  - [ ] Uso de selector class para los items <li>
  - [ ] Uso de flexbox en sentido `row` y `column`
  - [ ] Uso de flexbox para el elemento que contiene los items
  - [ ] Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    para buscar los elementos del DOM
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] `addEventListener` con callback que tiene parámetro de `event`,
    lo que permite el uso del objeto [`event`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
    con `event.target` o `event.currentTarget`
  - [ ] La aplicación registra [Event Listeners](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
    para escuchar `click`, `change`, `keyup` dependiendo del evento que
    se quiere escuchar

* **Manipulación dinámica del DOM**

  - [ ] La aplicación actualiza el atributo [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).
  - [ ] La aplicación usa `createElement` y `appendChild`, o template strings
    para crear elementos

#### JavaScript

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    y [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    en manera adecuada

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
    [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
      para evaluar condiciones

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    o método [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    para iterar

* **Funciones (params, args, return)**

  En el archivo `dataFunctions.js` define las siguientes funciones:
  - [ ] una función `sortBy` que tiene 3 parámetros (`data`, `sortBy`, `sortOrder`)
    y devuelve el arreglo ordenado
  - [ ] una función `filterBy` que tiene 3 parámetros (`data`, `filterBy`, `value`)
    y devuelve el arreglo filtrado
  - [ ] una función `computeStats` que tiene al menos un parámetro (`data`)
    y devuelve un valor computado

  Más sobre estos puntos en [la sección dataFunctions.js](#src/dataFunctions.js)

* **Arrays (arreglos)**

  - [ ] Uso de [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [ ] Uso de [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    o [Array.prototype.toSorted - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
  - [ ] Uso de [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [ ] Uso de [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [ ] Uso de [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [ ] Uso de [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

* **Objetos**

  - [ ] Uso de notación de punto para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  - [ ] Uso de notación de brackets para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usa [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    y [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    para importar y exportar valores desde un modulo JavaScript.


## Primera Historia de Usuario:

Nuestras usuarias esperan poder encontrar información precisa y contundente del tema relacionado. En este caso "Mujeres científicas"
En este caso, se facilita la visualización de la información, foto de referencia y búsqueda efectiva.

#### Criterios de Aceptación:

1. Titulo de la página.
2. Visualizar la imagen de referencia de cada científica.
3. La página web sea Responsiva.
4. No tenga interacción.

### Definición de terminado:

1. Que se vea  la página con información y formato de prototipo.
2. Subido al repositorio con cambios míos y de mi compañera.
3. Prueba de Usabilidad (por lo menos 2 personas realicen feedback).

### Pasos para cumplir los Criterios de aceptación:

1. Trabajar con HTML y CSS Reponsive.
2. Trabajar con los datos para que se visualice la data en la página web.
3. Averiguar que es un archivo JSON.
4. Subir toda la información al repositorio y que se visualice.


## Segunda Historia de Usuario:

### ¿Qué Requieren Nuestras Usuarias?
 La página web permita a nuestras usuarias obtener la información con la data generada, visualizarla y filtrarla
 según su conveniencia.

### Criterios de Aceptación:
 1. Qué nuestras usuarias vean la información en las tarjetas.
 2. Que realicen interacciones en la página web y puedan filtrarla desde "Especialidad" para que su búsqueda sea más eficaz.
 3. Que las usuarias puedan ordenar los nombres de manera ascendente ("A-Z") y descendente ("Z-A").

### Definición de Terminado:
 1. Que se vea el formato de los filtros y que los botones funcionen.
 2. Subido al repositorio con cambios míos y mi compañera
 3. Que los test pasen por lo menos en un 70 % y crear los test con Jest.

### Pasos para Cumplir Criterios de Aceptación:
 1. Trabajar con HTML, CSS y JAVASCRIPT.
 2. Que se puede filtrar por especialidad y muestre todas las opciones aún cuando cuenten con más de una.
 3. Que el ordenado sea de la A-Z Z-A
 4. Aplicar los test unitarios y que pase por lo menos un 70% de ellos.


## Tercera Historia de Usuario:

### ¿Qué Requieren Nuestras Usuarias?
 Que la usuaria pueda ver desplegada la página web y el resumen del proyecto en Github.

### Criterios de Aceptación:
 1. Pagina clara de leer con buen diseño y colores de acuerdo al proyecto.
 2. Que estén todos los cambios en github.

### Definición de Terminado:
 1. Desplegado en Github.
 2. Cumplir con los objetivos en el Readme
 3. Test.

### Pasos para Cumplir Criterios de Aceptación:
 1. Trabajar con Github y Jest para los test.
 2. Resumen del proyecto de forma clara.



#### Diseño de la Interfaz de Usuaria

##### Prototipo de alta fidelidad

Usando los wireframes o bocetos (_sketches_) de tu solución de interfaz
como base, lo siguiente es diseñar tu Interfaz de Usuaria (UI por sus
siglas en inglés - _User Interface_). Para eso debes aprender a
utilizar alguna herramienta de diseño visual.
Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

#### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar.

Revisa [las funcionalidades](#3-funcionalidades) que el proyecto pide del interfaz.

#### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Este proyecto usa
el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias por lo
que te recomendamos consultar su documentación.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/dataFunctions.js` que contenga tus funciones y
está detallado en la sección de [Consideraciones técnicas](#src/data.js).

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* Visualizar la estadística calculada mediante un gráfico. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

