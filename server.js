const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const { appendFile } = require('fs');
const pageRoute = require('./routes/pageRoute');



// Init Express
const app = express();

// environment
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

// Data Manage
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// Static Files
app.use(express.static('public'));

// Call Route
app.use('/', pageRoute);

// Create Server 
app.listen(PORT, () => {
    console.log(`Your Server Is Running On Port ${PORT}`.green);
});