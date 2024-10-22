CREATE TABLE carro (
    id_carro SERIAL PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT,
    cor VARCHAR(20)
);

CREATE TABLE cliente (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    telefone VARCHAR(16)
);

CREATE TABLE pedido_venda (
    id_pedido SERIAL PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_carro INT NOT NULL,
    data_pedido DATE NOT NULL,
    valor_pedido DECIMAL(6, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_carro) REFERENCES carro(id_carro)
);

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES ('Toyota', 'Corolla', 2020, 'Prata');

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES ('Honda', 'Civic', 2019, 'Preto');

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES ('Ford', 'Focus', 2021, 'Branco');

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES ('Chevrolet', 'Onix', 2018, 'Vermelho');

INSERT INTO carro (marca, modelo, ano, cor) 
VALUES ('Volkswagen', 'Golf', 2022, 'Azul');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES ('Carlos Silva', '12345678901', '(11) 99999-1234');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES ('Maria Oliveira', '23456789012', '(21) 98888-5678');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES ('João Souza', '34567890123', '(31) 97777-9101');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES ('Ana Santos', '45678901234', '(41) 96666-1122');

INSERT INTO cliente (nome, cpf, telefone) 
VALUES ('Lucas Pereira', '56789012345', '(51) 95555-3344');

INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) 
VALUES (1, 1, '2023-09-01', 5000.00);

INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) 
VALUES (2, 2, '2023-09-05', 5500.00);

INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) 
VALUES (3, 3, '2023-09-10', 4800.00);

INSERT INTO pedido_venda (id_cliente, id_carro, data_pedido, valor_pedido) 
VALUES (4, 4, '2023-09-15', 4200.00);