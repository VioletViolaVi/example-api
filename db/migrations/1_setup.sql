DROP TABLE
  IF EXISTS bus;

CREATE TABLE
  bus (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    capacity INT NOT NULL
  );

DROP TABLE
  IF EXISTS restaurant;

CREATE TABLE
  restaurant (
    id SERIAL PRIMARY KEY,
    food VARCHAR(50) NOT NULL,
    price INT NOT NULL
  );
