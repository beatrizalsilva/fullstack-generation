create database db_livraria;
use db_livraria;

create table tb_produto (
	id bigint auto_increment,
    titulo varchar(255) not null,
    autor varchar(100) not null,
    editora varchar(100) not null,
    preco decimal(5, 2) not null,
    primary key(id)
);

insert into tb_produto(titulo, autor, editora, preco) values("Código Limpo", "Roberto C Martin", "Alta Books", 100.00), 
("O Cálice dos Deuses", "Rick Riordan", "Intrínseca", 55.00),
("O Caminho dos Reis", "Brandon Sanderson", "Trama", 125.98),
("Goods Omens", "Neil Gaiman", "Bertrand Brasil", 84.00),
("Box: The Witcher", "Andrzej Sapkowski", "WMF Martins Fontes", 394.41),
("Box: Harry Potter Premium", "J.K. Rowling", "Rocco", 512.89),
("Box: Demon Slayer", "Koyoharu Gotouge", "Panini", 600.31),
("Box: Brotherband", "John Flanagan", "Fundamento", 516.23);

    
select * from tb_produto where preco > 500.00;
select * from tb_produto where preco < 500.00;
update tb_produto set preco = 135.00 where id = 3;
    
select * from tb_produto;