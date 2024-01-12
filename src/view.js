export const renderItems = (data) => {
  const container = document.createElement('section');
  // console.log(data)
  data.forEach(element => {
    //console.log(element);
    /** Template string **/ 
    // container.innerHTML += `<p>${element.name}</p>`
    container.innerHTML += `<div id="card">
    <div class="front-card" id="front-card">
      <h2>${element.name}</h2>
      <img alt="Nombre" src="${element.imageUrl}" />
      <div class="facts">
        <label>Agua</label>
        <img alt="Gota" src="resources/Icons/Agua activa.png" height="30px" width="30px"/>
        <img alt="Gota" src="resources/Icons/Agua activa.png" height="30px" width="30px"/>
        <img alt="Gota" src="resources/Icons/Agua inactiva.png" height="30px" width="30px"/> <br>

        <label>Luz</label>
        <img alt="Sol" src="resources/Icons/Luz activa.png" height="30px" width="30px"/>
        <img alt="Sol" src="resources/Icons/Luz inactiva.png" height="30px" width="30px"/>
        <img alt="Sol" src="resources/Icons/Luz inactiva.png" height="30px" width="30px"/><br>

        <label>Cuidado</label>
        <img alt="Semaforo" src="resources/Icons/Cuidado activa.png" height="30px" width="30px"/>
        <img alt="Semaforo" src="resources/Icons/Cuidado inactiva.png" height="30px" width="30px"/>
        <img alt="Semaforo" src="resources/Icons/Cuidado inactiva.png" height="30px" width="30px"/>

        <p><strong>Descripcion corta </strong> tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type="button" id="seeMoreButton">Detalles</button>
      </div>
    </div>
      <hr>
    <div class="back-card" id="back-card">
      <img alt="Nombre" src="resources/Images/1.png"/>
      <h2>Nombre Común</h2>
      <h3>Nombre científico</h3>
      <h4>Familia botanica</h4>
      <p>Lorem ipsum</p>
      <h4>Uso</h4>
      <p>Dolor sit amet</p>
      <h4>Datos climaticos</h4>
      <p>Consectetur adipiscing</p>
      <h4>Descripción</h4>
      <p>${element.description}</p>
      <h4>Mantenimiento</h4>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <input type="image" id="stats1" src="resources/Icons/Estadísticas 1.png" height="30px" width="30px"/>
      <input type="image" id="stats2" src="resources/Icons/Estadísticas 2.png" height="30px" width="30px"/>
      <input type="image" id="return" src="resources/Icons/Regresar.png" height="30px" width="30px"/>
    </div>
    <hr>
  </div>`
  });
  
  return container;
};