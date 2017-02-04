create database `burgers_db`;
use `burgers_db`;

create table `burgers` (
    `id` int(11) not null AUTO_INCREMENT,
    `burger_name` varchar(45) not null,
    `devoured` int(11) null,
    `date` timestamp,
    primary key (`id`));