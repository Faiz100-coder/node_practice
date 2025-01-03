//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
const express = require('express')
const app = express()
let db = require("./db");

const person = require('./models/person');
const MenuItem = require('./models/MenuItem');

const bodyparser = require('body-parser');
app.use(bodyparser.json());//req.bodyParser
require('dotenv').config();

app.get('/', function (req, res) {
    res.send('server started successfully..... \n \t ..........')
})





// import the router file  of person
const personroutes = require('./routes/personroutes');
const menuItemRoutes = require('./routes/menuroutes');


// import the router file  of menuItem
app.use('/person', personroutes);
app.use('/menu', menuItemRoutes);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port number ${PORT}...`);
})