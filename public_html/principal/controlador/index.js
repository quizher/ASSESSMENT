// console.log("hola");




productoDestacado = (pagina) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {

                let respuesta = JSON.parse(request.responseText);
                let exito = respuesta.exito;
                if (exito == true) {

                    if (respuesta.hasOwnProperty('producto')) {

                        let elementos = respuesta.producto;
                        let ultimo = respuesta.ultimo;
                        let pagina = respuesta.pagina;


                        vistaDestacado(elementos);
                        document.getElementById('pagina').value = pagina;
                        paginacionDestacado(ultimo, pagina);

                    } else {
                        document.getElementById('destacados').innerHTML = 'no hay información';

                    }
                } else {
                    document.getElementById('destacados').innerHTML = 'no hay información';
                }



            } else {
                let error = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
                console.log("error " + error);
            }
        }
    }

    // let buscar = document.getElementById('buscar').value;
    // document.getElementById('error-busqueda').innerHTML = '';

    request.open('POST', '../principal/modelo/recuperaDestacado.php', false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send('pagina=' + pagina);
};


vistaDestacado = (elementos) => {

    let html = ``;
    let count = 0;
    html += ` 
    <section class="cards contenedor">
        <h2 class="titulo">Productos destacados</h2>
        <div class="content-cards">
 `;
    for (const key in elementos) {
        html += `  
            <article class="card">
            <img src="${elementos[key].imagen}" alt="imagen producto">
            <h3>${elementos[key].modelo}</h3>
            <span>${elementos[key].nombre}</span>
            <p>${elementos[key].especificaciones} </p>
            <button class="detalle"onclick='vistaProductoDetalle("${elementos[key].id_producto}")'>Ver producto</button>
        </article>
        
          `;
    }
    html += `
    </div>
    </section>`;
    document.getElementById('destacados').innerHTML = html;
};


paginacionDestacado = (ultimo, pagina) => {

    let html_ = `<div class="btn-group me-2" role="group" aria-label="Second group">`;
    //let html_ = `<ul class="pagination">`;
    let previo = 0;
    let proximo = 0;
    let id_categoria = '';
    let nombre = '';
    let i;

    if (ultimo != 1) {
        if (pagina > 1) {
            previo = pagina - 1;
            //html_ += `<li class="page-item prev"><a class="page-link" onclick="paginas('${previo}')">Anterior</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoDestacado('${previo}')">Atras</button>`;
            for (i = pagina - 2; i < pagina; i++) {
                if (i > 0) {
                    //html_ += `<li class="page-item"><a onclick="paginas('${i}')" class="page-link">${i}</a></li>`;
                    html_ += `<button type="button" class="btn btn-secondary" onclick="productoDestacado('${i}')">${i}</button>`;
                }
            }
        }

        //html_ += `<li class="page-item active"><a class="page-link">${pagina}</a></li>`;
        html_ += `<button type="button" class="btn btn-secondary active">${pagina}</button>`;

        for (i = pagina + 1; i <= ultimo; i++) {
            //html_ += `<li class="page-item"><a onclick="paginas(${i})" class="page-link">${i}</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoDestacado(${i})">${i}</button>`;
            if (i >= pagina + 2) {
                break;
            }
        }

        if (pagina != ultimo) {
            proximo = pagina + 1;
            //html_ += `<li class="page-item next"><a class="page-link" onclick="paginas('${proximo}')">Siguiente</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoDestacado('${proximo}')">Siguiente</button>`;
        }
    }

    html_ += `</div>`;
    document.getElementById("paginacion").innerHTML = html_;
};


productoDestacado(1)



productoVendido = (pagina) => {
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
                        let ultimo = respuesta.ultimo;
                        let pagina = respuesta.pagina;


                        vistaVendido(elementos);
                        document.getElementById('pagina').value = pagina;
                        paginacionVendido(ultimo, pagina);


                    } else {
                        document.getElementById('vendidos').innerHTML = 'no hay información';

                    }
                } else {
                    document.getElementById('vendidos').innerHTML = 'no hay información';
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

    request.open('POST', '../principal/modelo/recuperaVendido.php', false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send('pagina=' + pagina);
};


vistaVendido = (elementos) => {

    let html = ``;
    let count = 0;
    html += ` 
    <section class="cards contenedor">
        <h2 class="titulo">Productos mas vendido</h2>
        <div class="content-cards">
 `;
    for (const key in elementos) {
        html += `  
            <article class="card">
            <img src="${elementos[key].imagen}" alt="imagen producto">
            <h3>${elementos[key].modelo}</h3>
            <span>${elementos[key].nombre}</span>
            <p>${elementos[key].especificaciones} </p>
            <button class="detalle"onclick='vistaProductoDetalle("${elementos[key].id_producto}")'>Ver producto</button>
        </article>
          `;
    }
    html += `
    </div>
    </section>`;
    document.getElementById('vendidos').innerHTML = html;
};

paginacionVendido = (ultimo, pagina) => {

    let html_ = `<div class="btn-group me-2" role="group" aria-label="Second group">`;

    let previo = 0;
    let proximo = 0;
    let id_categoria = '';
    let nombre = '';
    let i;

    if (ultimo != 1) {
        if (pagina > 1) {
            previo = pagina - 1;
            //html_ += `<li class="page-item prev"><a class="page-link" onclick="paginas('${previo}')">Anterior</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoVendido('${previo}')">Atras</button>`;
            for (i = pagina - 2; i < pagina; i++) {
                if (i > 0) {
                    //html_ += `<li class="page-item"><a onclick="paginas('${i}')" class="page-link">${i}</a></li>`;
                    html_ += `<button type="button" class="btn btn-secondary" onclick="productoVendido('${i}')">${i}</button>`;
                }
            }
        }

        //html_ += `<li class="page-item active"><a class="page-link">${pagina}</a></li>`;
        html_ += `<button type="button" class="btn btn-secondary active">${pagina}</button>`;

        for (i = pagina + 1; i <= ultimo; i++) {
            //html_ += `<li class="page-item"><a onclick="paginas(${i})" class="page-link">${i}</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoVendido(${i})">${i}</button>`;
            if (i >= pagina + 2) {
                break;
            }
        }

        if (pagina != ultimo) {
            proximo = pagina + 1;
            //html_ += `<li class="page-item next"><a class="page-link" onclick="paginas('${proximo}')">Siguiente</a></li>`;
            html_ += `<button type="button" class="btn btn-secondary" onclick="productoVendido('${proximo}')">Siguiente</button>`;
        }
    }

    html_ += `</div>`;
    document.getElementById("paginacion_vendidos").innerHTML = html_;
};

productoVendido(1)


vistaProductoDetalle = (id_producto) => {


    console.log('local ' + id_producto);
    sessionStorage.setItem("id_producto", id_producto);
    window.location.href = "../producto_detalle";


}



