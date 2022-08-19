require('dotenv').config();
// async errors


const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1> <a href="/api/v1/products">Products Route</a>`)
})

// product route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connect DB
        app.listen(port, console.log(`Server Is Running On Port: ${port}...`))
    } catch (error) {
        console.log(error);
    }
}
start();