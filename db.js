const mongoose = require('mongoose');
// console.log("hi iam form the db.js file")

// connection to the mongoose with database connection 
// define the connection url 
const mongoURL = 'mongodb://127.0.0.1:27017/mydb'
// this is mandatory iin every connection
// setup the mongodb connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true, useUnifiedTopology: true,
}) //this is required because  of the use of the new url parser 

// get default connection 

const db = mongoose.connection;

// define event listeners for the connection


db.on('connected', () => {
    console.log('connected to the database server...')
});

db.on('disconnected', () => {
    console.log('\n Disconnected ! ..')
});


db.on('error', (err) => {
    console.error(`Error connecting to the database: ${err.message}`, err)
});


// export the database connection 
module.exports = db; 