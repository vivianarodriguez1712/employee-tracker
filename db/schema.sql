DROP DATABASE if exists tracker;
CREATE DATABASE tracker;
USE tracker;

CREATE TABLE Department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE Role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Department(id)
);

CREATE TABLE Employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    job_title VARCHAR(30),
    department VARCHAR(30),
    salary DECIMAL,
    manager VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES Role(id)
);

