const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        class: {
            type: String
        }
    }
);

const tag = mongoose.model('colors', tagSchema);

module.exports = color;