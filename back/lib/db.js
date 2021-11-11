const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "guillaume1",
    password: "password",
    database: "jobboard",
});

connection.connect();
module.exports = connection;