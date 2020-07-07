// Set up MySQL connection.
let mysql = require("mysql");

// const DB_password = process.env.BurgersDB_URL;

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Nomad7285!",
  database: "burgers_db"
});

// Make connection.
connection.connect(err => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;