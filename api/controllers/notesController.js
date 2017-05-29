// Notes Controller
let mongoose = require('mongoose');
let Note = require('./../models/note');

let get = (req, res) => {
    // console.log(req.query);
    Note.find(req.query).exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.json(err);
        }
    });
};

let add = (req, res) => {
    // console.log(req.body);
    const newNote = new Note(req.body);

    newNote.save((err, data) => {
        res.send(data);
    });
}

let fuckThis = (req, res) => {
    // console.log(req.body);
    Note.remove(req.body, (err, data)=> {
        if (!err) {
            res.status(204);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Note.update(conditions, req.body, (err, data) => {
        if (!err) {
            res.status(202);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let notesController = {
    get, add, fuckThis, update
}

module.exports = notesController;