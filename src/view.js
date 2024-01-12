export const renderItems = (data) => {

  //crear la ul 
  const ulContainer=document.createElement('ul');

  // iterar el arreglo con forEach 
 
  //guardar ese li dentro de la ul
  //agregar la ul al DOM

  data.forEach(objeto => {

    //callback function debe: 
    //crear una li por cada elemento con las propiedades ya definidas
    const li=document.createElement('li');
    //estructura html creada para cada tarjeta
    //template strings
    li.innerHTML= `
        <h2>${objeto.name}</h2>
         <img alt="Plant Name" src="objeto.imageUrl" />
        <article id="facts">
        <article id="water">
        <h4>Water</h4>
        <article id="water amount">
        <img alt="Gota" src="resources/Icons/Agua activa.png" height="30px" width="30px"/>
        <img alt="Gota" src="resources/Icons/Agua activa.png" height="30px" width="30px"/>
        <img alt="Gota" src="resources/Icons/Agua inactiva.png" height="30px" width="30px"/>
        </article>
        </article>
        <article id="light">
        <h4>Light</h4>
        <article id="light amount">
        <img alt="Sol" src="resources/Icons/Luz activa.png" height="30px" width="30px"/>
        <img alt="Sol" src="resources/Icons/Luz inactiva.png" height="30px" width="30px"/>
        <img alt="Sol" src="resources/Icons/Luz inactiva.png" height="30px" width="30px"/>
        </article>
        </article>
        <article id="care">
        <h4>Care</h4>
        <article id="care amount">
        <img alt="Semaforo" src="resources/Icons/Cuidado activa.png" height="30px" width="30px"/>
        <img alt="Semaforo" src="resources/Icons/Cuidado activa.png" height="30px" width="30px"/>
        <img alt="Semaforo" src="resources/Icons/Cuidado inactiva.png" height="30px" width="30px"/>
        </article>
        </article>
        </article>
        <p>${objeto.shortDescription}</p>
        <button>DETALLES</button>

        </article>
        <article id="backCard">
        <img alt="Plant Name" src="resources/Images/1.png" />
        <h2>${objeto.name}</h2>
        <h3>${objeto.scientificName}</h3>
        <article id="deails">
          <h4>Botanical Family</h4>
          <p>${objeto.botanicalFamily}</p>
          <h4>Usage</h4>
          <p>${objeto.applications}</p>
          <h4>Climate data</h4>
          <p>${objeto.climaticData}</p>
        </article>
        <article id="description">
          <h4>Description</h4>
          <p>${objeto.description}</p>
          <h4>Maintenance</h4>
          <p>${objeto.maintenance}</p>
        </article>
        <article id="icons">
          <img alt="Estadisticas 1" src="resources/Icons/Estadísticas 1.png" height="30px" width="30px"/>
          <img alt="Estadisticas 1" src="resources/Icons/Estadísticas 2.png" height="30px" width="30px"/>
          <img alt="Regresar" src="resources/Icons/Regresar.png" height="30px" width="30px"/>
        </article>
      </article>
    </article> `
    ulContainer.appendChild(li);
  
  });
  return ulContainer;
};