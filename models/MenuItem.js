const mongoose = require('mongoose')
// we need a mongoose to build the schema 

const MenuItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: Array,
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    },

})

// we need to export the schema 
const MenuItem = mongoose.model('MenuItem', MenuItemSchema)
module.exports = MenuItem;

