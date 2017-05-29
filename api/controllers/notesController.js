// Notes Controller
let mongoose = require('mongoose');
let Note = require('./../models/note');

let getAll = (req, res) => {
    Note.find().exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        }
    });
};

let add = (req, res) => {
    const newNote = new Note(req.body);

    newNote.save((err, data) => {
        res.send(data);
    });
}

let notesController = {
    getAll, add
}

module.exports = notesController;