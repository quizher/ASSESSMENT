<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASSESSMENT- Enrique Guzmán</title>
    <link rel="stylesheet" href="../assets/css//style.css">
</head>

<body>

    <?php include '../navbar/index.php'; ?>

    <input type="hidden" id="id_clasificacion" name="id_clasificacion" readonly>


    <div id="destacados"></div>

    <ul class="pagination" id="paginacion"></ul>



    <div id="vendidos"></div>
    <ul class="pagination" id="paginacion_vendidos"></ul>

    <input type="hidden" id="pagina" value="1" />


    <script src="controlador/index.js"></script>

</body>

</html>