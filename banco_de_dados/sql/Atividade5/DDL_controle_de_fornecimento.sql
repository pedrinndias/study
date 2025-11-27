--
-- File generated with SQLiteStudio v3.4.17 on qua nov 26 22:24:07 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Fornecedor
CREATE TABLE IF NOT EXISTS Fornecedor(
    CNPJ VARCHAR(50) CONSTRAINT pk_cnpj PRIMARY KEY,
    Razão_social VARCHAR(50),
    Cidade VARCHAR(50)
);

-- Table: Fornecimento
CREATE TABLE IF NOT EXISTS Fornecimento(
    CNPJ VARCHAR(50),
    Cod_peça INT,
    Cod_projeto INT,
    Quantidade INT,
    CONSTRAINT pk PRIMARY KEY (CNPJ,Cod_peça,Cod_projeto),
    CONSTRAINT fk_CNPJ FOREIGN KEY (CNPJ) REFERENCES Fornecedor(CNPJ),
    CONSTRAINT fk_Cod_peça FOREIGN KEY (Cod_peça) REFERENCES Peça(Cod_peça),
    CONSTRAINT fk_Cod_projeto FOREIGN KEY (Cod_projeto) REFERENCES Projeto(Cod_projeto)
);

-- Table: Peça
CREATE TABLE IF NOT EXISTS Peça(
    Cod_peça INT CONSTRAINT pk_cod_peça PRIMARY KEY,
    Descrição VARCHAR(50),
    Peso INT
);

-- Table: Projeto
CREATE TABLE IF NOT EXISTS Projeto(
    Cod_projeto INT CONSTRAINT pk_cod_projeto PRIMARY KEY,
    Nome VARCHAR(50),
    Orçamento REAL
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
