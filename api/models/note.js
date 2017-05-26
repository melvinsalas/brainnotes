const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        }
    }
);

const note = mongoose.model('notes', noteSchema);

module.exports = note;