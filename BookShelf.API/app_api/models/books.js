var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

var bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    publisher: {
        type: String,
        required: false
    },
    pageCount: {
        type: Number,
        required: false
    },
    publishedDate: {
        type: Date,
        required: false
    },
    authors: [authorSchema]

});

mongoose.model('Book', bookSchema);