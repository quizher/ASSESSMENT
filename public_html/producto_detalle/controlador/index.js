checkKeyExists = () => {

    //id temporal con estatus 1
    if (sessionStorage.getItem('id_producto') !== null) {
        let id_producto = sessionStorage.getItem('id_producto');
        document.getElementById('id_producto').value = id_producto;
        sessionStorage.removeItem('id_producto');

    }
    //Nuevo id temporal
    else {
        console.log('Vista normal');
        window.location.href = "../principal";
        // rellenoTable();
    }
}

checkKeyExists()





let id_producto = document.getElementById('id_producto').value;


productoDetalle = () => {


    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {

                let respuesta = JSON.parse(request.responseText);
                // const json = JSON.stringify(request.responseText);
                let exito = respuesta.exito;
                // console.log('este es un exito ' + exito);
                if (exito == true) {

                    if (respuesta.hasOwnProperty('producto')) {

                        let elementos = respuesta.producto;
                        let comentarios = respuesta.comentario;
                        // console.log(elementos);

                        vistaDetalle(elementos, comentarios);
                        // document.getElementById('pagina').value = pagina;

                    } else {
                        document.getElementById('producto').innerHTML = 'no hay información';

                    }
                } else {
                    document.getElementById('error-busqueda').innerHTML = 'No se encontró información';
                    rellenoTable();
                    document.getElementById('producto').innerHTML = '';
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

    request.open('POST', '../producto_detalle/modelo/recuperaDetalle.php', false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send('id_producto=' + id_producto);
};


vistaDetalle = (elementos, comentarios) => {

    let html = ``;
    let count = 0;
    html += ` 
    <section class="cards contenedor">
        <h2 class="titulo">Detalle de producto</h2>
        <div class="content-cards">
 `;

    for (const key in elementos) {


        html += `  
            <article class="card">
            <img src="${elementos[key].imagen}" alt="imagen producto">
            <h3>${elementos[key].modelo}</h3>
            <span>${elementos[key].nombre}</span>
            <p>${elementos[key].especificaciones} </p>
            
        </article>
        

          `;
    }
    html += `
    </div>
    </section>
    `
    for (const key in comentarios) {

        let comentario = ` ${comentarios[key].texto != null ? comentarios[key].texto : 'Sin comnetarios'} `
        html += `
        <p>${comentarios[key].nombre} </p>          
    <p>${comentario} </p>
      `;
    };
    document.getElementById('producto').innerHTML = html;
};



productoDetalle()
