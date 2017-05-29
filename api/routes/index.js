require('dotenv').config();

const express = require('express');
const router = express.Router();

const note = require('./../models/note');

const noteController = require('./../controllers/notesController')

router.get('/', function (req, res) {
    res.send('Welcome to the BN api');
    //console.log(note.find().exec());
    // note.find({}, (err, doc) => {
    //     if (err) {
    //         res.send(err);
    //         console.log(err);
    //     } else {
    //         res.json(doc);
    //         console.log(err);
    //         console.log(doc);
    //     }
    // });
});

router.post('/notes', noteController.add);
router.get('/notes', noteController.getAll);

module.exports = router;