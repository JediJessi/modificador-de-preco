require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors(), function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const productsRoutes = require('./routes/productsRoutes')

app.use('/products', productsRoutes)

app.listen(8888)