This is a simple todo list [Express Js](https://expressjs.com/) restfull api project with Typescript and Sequelize ORM for starting restfull api project.

## Getting Started

```bash
git clone https://github.com/kadarisman/express-todo-typescript
create a mysql database from your machine with the name 'todo'
edit file .env.example according to your database configuration
change .env.example file name to .env
npm install
run migration for mapping into database engine
 ./node_modules/.bin/sequelize-cli db:migrate
open terminal : 
npm run ts
open another terminal :
npm run dev
# or
yarn ts
yarn dev
```

custom headers x-secret-key value
Open [http://localhost:8000](http://localhost:3000) with 

create new migrations and model :
 ```bash
#example
 ./node_modules/.bin/sequelize-cli model:generate --name table_name --attributes colomn_1:string,colomn_2:integer,colomn_3:text --underscored
 run migration for mapping into database engine
 ./node_modules/.bin/sequelize-cli db:migrate
```
