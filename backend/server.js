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
    host: 'localhost',         // Your MySQL host
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
app.get('/api/users', (req, res) => {
    const query = 'SELECT *FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json(results); // Send users data as JSON
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Sign-in route
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    console.log("App post initialized.");

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    // Query to find the user
    const query = 'SELECT * FROM users WHERE email = ? AND pass = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Server error' });
        }

        // Check if user exists
        if (results.length > 0) {
            // Successful sign-in
            res.status(200).json({ message: 'Sign-in successful', user: results[0] });
        } else {
            // User not found or password doesn't match
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});
