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


//
//Buscamos informacion
//

$consulta = " SELECT id_clasificacion, nombre
FROM clasificacion 
";

$statement = $conexion->prepare($consulta);
$statement->execute();


while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

    $jsonDatos['clasificacion'][] = $row;
}




// $statement->null;
// $conexion->null;

$jsonDatos["exito"] = true;

//
// Mostramos informacion
//

echo json_encode($jsonDatos);