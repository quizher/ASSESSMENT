// console.log("hola");


clasificaciones = () => {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {

        let respuesta = JSON.parse(request.responseText);
        // const json = JSON.stringify(request.responseText);
        let exito = respuesta.exito;
        // console.log('este es un exito ' + exito);
        if (exito == true) {

          if (respuesta.hasOwnProperty('clasificacion')) {

            let elementos = respuesta.clasificacion;
            // console.log(elementos);

            procesa(elementos);
            // document.getElementById('pagina').value = pagina;

          } else {
            document.getElementById('navbar').innerHTML = 'no hay información';

          }
        } else {
          document.getElementById('error-busqueda').innerHTML = 'No se encontró información';
          rellenoTable();
          document.getElementById('navbar').innerHTML = '';
        }



      } else if (request.status === 403) {
        let error = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
        console.log("No existe la sesiÃ³n " + error);
        window.location.href = "../principal.php";
      } else {
        let error = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
        console.log("error " + error);
      }
    }
  }





  // let buscar = document.getElementById('buscar').value;
  // document.getElementById('error-busqueda').innerHTML = '';

  request.open('POST', '../navbar/modelo/recupera.php', false);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send('pagina=1');
};


procesa = (elementos) => {

  let html = ``;
  let count = 0;
  html += ` 
  <div>
<div>
    <h4><a href="../principal">Enrique Guzmán</a></h4>
</div>`;
  for (const key in elementos) {
    html += `
        <div>

            <button onclick='vistaClasificacion("${elementos[key].id_clasificacion}")'>
                <div >
                    <h4>${elementos[key].nombre}</h4>
                </div>
            </button>
      
    </div> 
    
        `;
  }
  html += `
  </div> 
  `;
  document.getElementById('navbar').innerHTML = html;
};


vistaClasificacion = (id_clasificacion) => {
  console.log('local ' + id_clasificacion);
  sessionStorage.setItem("id_clasificacion", id_clasificacion);
  window.location.href = "../clasificacion";
}


clasificaciones()
