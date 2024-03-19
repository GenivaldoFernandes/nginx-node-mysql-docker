CREATE DATABASE IF NOT EXISTS CADASTRO;
USE CADASTRO;

CREATE TABLE IF NOT EXISTS pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE USER 'sup'@'%' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO 'sup'@'%';