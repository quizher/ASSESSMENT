<?php

$servidor   = "localhost";
$usuario    = "root";
$contrasena = "";
$base       = "assessment";
$sql = "mysql:host=$servidor;dbname=$base;";

//Conexión con control de errores
$opciones = [PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"];
try {
    $conexion = new PDO($sql, $usuario, $contrasena, $opciones);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo 'logueado';
} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}