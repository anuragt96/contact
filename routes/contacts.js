const express = require('express');
const router = express.Router();

//it is for get all contacts

// @route       GET  api/contacts
//@desc         Get all user contacts
//@access       Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// it is for add contact

// @route       POST  api/contacts
//@desc         Add new contact
//@access       Private
router.post('/', (req, res) => {
    res.send('Add contact');
});


//it is update contact

// @route       PUT  api/contacts/:id
//@desc         Update contact
//@access       Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//it is deleting a contact

// @route       DELETE  api/contacts/:id
//@desc         Delete contact
//@access       Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;