const express = require('express');
const router = express.Router();
const menu = require('./../models/MenuItem');
const MenuItem = require('./../models/MenuItem');

// get menu end points 
router.post('/', async (req, res) => {
    try {
        // const data = req.body
        // create a new person document using the mongoose model
        const menuItem = new MenuItem(req.body);

        //save the new perosn to the database

        const resp = await menuItem.save();
        console.log('data saved successfully');
        res.status(200).json(resp)

    } catch (err) {

        console.log(err)
        res.status(500).json('internal server error');
    }

});

router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find(); // Fetch all menu items
        console.log('data fetched successfully');
        res.status(200).send(menuItems);
    } catch (err) {

        console.log(err)
        res.status(500).json('internal server error');
    }
});

router.get('/:tasteType', async (req, res) => {

    try {
        const tasteType = req.params.tasteType;
        if (tasteType === 'spicy' || tasteType === 'sour' || tasteType === 'sweet') {

            const response = await MenuItem.find({ taste: tasteType });
            console.log('data fetched successfully');

            res.status(200).json(response)
        } else (
            res.status(404).json('invalid taste type ')
        )

    } catch (err) {
        console.log(err)
        res.status(500).json('internal server error');
    }

});






module.exports = router;