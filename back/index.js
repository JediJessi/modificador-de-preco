require('dotenv').config()

const mysql = require('mysql2');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(cors(), function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});


// json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// api modular routes
const productsRoutes = require('./routes/productsRoutes')

app.use('/products', productsRoutes)

// starting route
app.get('/', (req, res) => {

    res.json({message: 'teste ok'})

})

// database connection
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)


mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: DB_USER,
  password: DB_PASS,
  database: 'price'
})
app.listen(8888)