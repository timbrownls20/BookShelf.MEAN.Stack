var mongoose = require('mongoose');
var book = mongoose.model('Book');

module.exports.booksCreate = function(req, res) {
    console.log('Creating book', req.body);

    book.create({
        title: req.body.title,
        description: req.body.description    
    }, function(err, location) {
        if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
        } else {
        console.log(location);
        sendJSONresponse(res, 201, location);
        }
    });

    //sendJSONresponse(res, 200, {message: "test"});
}

module.exports.booksReadOne = function(req, res) {
    console.log('retrieving book', req.params);
    sendJSONresponse(res, 200, {message: "test"});
}

module.exports.booksUpdateOne = function(req, res) {
    console.log('updating book', req.params);
    sendJSONresponse(res, 200, {message: "test"});
}

module.exports.booksDeleteOne = function(req, res) {
    console.log('deleting book', req.params);
    sendJSONresponse(res, 200, {message: "test"});
}

//.. helper functions
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};