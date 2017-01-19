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

}

module.exports.booksList = function(req, res) {
    console.log('listing all books', req.params);
    
    book.find({}, function(err, books) {
                
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        }   
        else {
            console.log(books);
            sendJSONresponse(res, 200, books);
        }
    });

}

module.exports.booksRead = function(req, res) {
    console.log('retrieving book', req.params);
    sendJSONresponse(res, 200, {message: "test"});
}

module.exports.booksUpdate = function(req, res) {
    console.log('updating book', req.params);
    sendJSONresponse(res, 200, {message: "test"});
}

module.exports.booksDelete = function(req, res) {
    console.log('deleting book', req.params);


    book.remove({_id: req.params.bookid}, function(err, books) {
                
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        }   
        else {
            console.log('successful delete');
            sendJSONresponse(res, 204, null);
        }
    });
}

//.. helper functions
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};