// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
const printQuestionMarks = num => {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  const objToSql = ob => {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  const orm = {
    all: (tableInput, cb) => {
      const queryString = `SELECT * FROM ${tableInput};`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: (table, cols, vals, cb) => {
      const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`
      console.log(queryString);
      connection.query(queryString, vals, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // objColVals
    update: (table, objColVals, condition, cb) => {
      const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
      
      console.log(queryString);

      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
    // delete: (table, condition, cb) => {
      // const queryString = `DELETE FROM ${table} WHERE ${condition}`;
    //   connection.query(queryString, (err, data) => {
    //     if (err) {
    //       throw err;
    //     }
    //     cb(data);
    //   });
    // }
  };
  
  // Export the orm object for the model (burger).js).
  module.exports = orm;