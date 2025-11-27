--
-- File generated with SQLiteStudio v3.4.17 on qua nov 26 21:25:00 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Dependente
CREATE TABLE IF NOT EXISTS Dependente(
    Número_matrícula INT,
    Nome VARCHAR(50),
    Id_dependente INT,
    Data_nascimento DATE,
    Grau_parentesco VARCHAR(50),
    CONSTRAINT pk_dependente PRIMARY KEY (Número_matrícula, ID_Dependente),
    CONSTRAINT fk_número_matrícula FOREIGN KEY (Número_matrícula) REFERENCES Sócio(Número_matrícula) ON DELETE CASCADE --aqui garantimos que se o sócio sair, o dependente sai também
);

-- Table: Sócio
CREATE TABLE IF NOT EXISTS Sócio(
    Número_matrícula INT CONSTRAINT pk_número_matrícula PRIMARY KEY,
    Nome VARCHAR(50),
    CPF CHAR(11),
    Data_adesão DATE    
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
