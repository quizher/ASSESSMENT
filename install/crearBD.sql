-- base assessment Enrique Guzman

-- Creamos la base de datos

CREATE DATABASE assessment;

-- Seleccionamos la base de datos

USE assessment;

-- Creamos la tabla producto

CREATE TABLE
    producto (
        id_producto int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_clasificacion int(11) NOT NULL,
        modelo varchar(180) COLLATE utf8_spanish_ci NOT NULL,
        especificaciones varchar(180) COLLATE utf8_spanish_ci NOT NULL,
        precio decimal(10, 2) NOT NULL,
        imagen varchar(180) COLLATE utf8_spanish_ci NOT NULL,
        activo tinyint(4) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish_ci;

-- Añadimos registros a la tabla productos

INSERT INTO
    producto (
        id_producto,
        id_clasificacion,
        modelo,
        especificaciones,
        precio,
        imagen,
        activo
    )
VALUES (
        0,
        1,
        'XPG Xenia ',
        '15.6\" FHD, Core i7-9750H, RTX 1060, 32GB en RAM, 1000 SSD. Gray',
        '2314.12',
        'https://webapi3.adata.com/storage/product/860_gallery_01.jpg',
        1
    ), (
        0,
        2,
        'DELL GT',
        '15.6\" FHD, Core i7-9750H, RTX 3060, 32GB en RAM, 512 SSD. Gray',
        '1511.18',
        'https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-7567-laptop/CS1703G0002-laptop-inspiron-15-7000-gaming-pdp-polaris-01.jpg',
        1
    ), (
        0,
        3,
        'HUAWEI',
        '15.6\" FHD, Core i3-9750H, RTX 1060, 8GB en RAM, 256 SSD. Gray',
        '3500.00',
        'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/12/huawei-matebook-14s-analisis-opinion-2569789.jpg',
        1
    ), (
        0,
        3,
        'HP',
        '15.6\" FHD, Core i7-9750H, RTX 1060, 32GB en RAM, 1000 SSD. Gray',
        '20000.00',
        'https://m.media-amazon.com/images/I/81sJlphddLS._AC_SX466_.jpg',
        1
    ), (
        0,
        1,
        'ASUS',
        '15.6\" FHD, Ryzen 9, RTX 3080, 32GB en RAM, 1000 SSD. Gray',
        '23233.00',
        'https://http2.mlstatic.com/D_NQ_NP_843179-MLA44998351426_022021-O.jpg',
        1
    ), (
        0,
        4,
        'LENOVO',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '34435.12',
        'https://static.lenovo.com/ww/campaigns/2021/legion/lenovo-legion-brand-hero-bkgd.png',
        1
    ), (
        0,
        5,
        'ACER',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '23566.34',
        'https://http2.mlstatic.com/D_NQ_NP_968580-MLA48980730241_012022-O.jpg',
        1
    ), (
        0,
        6,
        'ALIENWARE',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '34445.00',
        'https://cdn.pocket-lint.com/r/s/x1920/assets/images/158837-laptops-review-alienware-m15-r6-review-image4-jgwozr0vm2.jpg',
        1
    ), (
        0,
        7,
        'ASUS',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '5633.12',
        'https://hardzone.es/app/uploads-hardzone.es/2021/07/ASUS-ROG-AMD-Advantage.jpg',
        1
    ), (
        0,
        8,
        'DELL',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '1232.34',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2_O8oPdVK47DzCE17oNgPq6ZvEBh87krkQ&usqp=CAU',
        1
    ), (
        0,
        9,
        'HUAWEI',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '43568.00',
        'https://i.blogs.es/1feef5/img_20200212_144404/450_1000.jpg',
        1
    ), (
        0,
        10,
        'LENOVO',
        '15.6\" FHD, Ryzen 7, RTX 3050, 8GB en RAM, 512 SSD. Gray',
        '36772.45',
        'https://intercompras.com/images/productgallery/LENOVO_82K6009CLM_ICECAT_63835165.jpg',
        1
    );

-- Creamos la tabla comentarios

CREATE TABLE
    comentarios (
        id_comentarios int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_producto int(11) NOT NULL,
        texto varchar(180) COLLATE utf8_spanish_ci NOT NULL,
        nombre varchar(180) COLLATE utf8_spanish_ci NOT NULL,
        calificacion int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish_ci;

-- Añadimos registros a la tabla comentarios

INSERT INTO
    comentarios (
        id_comentarios,
        id_producto,
        texto,
        nombre,
        calificacion
    )
VALUES (
        0,
        1,
        'comentario 1',
        'nombre',
        5
    ), (
        2,
        2,
        'comentario 2',
        'nombre 1',
        2
    ), (
        3,
        3,
        'comentario 3',
        'nombre',
        3
    ), (
        4,
        4,
        'comentario 4',
        'nombre',
        5
    ), (
        5,
        5,
        'comentario 5',
        'nombre',
        2
    ), (
        6,
        6,
        'comentario 6',
        'nombre',
        5
    ), (
        7,
        7,
        'comentario 7',
        'nombre',
        4
    ), (
        8,
        8,
        'comentario 8',
        'nombre',
        5
    ), (
        9,
        9,
        'comentario 9',
        'nombre',
        5
    ), (
        10,
        12,
        'comentario 10',
        'nombre',
        5
    ), (
        11,
        2,
        'otro comentario',
        'nombre 2',
        5
    );

-- Creamos la tabla clasificacio

CREATE TABLE
    clasificacion (
        id_clasificacion int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_clase_hija int(11) NOT NULL,
        nombre varchar(180) COLLATE utf8_spanish_ci NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_spanish_ci;

-- Añadimos registros a la tabla clasificacio

INSERT INTO
    clasificacion (
        id_clasificacion,
        id_clase_hija,
        nombre
    )
VALUES (0, 1, 'clasificacion 1'), (0, 2, 'clasificacion 2'), (0, 1, 'clasificacion 3'), (0, 2, 'clasificacion 4'), (0, 1, 'clasificacion 5'), (0, 2, 'clasificacion 6'), (0, 1, 'clasificacion 7'), (0, 2, 'clasificacion 8'), (0, 1, 'clasificacion 9'), (0, 2, 'clasificacion 10');

-- Creamos la tabla clase_hija

CREATE TABLE
    clase_hija (
        id_clase_hija int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        clase_hija varchar(180) COLLATE utf8mb4_spanish_ci NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_spanish_ci;

-- Añadimos registros a la tabla clase_hija

INSERT INTO
    clase_hija (id_clase_hija, clase_hija)
VALUES (0, 'PC'), (0, 'Laptop');

-- Creamos la tabla accesorio

CREATE TABLE
    accesorio (
        id_accesorio int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_clasificacion int(11) NOT NULL,
        accesorio varchar(180) COLLATE utf8mb4_spanish_ci NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_spanish_ci;

-- Añadimos registros a la tabla accesorio

INSERT INTO
    accesorio (
        id_accesorio,
        id_clasificacion,
        accesorio
    )
VALUES (0, 1, 'mouse'), (0, 2, 'teclado');

-- Creamos la vista productos

CREATE TABLE
    producto_vista (
        id_producto int(11),
        nombre varchar(180),
        modelo varchar(180),
        especificaciones varchar(180),
        precio decimal(10, 2),
        texto varchar(180),
        calificacion int(11)
    );

DROP TABLE IF EXISTS producto_vista;

CREATE ALGORITHM = UNDEFINED DEFINER = root @localhost SQL SECURITY DEFINER VIEW producto_vista AS
SELECT
    p.id_producto AS id_producto,
    c.nombre AS nombre,
    p.modelo AS modelo,
    p.especificaciones AS especificaciones,
    p.precio AS precio,
    co.texto AS texto,
    co.calificacion AS calificacion
FROM ( (
            producto p
            join clasificacion c on(
                p.id_clasificacion = c.id_clasificacion
            )
        )
        join comentarios co on(p.id_producto = co.id_producto)
    )
ORDER BY co.calificacion DESC;

-- Añadir visitas a producto

ALTER TABLE producto ADD visitas int(11) NOT NULL AFTER imagen;

-- llave foranea producto

ALTER TABLE producto
ADD
    CONSTRAINT clasificacion_fk FOREIGN KEY (id_clasificacion) REFERENCES clasificacion(id_clasificacion) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- llave foranea comentarios

ALTER TABLE comentarios
ADD
    CONSTRAINT producto_fk FOREIGN KEY (id_producto) REFERENCES producto (id_producto) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- llave foranea clasificacion

ALTER TABLE clasificacion
ADD
    CONSTRAINT clase_hija_fk FOREIGN KEY (id_clase_hija) REFERENCES clase_hija (id_clase_hija) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- llave foranea accesorio

ALTER TABLE accesorio
ADD
    CONSTRAINT clasificacion_fk2 FOREIGN KEY (id_clasificacion) REFERENCES clasificacion (id_clasificacion) ON DELETE RESTRICT ON UPDATE RESTRICT;