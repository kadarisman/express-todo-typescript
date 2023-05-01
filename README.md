This is a simple todo list [Express Js](https://expressjs.com/) restfull api project with Typescript and knex js query builder for starting restfull api project.

## Demo

GET [https://express-todo-typescript.vercel.app/todos)](https://express-todo-typescript.vercel.app/todos)

GET [https://express-todo-typescript.vercel.app/todos/1](https://express-todo-typescript.vercel.app/todos/1)

POST [https://express-todo-typescript.vercel.app/todos](https://express-todo-typescript.vercel.app/todos)

PUT [https://express-todo-typescript.vercel.app/todos/1](https://express-todo-typescript.vercel.app/todos/1)

DELETE [https://express-todo-typescript.vercel.app/todos/1](https://express-todo-typescript.vercel.app/todos/1)

request header requires 'x-secret-key' for create, update, delete


## Getting Started

```bash
git clone https://github.com/kadarisman/express-todo-typescript

#create a mysql database from your machine run sql script below:
CREATE DATABASE IF NOT EXISTS `todo_list` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `todo_list`;
CREATE TABLE IF NOT EXISTS `todos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task` varchar(100) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

edit file .env.example according to your database configuration
change .env.example file name to .env

open terminal : 
npm install
npm run ts
open another terminal :
npm run dev
# or
yarn ts
yarn dev
```

custom headers x-secret-key value
Open [http://localhost:8000/todos](http://localhost:8000/todos) with postman for testing

