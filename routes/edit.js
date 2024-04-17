const express = require('express');
const router = express.Router();
const bookController = require('../controllers/controller');

const books = bookController.books;


router.get('/edit/:id', bookController.getEditBook);
router.post('/edit/:id', bookController.editBook);


module.exports = router;