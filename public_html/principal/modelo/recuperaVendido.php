<?php

header('Content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

//
// Objeto para regresar la informacion
//

$jsonDatos = array();
// parametro que recibimos en URL
//
// Conexion a la base de datos
//

require_once '../../conexion/conexion.php';

$consulta = " SELECT P.id_producto
FROM producto AS P ";

$statement = $conexion->prepare($consulta);
$statement->execute();

if ($statement->rowCount() > 0) {

    //echo "si encontro registros <br>";

    $total_registros_cat = $statement->rowCount();


    $jsonDatos["total_registros_cat"] = $total_registros_cat;
    //
    //Total de registros a mostrar
    //

    $total_registros_mostrar = 10;

    $ultimo = ceil($total_registros_cat / $total_registros_mostrar);



    if ($ultimo < 1) {
        $ultimo = 1;
    }

    //
    //Numero de pagina
    //
    $pagina = 1;

    if (isset($_REQUEST['pagina'])) {
        $pagina = $_REQUEST['pagina'];
    }

    if ($pagina < 1) {
        $pagina = 1;
    } else if ($pagina > $ultimo) {
        $pagina = $ultimo;
    }

    $limite = 'LIMIT ' . ($pagina - 1) * $total_registros_mostrar . ',' . $total_registros_mostrar;

    //
    //Buscamos informacion
    //

    $consulta = " SELECT P.id_producto, P.modelo, P.especificaciones,P.imagen, CL.nombre
FROM producto AS P
LEFT JOIN clasificacion AS CL ON P.id_clasificacion = CL.id_clasificacion $limite";

    $statement = $conexion->prepare($consulta);
    $statement->execute();

    if ($statement->rowCount() > 0) {

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

            $jsonDatos['producto'][] = $row;
        }

        $jsonDatos["total"] = $total_registros_cat;
        $jsonDatos["ultimo"] = $ultimo;
        $jsonDatos["pagina"] = (int)$pagina;
        $jsonDatos["mostrar"] = (int)$total_registros_mostrar;

        $jsonDatos["exito"] = true;
        $jsonDatos["limite"] = $limite;
    } else {

        $respuesta["exito"] = false;
    }
} else {

    $respuesta["exito"] = false;
}

// $statement->null;
// $conexion->null;

//
// Mostramos informacion
//

echo json_encode($jsonDatos);