# Node-Express-Handlebars: Burger App
![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen)

The goal was to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM, by following the MVC design pattern, using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML. 

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. The app involves the following functionalities:
* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* The app will store every burger in a database, whether devoured or not.

# Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Questions](#Questions)

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

## Instructions

#### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   * express

#### DB Setup

1. Inside your `burger` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. Inside your `burger` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside your `burger` directory, create a folder named `models`.

  * In `models`, make a `burger.js` file.

    * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   * Express
   * `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
## Usage
```
Key Components Used:
MVC - Express - Node - MySQL - Handlebars - JavaScript - ORM - Heroku
```

## Contributing
Pull requests are welcome. Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) and for major changes, please open an issue beforehand to discuss the changes.

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Questions  
Have questions? Contact me at:
##### Email: carmen.obied@gmail.com
##### Github:  **carmenobied** [carmenobied](https://github.com/carmenobied)