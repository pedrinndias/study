--
-- File generated with SQLiteStudio v3.4.17 on qua nov 26 18:52:57 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Departamento
CREATE TABLE IF NOT EXISTS Departamento(
    Nome VARCHAR(50),
    ID_Departamento INT CONSTRAINT pk_ID_Departamento PRIMARY KEY,
    Telefone_principal VARCHAR(15)
);

-- Table: Empregado
CREATE TABLE IF NOT EXISTS Empregado(
    Nome VARCHAR(50),
    Sobrenome VARCHAR(50),
    CPF CHAR(11) CONSTRAINT pk_cpf PRIMARY KEY,
    Data_nasc DATE,
    Numero_endereço INT,
    Rua VARCHAR(50),
    Bairro VARCHAR(50),
    Cidade VARCHAR(50),
    Estado VARCHAR(50),
    Data_alocação DATE,
    id_departamento INT,
    CONSTRAINT fk_id_departamento FOREIGN KEY (id_departamento) REFERENCES Departamento(id_departamento)
);

-- Table: Funcionário
CREATE TABLE IF NOT EXISTS Funcionário(
    CPF_funcionário CHAR(11),
    CPF_superfisor CHAR(11),
    CONSTRAINT pk_CPF_funcionário PRIMARY KEY (CPF_funcionário),
    CONSTRAINT fk_CPF_superfisor FOREIGN KEY (CPF_superfisor) REFERENCES Supervisor(CPF_superfisor)
);

-- Table: Gerente
CREATE TABLE IF NOT EXISTS Gerente(
    CPF_gerente CHAR(11),
    Data_posse DATE,
    CONSTRAINT pk_CPF_gerente PRIMARY KEY (CPF_gerente), -- tem que adcionar o nome da variavel entre parenteses quando não colocamos a CONSTRAINT em seguida da declaração da variável
    CONSTRAINT fk_CPF_gerente FOREIGN KEY (CPF_gerente) REFERENCES Empregado(CPF)
);

-- Table: Supervisor
CREATE TABLE IF NOT EXISTS Supervisor(
    CPF_superfisor CHAR(11) CONSTRAINT pk_CPF_superfisor PRIMARY KEY
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
