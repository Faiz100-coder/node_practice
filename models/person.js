const mongoose = require('mongoose');



const PersonSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },

    age: {
        type: 'number',
        required: true
    },
    Work: {
        type: 'string',
        enum: ['chef', 'manager', 'waiter'],
        required: true
    },
    Number: {
        type: 'number',
        required: true

    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    address: {
        type: 'string',
        required: true
    },
    salary: {
        type: 'number',
        required: true
    }
});

// we need create a model

const person = mongoose.model('Person', PersonSchema);
module.exports = person;
// console.log(person);
