const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: [
        'http://localhost:3000', // Allow local development
        'https://login-signup-lime-gamma.vercel.app' // Allow deployed frontend
    ],
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    credentials: true // Enable credentials (cookies, authorization headers, etc.)
}));

// Basic route
app.get('/', (req, res) => {
    res.send('PONG');
});

// Route handlers
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
    }
    console.log(`Server is running on port ${PORT}`);
});
