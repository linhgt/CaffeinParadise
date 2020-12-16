DROP DATABASE IF EXISTS caffeinParadise_db;
CREATE DATABASE caffeinParadise_db;

USE caffeinParadise_db;

CREATE TABLE HotCoffeeDrinks (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)  NOT NULL,
  size ENUM ("small", "medium", "large") NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE ColdCoffeeDrinks (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)  NOT NULL,
  size ENUM ("small", "medium", "large") NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);
