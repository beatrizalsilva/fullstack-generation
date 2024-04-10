create database db_cidade_dos_vegetais;
use db_cidade_dos_vegetais;

create table tb_produtos (
	id bigint auto_increment,
    nome varchar(100) not null,
    valor int not null,
    quantidade int not null,
    validade date not null,
    primary key(id)
);

insert into tb_produtos(nome, valor, quantidade, validade) values ("Abobrinha", 3.00, 5, "2024-05-03"),
("Inhame", 5.00, 2, "2024-05-09"),
("Berinjela", 7.00, 4, "2024-07-03"),
("Couve", 5.00, 2, "2024-06-03"),
("Brócolis", 6.50, 2, "2024-04-10"),
("Batata-doce", 4.00, 6, "2024-04-03"),
("Cenoura", 10.00, 10, "2024-03-07"),
("Aspargo", 13.00, 15, "2024-07-07"),
("Alface", 14.00, 8, "2024-07-01");

create table tb_categorias (
	id bigint auto_increment,
    descricao varchar(100),
    destino varchar(100) not null,
    primary key(id)
);

insert into tb_categorias(descricao, destino) values ("Frutos", "Assaí"),
("Folhas", "Mercadão"),
("Flores", "Tauste"),
("Tubérculos", "Feira da Parnaiba"),
("Caules", "Sacolão da Xepa"),
("Raizes", "Mercado Jundiaí");

alter table tb_produtos add categoria_id bigint;
alter table tb_produtos add constraint fk_produtos_categorias foreign key(categoria_id) references tb_categorias(id);

update tb_produtos set categoria_id = 1 where id = 1;
update tb_produtos set categoria_id = 4 where id = 2;
update tb_produtos set categoria_id = 1 where id = 3;
update tb_produtos set categoria_id = 2 where id = 4;
update tb_produtos set categoria_id = 3 where id = 5;
update tb_produtos set categoria_id = 6 where id = 6;
update tb_produtos set categoria_id = 6 where id = 7;
update tb_produtos set categoria_id = 5 where id = 8;
update tb_produtos set categoria_id = 2 where id = 9;

select * from tb_produtos where valor > 50;
select * from tb_produtos where valor between 50 and 150;
select * from tb_produtos where nome like "%C%";

select nome, valor, quantidade, validade, destino, tb_categorias.descricao from tb_produtos inner join tb_categorias 
on tb_produtos.categoria_id = tb_categorias.id;

select tb_produtos.nome, tb_categorias.descricao from tb_produtos inner join tb_categorias on tb_categorias.id = tb_produtos.categoria_id
where tb_categorias.descricao = "Raizes";

alter table tb_produtos modify valor decimal(6,2);

select * from tb_produtos;
select * from tb_categorias;