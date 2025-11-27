CREATE TABLE Telefone(
    telefone TEXT,
    cpf INT,
    CONSTRAINT fk_cpf, FOREIGN KEY (cpf) REFERENCES Cliente(cpf) 
);

CREATE TABLE Cliente(
    cpf INT CONSTRAINT pk_cpf PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    id_telefone INT,
    id_endereço INT, 
    rua VARCHAR(50),
    numero INT,
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    CONSTRAINT fk_id_endereço, FOREIGN KEY (id_endereço) REFERENCES Endereço(id_endereço)
);


CREATE TABLE Livro(
    isbn INT CONSTRAINT pk_isbn PRIMARY KEY,
    nome_livro VARCHAR(50),
    ano_publicação_livro DATE,
    preço_livro REAL
);

CREATE TABLE Pedido(
    id_pedido INT CONSTRAINT pk_pedido PRIMARY KEY,
    cpf INT, 
    isbn INT,
    CONSTRAINT fk_cpf FOREIGN KEY (cpf) REFERENCES Cliente(cpf)
);

CREATE TABLE Item_pedido(
    quantidade INT,
    id_pedido INT,
    isbn INT,
    CONSTRAINT fk_id_pedido, FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    CONSTRAINT fk_isbn, FOREIGN KEY (isbn) REFERENCES Livro(isbn)
);