Create schema watch24;
Use watch24;
Create table users (
id int unsigned primary key auto_increment,
username varchar(100) not null,
mail varchar(150) not null,
imagen varchar(100) not null,
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
descripcion text not null,
user_id int unsigned not null,
foreign key (user_id) references users(id),
created_at datetime,
updated_at datetime
);
Create table comments(
id int unsigned primary key auto_increment,
comentario text not null,
user_id int unsigned not null,
product_id int unsigned not null,
foreign key (user_id) references users(id),
foreign key (product_id) references products(id)
);


INSERT INTO users(id, username, mail, imagen, contrasena, nacimiento, telefono)
VALUES
(default, "lruizcoines", "lruiz@example.com", "a.jpg", "lruiz123456", "2000-03-12", 1234567890),
(default, "fseidman", "fseidman@example.com", "a.jpg", "fs123456", "2001-07-08", 1876543210),
(default, "mpautasso", "mpautasso@example.com", "a.jpg", "mpc123456", "2001-06-26", 1121739900),
(default, "pepeargento", "pepea@example.com", "a.jpg", "pepe10", "1971-05-17", 1231115213),
(default, "LNorris4", "Lando4@example.com", "a.jpg", "Landoexample", "1999-02-07", 1235485213);


INSERT INTO products(id, imagen, nombre, descripcion, user_id)
VALUES
(default, "r7.jpg", "Chopard Mille Miglia Chromo", "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve", "Lorem Ipsum", 2),
(default, "r7.jpg", "Rolex Daytona", "Lorem Ipsum", 3),
(default, "r7.jpg", "Luminor Panerai", "Lorem Ipsum", 4),
(default, "r7.jpg", "Chopard Mille Miglia Chromo 2.0", "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve 2.0", "Lorem Ipsum", 4),
(default, "r7.jpg", "Rolex Daytona 2.0", "Lorem Ipsum", 5),
(default, "r7.jpg", "Luminor Panerai 2.0", "Lorem Ipsum", 5),
(default, "r7.jpg", "Chopard Mille Miglia Chromo 3.0", "Lorem Ipsum", 1),
(default, "r7.jpg", "F.P. Journe Automatique Réserve 3.0", "Lorem Ipsum", 5);

INSERT INTO comments(id, comentario, user_id, product_id)
VALUES
(default, "Muy buen producto!", 1, 10),
(default, "Mucha calidad", 2, 8),
(default, "Elegancia en su máxima expresión", 3, 7),
(default, "Meh, vi mejores", 5, 5),
(default, "Muy buen producto!", 2, 9),
(default, "Mucha calidad", 5, 10),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", 4, 3),
(default, "Producto excelente, cumple de sobra con las expectativas. Muy recomendado para alguien que quiera un reloj a buen precio y con todas las funciones que se suelen requerir. Correa duradera y cómoda, el tamaño es comedido, en ningún caso molesta, muy cómodo de llevar. Recomendado.", 4, 1),
(default, "Muy buen producto!", 1, 4),
(default, "Mucha calidad", 2, 7),
(default, "Elegancia en su máxima expresión", 5, 3),
(default, "La verdad es que me ha impresionado, luce muy bien, es muy bonito.", 4, 6),
(default, "Muy buen producto!", 1, 2),
(default, "El producto presenta una gran calidad en sus materiales. Muy recomendable!!", 5, 1),
(default, "Elegancia en su máxima expresión", 3, 3),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", 5, 2),
(default, "Muy buen producto!", 1, 8),
(default, "Comodísimo, muy recomendable", 5, 7),
(default, "Pésimo producto, muy caro para nada", 3, 1),
(default, "Son los únicos relojes que me gustan. Este modelo en concreto es precioso, un reloj para vestir con tu toque informal.", 4, 4),
(default, "Muy buen producto!", 1, 6),
(default, "Mucha calidad", 2, 2),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", 3, 2),
(default, "Después de varios meses de uso estoy muy contento con él. Contra mayor uso más bonita se pone la correa. Además se ve la hora con total claridad.", 4, 9),
(default, "Muy buen producto!", 1, 1),
(default, "Pésimo producto, muy caro para nada", 2, 1),
(default, "Elegancia en su máxima expresión", 3, 6),
(default, "Meh, vi mejores", 5, 4),
(default, "Deberían trabajar en mejoras... pero es muy bueni igualmente", 1, 7),
(default, "Buen producto... Nada de otro planeta", 2, 3),
(default, "Elegancia en su máxima expresión", 5, 3),
(default, "Meh, vi mejores", 3, 2),
(default, "Muy buen producto!", 4, 4),
(default, "Mucha calidad", 2, 4),
(default, "Elegancia en su máxima expresión", 3, 10),
(default, "Pésimo producto, muy caro para nada", 4, 2),
(default, "Muy buen producto!", 1, 3),
(default, "Pésimo producto, muy caro para nada", 5, 6),
(default, "Finalmente hicieron uno de los mejores productos, impresionante!!", 3, 9),
(default, "Meh, vi mejores", 5, 9);

select * from users;