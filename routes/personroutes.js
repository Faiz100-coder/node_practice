const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//post routes to add a person

router.post('/', async (req, res) => { // when ever any one hit the /person endpoint so the async is called with post method which is called the 
    try {

        const data = req.body
        // create a new person document using the mongoose model
        const newPerson = new person(data);

        //save the new perosn to the database

        const response = await newPerson.save();
        console.log('data saved successfully');
        res.status(200).json(response)


        // newPerson.Number = data.Number // this is not the valid  just pass the the data in the perosn new person the you are good to go
    } catch (err) {

        console.log(err)
        res.status(500).json(' internal server error');
    }
});

// save the new person document to the database

//we avoid this  if else method because of async and await, and try catch to handle the error 

router.get('/', async (req, res) => {

    try {
        const data = await person.find();
        console.log('data fetched successfully');
        res.status(200).json(data)

    } catch (err) {

        console.log(err)
        res.status(500).json('internal server error');
    }


})

router.get('/:workType', async (req, res) => {

    try {
        const workType = req.params.workType;
        if (workType === 'waiter' || workType === 'chef' || workType === 'manager') {

            const response = await person.find({ Work: workType });
            console.log('data fetched successfully');

            res.status(200).json(response)
        } else (
            res.status(404).json('work type not found, invalid work type ')
        )

    } catch (err) {
        console.log(err)
        res.status(500).json('internal server error');
    }

});


router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const updatedpersonData = req.body;

        const response = await person.findByIdAndUpdate(personid, updatedpersonData,
            { new: true, runValidators: true });

        if (!response) {
            res.status(404).json('person not found')
        }
        console.log('data updated successfully');
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json('internal server error');
    }


});


router.delete('/:id', async (req, res) => {

    try {
        const personid = req.params.id;

        const response = await person.findByIdAndDelete(personid);
        if (!response) {
            res.status(404).json('person not found')
            f
        }
        console.log("data delete");
        res.status(200).json({ message: 'data deleted successfully' })

    } catch (err) {
        console.log(err)
        res.status(500).json('internal server error');
    }
});



module.exports = router;
