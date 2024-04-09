create database db_rh;
use db_rh;

create table tb_colaborador (
    id bigint auto_increment,
    nome varchar(255) not null,
    cargo varchar(100) not null,
    departamento varchar(100) not null,
    salario decimal(10, 2) not null,
    primary key(id)
);
    

insert into tb_colaborador(nome, cargo, departamento, salario) values("João da Silva", "Analista de RH", "Recursos Humanos", 2200.00);
insert into tb_colaborador(nome, cargo, departamento, salario) values("Pedro Almeida", "Gerente de Vendas", "Vendas", 3000.00);
insert into tb_colaborador(nome, cargo, departamento, salario) values("Lidia Albuquerque", "Analista Financeiro", "Financeiro", 2700.00);
insert into tb_colaborador(nome, cargo, departamento, salario) values("Catarina Arragão", "Analista de suporte", "Infraestrutura", 2500.00);
insert into tb_colaborador(nome, cargo, departamento, salario) values("Maria Souza", "Estagiária", "Administração", 1500.00);
    
select * from tb_colaborador where salario > 2000.00;
select * from tb_colaborador where salario < 2000.00;
update tb_colaborador set salario = 1600.00 where id = 5;
    
select * from tb_colaborador;