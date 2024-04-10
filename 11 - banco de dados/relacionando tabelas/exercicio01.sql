create database db_generation_game_online;
use db_generation_game_online;

create table tb_personagem (
	id bigint auto_increment,
    nome varchar(100) not null,
    nivel int not null,
    poder_ataque int not null,
    poder_defesa int not null,
    primary key(id)
);

insert into tb_personagem(nome, nivel, poder_ataque, poder_defesa) values("Cirilla", 16, 2800, 2200),
("Legolas", 19, 3200, 1800),
("Gandalf", 20, 3500, 2700),
("Ragnar", 17, 2950, 2000),
("Deaton", 17, 1200, 1000),
("Halt", 20, 3500, 1850),
("Horace", 17, 2600, 2400),
("Will", 15, 1700, 1900);

create table tb_classes (
	id bigint auto_increment,
    classe varchar(100) not null,
    tipo varchar(100) not null,
    primary key(id)
);

insert into tb_classes(classe, tipo) values("Guerreiro", "Resistência"),
("Arqueiro", "Caçador"),
("Mago", "Conjurador"),
("Bárbaro", "Fúria"),
("Druida", "Emissário");

select * from tb_classes;

-- criando a chave estrangeira
alter table tb_personagem add classes_id bigint;
alter table tb_personagem add constraint fk_personagem_classes foreign key(classe_id) references tb_classes(id);

-- atualizar dados com a classes_id
update tb_personagem set classes_id = 1 where id = 1;
update tb_personagem set classes_id = 2 where id = 2;
update tb_personagem set classes_id = 3 where id = 3;
update tb_personagem set classes_id = 4 where id = 4;
update tb_personagem set classes_id = 5 where id = 5;
update tb_personagem set classes_id = 2 where id = 6;
update tb_personagem set classes_id = 1 where id = 7;
update tb_personagem set classes_id = 2 where id = 8;

select * from tb_personagem;

select * from tb_personagem where poder_ataque > 2000;
select * from tb_personagem where poder_defesa between 1000 and 2000;
select * from tb_personagem where nome like "%C%";

-- usando inner join (relacionar tabelas)
select nome, nivel, poder_ataque, poder_defesa, tipo, tb_classes.classe from tb_personagem inner join tb_classes 
on tb_personagem.classes_id = tb_classes.id;

select tb_personagem.nome, classe, tb_classes.tipo from tb_personagem inner join tb_classes on tb_classes.id = tb_personagem.classes_id
where tb_classes.classe = "Arqueiro";