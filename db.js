const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  //   connection.query("SELECT * FROM Contact", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  console.log('Connected to MySQL database');
});

module.exports = connection;
