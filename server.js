const express = require('express');
const mongoose = require('mongoose');

const app = express();







const PORT = 8000;
const DB_URI = 'mongodb+srv://deranindu:dd1234@clusternew.zgiye.mongodb.net/?retryWrites=true&w=majority&appName=Clusternew';

mongoose.connect(DB_URI)
.then(() => {   
    console.log('Connected to the database');
    })
.catch((err) => {
    console.log('Error connecting to the database', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});