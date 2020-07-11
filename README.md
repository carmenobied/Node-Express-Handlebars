# Node-Express-Handlebars: Burger App
![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen)

The goal was to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM, by following the MVC design pattern, using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. 

Bottomless-Burgers is a restaurant app that lets users input the names of burgers they'd like to eat. The app involves the following functionalities:
* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* The app will store every burger in a database, whether devoured or not.

Explore the app here: [Bottomless Burgers App](https://protected-dawn-84534.herokuapp.com/).

# Table of Contents
  * [User Story](#User-Story)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Tests](#License)
  * [Questions](#Questions)

## User Story
```
AS A user, I want to be able to enter the burgers I want to devour into a waiting area

I WANT to be able to move the burger to the devoured area if I've devoured it

SO THAT I can have a log of all the burgers that I have devoured
```

## Installation
```
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Run the command-lines below to run the app functionality. You can also access the files and assets via Visual Studio to view the code. 
iv. Explore the app, which allows users to input the names of burgers they'd like to eat and tracks/stores it in a database.
v. App deployed on Heroku (utilize the MYSQL Heroku Deployment Guide)
```
To add `.env` file to local drive with the environmental variables in the root directory:
1. Run `npm install dotenv` in the root directory - [dotenv package](https://www.npmjs.com/package/dotenv)
3. Create `.env file` and add the **environmental variables**
4. Run `node app.js` 

If everything was installed correctly, you should be able to run it locally in http://localhost:8080/.

## Deployed Application
Application deployed on Heroku: [Bottomless Burgers App](https://protected-dawn-84534.herokuapp.com/).

## Usage
```
Technologies Used:
MVC - Node.js - Express - JavaScript - MySQL - Handlebars - jQuery - ORM 
```
Below is a screenshot of the deployed application functionality:
![Bottomless Burgers App](/public/assets/images/BurgerApp_Deployed_Screenshot.png)

## Contributing
Pull requests are welcome. Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) and for major changes, please open an issue beforehand to discuss the changes.

## License 
[MIT](https://github.com/carmenobied/Node-Express-Handlebars/blob/master/LICENSE) | Copyright © 2020 Carmen Obied

## Tests 
There are currently no tests for this project.

## Questions  
Have questions? Contact me at:
##### Email: carmen.obied@gmail.com
##### Github:  **carmenobied** [carmenobied](https://github.com/carmenobied)
