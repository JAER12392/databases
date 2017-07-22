CREATE DATABASE IF NOT EXISTS chatter;

USE chatter;

CREATE TABLE IF NOT EXISTS users (
  id integer primary key auto_increment,
  username char(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
  id integer primary key auto_increment,
  room text,
  message char(140) not null,
  author integer not null,
  FOREIGN KEY (author) REFERENCES users(id) 
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

