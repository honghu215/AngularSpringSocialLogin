# AngularSpringSocialLogin
Spring security with local and social login with Google, Github or Facebook, Angular 6 as front end tool

## Installation

  ```
  git clone https://github.com/honghu215/AngularSpringSocialLogin.git
  ```
  
#### Front End  
  
  ```
  cd frontend
  npm i
  npm start
  ```
  
#### Back End
  
  Creat Google, Facebook and Github Apps for login and then add the client ids and secrets to src/main/resources/application.yml
  
  ```
  cd backend
  mvn clean install
  mvn spring-boot:run
  ```
***If you don't want to run backend server locally, you can use my remote API server. Just clone RemoteAPI branch and only run frontend project.
But login with Google, Facebook and Github won't work, front end project runs locally.***
