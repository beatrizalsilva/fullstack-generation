create database db_escola;
use db_escola;

create table tb_estudantes (
	id bigint auto_increment,
    nome varchar(100) not null,
    idade int not null,
    serie varchar(100) not null, 
    media float not null,
    primary key(id)
);

insert into tb_estudantes(nome, idade, serie, media) values('João Felix', 17, '3º ano', 8.5),
('Maria Antinieta Andrade', 16, '2º ano', 6.9),
('Pedro Lima', 18, '3º ano', 9.2),
('Ana Laura Siqueira', 17, '3º ano', 7.8),
('Mariana Lopez', 16, '2º ano', 6.5),
('Lucas Silveira', 17, '3º ano', 8.7),
('Julia Silva', 15, '2º ano', 7.2),
('Felipe Antunes', 18, '3º ano', 6.8);

select * from tb_estudantes where media > 7.0;
select * from tb_estudantes where media < 7.0;
update tb_estudantes set media = 6.7 where id = 2;
    
select * from tb_estudantes;