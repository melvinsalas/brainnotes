require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const note = require('./../models/note.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/boing', (err) => {
    if (err) {
        console.log(`Error Potato: ${err}`);
    } else {
        console.log(`Connected to Mongo`);
    }
});

router.get('/', function (req, res) {
    //console.log(note.find().exec());
    note.find({}, (err, doc) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.json(doc);
            console.log(err);
            console.log(doc);
        }
    });
});

module.exports = router;