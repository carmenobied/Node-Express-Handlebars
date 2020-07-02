// Set up MySQL connection.
var mysql = require("mysql");

const DB_password = process.env.BurgersDB_URL;

if(process.env.BurgersDB_URL) {
  connection = mysql.createConnection(process.env.BurgersDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: DB_password,
    database: "burgers_db"
  })
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;