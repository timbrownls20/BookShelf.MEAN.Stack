var express = require('express');
var router = express.Router();
var ctrlBooks = require('../controllers/books');

 router.post('/books', ctrlBooks.booksCreate);
 router.get('/books/:bookid', ctrlBooks.booksReadOne);
// router.put('/books/:bookid', ctrlBooks.booksUpdateOne);
// router.delete('/books/:bookid', ctrlBooks.booksDeleteOne);

module.exports = router;
