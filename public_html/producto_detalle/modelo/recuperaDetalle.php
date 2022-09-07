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

$id_producto = $_REQUEST['id_producto'];
//
//Buscamos informacion
//


$consulta = "SELECT texto, nombre
FROM comentarios 
WHERE id_producto = $id_producto";

$statement = $conexion->prepare($consulta);
$statement->execute();


while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $jsonDatos['comentario'][] = $row;
}



$consulta = "SELECT P.id_producto, P.modelo, P.especificaciones, P.imagen, CL.nombre
FROM producto AS P
LEFT JOIN clasificacion AS CL ON P.id_clasificacion = CL.id_clasificacion
WHERE P.id_producto = $id_producto";

$statement = $conexion->prepare($consulta);
$statement->execute();


while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {




    $jsonDatos['producto'][] = $row;
}




// $statement->null;
// $conexion->null;

$jsonDatos["exito"] = true;

//
// Mostramos informacion
//

echo json_encode($jsonDatos);