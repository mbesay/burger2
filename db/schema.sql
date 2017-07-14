CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devour BOOL DEFAULT FALSE,
    date TIMESTAMP NOT NULL ,
    
    PRIMARY KEY(id)
);

SELECT * FROM burgers;



INSERT INTO burger (burger_name) VALUES ('portibello');
INSERT INTO burger (burger_name) VALUES ('mushroom');
INSERT INTO burger (burger_name) VALUES ('bacon');
INSERT INTO burger (burger_name) VALUES ('lettace-tomatoe');
INSERT INTO burger (burger_name) VALUES ('onions');