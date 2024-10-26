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
    host: 'localhost',
    user: 'root',
    password: 'teapot',
    database: 'teapot',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM teapot';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json(results);
    });
});

// Sign-in route
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;
    console.log("Sign-in attempt:", email);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const query = 'SELECT * FROM teapot WHERE email = ? AND pass = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Server error ' + err });
        }

        if (results.length > 0) {
            console.log("Sign-in successful for:", email);
            res.status(200).json({ message: 'Sign-in successful', user: results[0] });
        } else {
            console.log("Sign-in failed for:", email);
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});