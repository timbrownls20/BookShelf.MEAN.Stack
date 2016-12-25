var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

mongoose.model('Book', bookSchema);