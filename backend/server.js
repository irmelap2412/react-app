const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost:3306',         // Your MySQL host
    user: 'root',     // Your MySQL username
    password: 'teapot', // Your MySQL password
    database: 'teapot', // Your MySQL database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
