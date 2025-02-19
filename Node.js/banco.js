const mysql                 = require("mysql");
const path                  = require("path");
CREATE DATABASE nails; -- Cria o banco de Dados
USE nails; -- Set como banco
DROP TABLE users;
DROP TABLE devices;
-- Cria uma tabela de Usuarios 
CREATE TABLE users (
	id INT(11) PRIMARY KEY AUTO_INCREMENT, -- Chave primaria (Não pode se repetir, e possui auto incremento, EX: 1,2,3..... )
	username VARCHAR(250) NOT NULL, -- not null obriga a preencher algo
	email VARCHAR(250) NOT NULL UNIQUE, -- unique garante a Unicdade
  password VARCHAR(250) NOT NULL,
	phone VARCHAR(20)
)ENGINE=INNODB
;
-- Insere um usuario
INSERT users (username, email, password) VALUES ('Gabriel', 'darezzo.gabriel@gmail.com', '12345'); -- Auto_Increment vai adicionar = 1  no usr_id
-- Insere um usuario
INSERT users (username, email, password) VALUES ('Webertbh', 'webertbh@gmail.com', '12345'); -- Auto_Increment vai adicionar = 2  no usr_id
SELECT * FROM users; -- Lista todos os Usuarios
;
DROP TABLE locations -- Apaga tabela e conteudo (estrutura + dados)
;
CREATE TABLE locations (
	id INT(8) PRIMARY KEY AUTO_INCREMENT,
	zip_code CHAR(8) NOT NULL,
	street VARCHAR(250) NOT NULL,
	street_number VARCHAR(50) NOT NULL,
	neighborhood VARCHAR(250),
	city VARCHAR(250),
	state CHAR(2) NOT NULL,	
	usr_id INT(11) NOT NULL,
	lat FLOAT(10, 8),
	lng FLOAT(11, 8),	
  KEY `idx_usr_id` (`usr_id`),
	CONSTRAINT `fk_locations_users` FOREIGN KEY (`usr_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
)ENGINE=INNODB;

INSERT locations (zip_code, street, street_number, neighborhood, state, usr_id) VALUES ('05373030', 'Rua Isidoro Favaro', '78', 'JD ester', 'SP', 1);
INSERT locations (zip_code, street, street_number, neighborhood, state, usr_id) VALUES ('05373020', 'Rua Mafalda Favaro', '80', 'JD ester', 'SP', 1);
INSERT locations (zip_code, street, street_number, neighborhood, state, usr_id) VALUES ('05373010', 'Rua Chatuba', '80', 'JD ester', 'RJ', 2);
INSERT locations (zip_code, street, street_number, neighborhood, state, usr_id) VALUES ('05373010', 'Rua Pampulhax', '80', 'Pampulha', 'GO', 2)

;
SELECT * FROM locations 
;
SELECT 
  * 
FROM locations
-- WHERE state = 'SP'
-- usr_id = 2
;

SELECT 
  *
 FROM 
users
JOIN locations ON (
  users.id = locations.usr_id
)
-- WHERE state = 'GO'
;
-- getLocais 
-- getLocations
SELECT 
  *
 FROM 
users
JOIN locations ON (
  users.usr_id = locations.usr_id
)
WHERE 
users.usr_id = 1
;
SELECT 
  * 
FROM users 
INNER JOIN locations ON (
  locations.usr_id = users.id
)
;

SELECT 
COUNT(locations.id),
  users.username
FROM users
LEFT JOIN locations ON (
  locations.usr_id = users.id
)
GROUP BY users.id

host     : "localhost",
user     : "administrator",
password : "Admin@123",
database : "easy_control"