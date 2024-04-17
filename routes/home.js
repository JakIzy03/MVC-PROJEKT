const express = require('express');
const router = express.Router();
const bookController = require('../controllers/controller');

const books = bookController.books;

router.get('/', bookController.getBooks);
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;


