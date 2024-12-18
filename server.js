const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Import Routes
const postsRoute = require('./routes/posts');

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());

// Route Middleware
app.use(postsRoute);

// Database Connection
const PORT = 8000;
const DB_URI = 'mongodb+srv://deranindu:dd1234@clusternew.zgiye.mongodb.net/?retryWrites=true&w=majority&appName=Clusternew';

// Connect to MongoDB
mongoose.connect(DB_URI)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
