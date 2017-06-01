require('dotenv').config();

const express = require('express');
const router = express.Router();

const note = require('./../models/note');

const noteController = require('./../controllers/notesController');
const notebookController = require('./../controllers/notebooksController');
const tagController = require('./../controllers/tagsController');
const colorController = require('./../controllers/colorsController');

router.get('/', function (req, res) {
    res.send('Welcome to the BN api');
});

router.post('/notes', noteController.add);
router.get('/notes', noteController.get);
router.delete('/notes', noteController.fuckThis);
router.put('/notes', noteController.update);

router.post('/notebooks', notebookController.add);
router.get('/notebooks', notebookController.get);
router.delete('/notebooks', notebookController.fuckThis);
router.put('/notebooks', notebookController.update);

router.post('/tags', tagController.add);
router.get('/tags', tagController.get);
router.delete('/tags', tagController.fuckThis);
router.put('/tags', tagController.update);

router.post('/colors', colorController.add);
router.get('/colors', colorController.get);
router.delete('/colors', colorController.fuckThis);
router.put('/colors', colorController.update);

module.exports = router;