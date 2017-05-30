require('dotenv').config();

const express = require('express');
const router = express.Router();

const note = require('./../models/note');

const noteController = require('./../controllers/notesController')

router.get('/', function (req, res) {
    res.send('Welcome to the BN api');
});

router.post('/notes', noteController.add);
router.get('/notes', noteController.get);
router.delete('/notes', noteController.fuckThis);
router.put('/notes', noteController.update);

module.exports = router;