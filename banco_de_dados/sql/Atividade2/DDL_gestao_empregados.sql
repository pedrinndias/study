--
-- File generated with SQLiteStudio v3.4.17 on qua nov 26 20:47:44 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Caminhões_de_carga
CREATE TABLE IF NOT EXISTS Caminhões_de_carga(
    Capacidade_carga INT,
    Número_de_eixos INT,
    Altura_maxima INT,
    Número_chassi VARCHAR(50) CONSTRAINT pk_numero_chassi PRIMARY KEY,
    CONSTRAINT fk_número_chassi FOREIGN KEY (Número_chassi) REFERENCES Veículo(Número_chassi)
);

-- Table: Carros_de_passeio
CREATE TABLE IF NOT EXISTS Carros_de_passeio(
    Volume_porta_malas INT,
    Tipo_combustível VARCHAR(50),
    Quantidade_passageiros INT,
    Número_chassi VARCHAR(50) CONSTRAINT pk_número_chassi PRIMARY KEY,
    CONSTRAINT fk_número_chassi FOREIGN KEY (Número_chassi) REFERENCES Veículo(Número_chassi)
);

-- Table: Veículo
CREATE TABLE IF NOT EXISTS Veículo(
    Placa VARCHAR(50),
    Numero_chassi CARCHAR(50) CONSTRAINT pk_numero_chassi PRIMARY KEY,
    Marca VARCHAR(50),
    Ano_fabricação SMALLINT,
    Tipo_veículo VARCHAR(8)
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
