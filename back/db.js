const mysql = require('mysql2');

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

const connection = mysql.createConnection({
  connectionLimit: 100,
  host: 'localhost',
  port: '3306',
  user: DB_USER,
  password: DB_PASS,
  database: 'price'
})

module.exports = connection;
