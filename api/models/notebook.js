const mongoose = require('mongoose');

const notebookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        }
    }
);

const notebook = mongoose.model('notebooks', notebooksSchema);

module.exports = note;