Create schema watch24;
Use watch24;
Create table users (
id int unsigned primary key auto_increment,
username varchar(100) not null,
mail varchar(150) not null,
contrasena varchar(255) not null,
nacimiento date not null,
telefono int unsigned not null,
created_at datetime,
updated_at datetime
);
Create table products(
id int unsigned primary key auto_increment,
imagen varchar(255) not null,
nombre varchar(200) not null,
creacion datetime,
descripcion text not null,
user_id int unsigned not null,
foreign key (user_id) references users(id),
created_at datetime,
updated_at datetime
);
Create table comments(
id int unsigned primary key auto_increment,
comentario text not null,
creacion datetime,
user_id int unsigned not null,
product_id int unsigned not null,
foreign key (user_id) references users(id),
foreign key (product_id) references products(id)
);


INSERT INTO users(id, username, mail, contrasena, nacimiento, telefono)
VALUES
(default, "lruizcoines", "lruiz@example.com", "lruiz123456", "2000-03-12", 1234567890),
(default, "fseidman", "fseidman@example.com", "fs123456", "2001-07-08", 1876543210),
(default, "mpautasso", "mpautasso@example.com", "mpc123456", "2001-06-26", 1121739900),
(default, "pepeargento", "pepea@example.com", "pepe10", "1971-05-17", 1231115213),
(default, "LNorris4", "Lando4@example.com", "Landoexample", "1999-02-07", 1235485213);


INSERT INTO products(id, imagen, nombre, creacion, descripcion, user_id)
VALUES
(default, "r7.jpg", "Chopard Mille Miglia Chromo", null, "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve", null, "Lorem Ipsum", 2),
(default, "r7.jpg", "Rolex Daytona", null, "Lorem Ipsum", 3),
(default, "r7.jpg", "Luminor Panerai", null, "Lorem Ipsum", 4),
(default, "r7.jpg", "Chopard Mille Miglia Chromo 2.0", null, "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve 2.0", null, "Lorem Ipsum", 4),
(default, "r7.jpg", "Rolex Daytona 2.0", null, "Lorem Ipsum", 5),
(default, "r7.jpg", "Luminor Panerai 2.0", null, "Lorem Ipsum", 5),
(default, "r7.jpg", "Chopard Mille Miglia Chromo 3.0", null, "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve 3.0", null, "Lorem Ipsum", 5);

INSERT INTO comments(id, comentario, creacion, user_id, product_id)
VALUES
(default, "Muy buen producto!", null, 1, 10),
(default, "Mucha calidad", null, 2, 8),
(default, "Elegancia en su máxima expresión", null, 3, 7),
(default, "Meh, vi mejores", null, 5, 5),
(default, "Muy buen producto!", null, 2, 9),
(default, "Mucha calidad", null, 5, 10),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", null, 4, 3),
(default, "Producto excelente, cumple de sobra con las expectativas. Muy recomendado para alguien que quiera un reloj a buen precio y con todas las funciones que se suelen requerir. Correa duradera y cómoda, el tamaño es comedido, en ningún caso molesta, muy cómodo de llevar. Recomendado.", null, 4, 1),
(default, "Muy buen producto!", null, 1, 4),
(default, "Mucha calidad", null, 2, 7),
(default, "Elegancia en su máxima expresión", null, 5, 3),
(default, "La verdad es que me ha impresionado, luce muy bien, es muy bonito.", null, 4, 6),
(default, "Muy buen producto!", null, 1, 2),
(default, "El producto presenta una gran calidad en sus materiales. Muy recomendable!!", null, 5, 1),
(default, "Elegancia en su máxima expresión", null, 3, 3),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", null, 5, 2),
(default, "Muy buen producto!", null, 1, 8),
(default, "Comodísimo, muy recomendable", null, 5, 7),
(default, "Pésimo producto, muy caro para nada", null, 3, 1),
(default, "Son los únicos relojes que me gustan. Este modelo en concreto es precioso, un reloj para vestir con tu toque informal.", null, 4, 4),
(default, "Muy buen producto!", null, 1, 6),
(default, "Mucha calidad", null, 2, 2),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", null, 3, 2),
(default, "Después de varios meses de uso estoy muy contento con él. Contra mayor uso más bonita se pone la correa. Además se ve la hora con total claridad.", null, 4, 9),
(default, "Muy buen producto!", null, 1, 1),
(default, "Pésimo producto, muy caro para nada", null, 2, 1),
(default, "Elegancia en su máxima expresión", null, 3, 6),
(default, "Meh, vi mejores", null, 5, 4),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", null, 1, 7),
(default, "Buen producto... Nada de otro planeta", null, 2, 3),
(default, "Elegancia en su máxima expresión", null, 5, 3),
(default, "Meh, vi mejores", null, 3, 2),
(default, "Muy buen producto!", null, 4, 4),
(default, "Mucha calidad", null, 2, 4),
(default, "Elegancia en su máxima expresión", null, 3, 10),
(default, "Pésimo producto, muy caro para nada", null, 4, 2),
(default, "Muy buen producto!", null, 1, 3),
(default, "Pésimo producto, muy caro para nada", null, 5, 6),
(default, "Finalmente hicieron uno de los mejores productos, impresionante!!", null, 3, 9),
(default, "Meh, vi mejores", null, 5, 9);

select * from users;