### Schema 

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(70) NOT NULL,
	burger_name BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);