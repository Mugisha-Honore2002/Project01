CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    discription VARCHAR(255)
    );

    CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    email VARCHAR(255);
    passwords VARCHAR(255)
    );