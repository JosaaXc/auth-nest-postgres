<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Description 
This project brings together everything needed to work with Postgres using type orm and at the same time an authentication with JWT and roles loaded.

# Used Packages

``` yarn add @nestjs/config ```
``` yarn add @nestjs/typeorm typeorm pg ```
``` yarn add uuid ```
``` yarn add -D @types/uuid ```
``` yarn add class-validator class-transformer ```
``` yarn add class-validator class-transformer ```
``` yarn add bcrypt ```
``` yarn add -D @types/bcrypt ```
``` yarn add @nestjs/passport passport ```
``` yarn add @nestjs/jwt passport-jwt ```
``` yarn add -D @types/passport-jwt ```

 
# Clone the project 

1. Clone project 
2. Execute: ```yarn install``` 
3. Clone the ```.env.template`` file and rename it to ```.env```.
4. Change environment variables 
5. Change the user entity in case you need other information there
6. Pull up the database in case you need it
````docker-compose up -d```.
7. Run the project: ````yarn start:dev```.
 