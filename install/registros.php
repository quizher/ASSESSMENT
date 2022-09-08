<?php



require_once './conexion.php';
$product_a = array();

$i = 0;
$fp = fopen("productos.txt", "r");
while (!feof($fp)) {
    $linea = fgets($fp);
    // echo $linea . "<br>";

    $product_a[$i] = $linea;

    $i++;
}

$coment_a = array();

$i = 0;
$fc = fopen("comentarios.txt", "r");
while (!feof($fc)) {
    $linea = fgets($fc);
    // echo $linea . "<br>";

    $coment_a[$i] = $linea;

    $i++;
}

shuffle($product_a);
// print_r($product_a);
// echo "recorrer arreglo <br>";

fclose($fp);
fclose($fc);

try {
    $sql = "INSERT INTO producto (id_producto, id_clasificacion, modelo, especificaciones, precio, imagen, visitas, activo) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);

    $contador = 0;
    foreach ($product_a as $row) {
        // echo $row . "<br>";
        $str_arr = explode(",", $row);

        $stmt->execute([NULL, $str_arr[0], $str_arr[1], $str_arr[2], $str_arr[3], $str_arr[4], $str_arr[5], $str_arr[6]]);
        $contador++;
    }

    $logFile = fopen("log.txt", 'a') or die("Error creando archivo");
    fwrite($logFile, "\n" . date("d/m/Y H:i:s") . " " . "Registros insertados" . " " . $contador) or die("Error escribiendo en el archivo");
    fclose($logFile);

    echo "exito<br>" . "Registros insertados" . " " . $contador;

    try {
        $sql = "INSERT INTO comentarios (id_comentarios , id_producto , texto, nombre, calificacion) 
    VALUES (?, ?, ?, ?, ?)";
        $stmt = $conexion->prepare($sql);

        $contador_ = 0;
        foreach ($coment_a as $row) {
            // echo $row . "<br>";
            $str_arr = explode(",", $row);

            $stmt->execute([NULL, $str_arr[0], $str_arr[1], $str_arr[2], $str_arr[3]]);
            $contador_++;
        }
        $logFile = fopen("log.txt", 'a') or die("Error creando archivo");
        fwrite($logFile, "\n" . date("d/m/Y H:i:s") . " " . "Registros insertados" . " " . $contador_) or die("Error escribiendo en el archivo");
        fclose($logFile);
        echo "exito<br>" . "Registros insertados" . " " . $contador_;
    } catch (Exception $e) {

        $logFile = fopen("log.txt", 'a') or die("Error creando archivo");
        fwrite($logFile, "\n" . date("d/m/Y H:i:s") . $e->getMessage()) or die("Error escribiendo en el archivo");
        fclose($logFile);
    }

    // echo 'logueado';
} catch (Exception $e) {

    $logFile = fopen("log.txt", 'a') or die("Error creando archivo");
    fwrite($logFile, "\n" . date("d/m/Y H:i:s") . $e->getMessage()) or die("Error escribiendo en el archivo");
    fclose($logFile);
}