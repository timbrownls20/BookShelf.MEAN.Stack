var express = require('express');
var router = express.Router();
var ctrlBooks = require('../controllers/books');

router.post('/book', ctrlBooks.booksCreate);
router.get('/book/:bookid', ctrlBooks.booksRead);
router.put('/book/:bookid', ctrlBooks.booksUpdate);
router.delete('/book/:bookid', ctrlBooks.booksDelete);

router.get('/books', ctrlBooks.booksList);

module.exports = router;
