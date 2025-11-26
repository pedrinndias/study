--
-- File generated with SQLiteStudio v3.4.17 on qua nov 26 08:17:10 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Cliente
CREATE TABLE IF NOT EXISTS Cliente(
    cpf INT CONSTRAINT pk_cpf PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    id_telefone INT,
    id_endereço INT, 
    CONSTRAINT fk_id_endereço, FOREIGN KEY (id_endereço) REFERENCES Endereço(id_endereço),
    CONSTRAINT fk_id_telefone, FOREIGN KEY (id_telefone) REFERENCES Telefone(id_telefone)
);

-- Table: Endereço
CREATE TABLE IF NOT EXISTS Endereço(
    rua VARCHAR(50),
    numero INT,
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    id_endereço INT CONSTRAINT pk_id_endereço PRIMARY KEY
);

-- Table: Livro
CREATE TABLE IF NOT EXISTS Livro(
    isbn INT CONSTRAINT pk_isbn PRIMARY KEY,
    nome_livro VARCHAR(50),
    ano_publicação_livro DATE,
    preço_livro REAL
);

-- Table: Pedido
CREATE TABLE IF NOT EXISTS Pedido(
    id_pedido INT CONSTRAINT pk_pedido PRIMARY KEY,
    quantidade_pedido INT,
    cpf INT, 
    isbn INT,
    CONSTRAINT fk_cpf FOREIGN KEY (cpf) REFERENCES Cliente(cpf),
    CONSTRAINT fk_isbn FOREIGN KEY (isbn) REFERENCES Livro(isbn)
);

-- Table: Telefone
CREATE TABLE IF NOT EXISTS Telefone(
    telefone TEXT,
    id_telefone INT CONSTRAINT pk_id_telefone PRIMARY KEY
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
