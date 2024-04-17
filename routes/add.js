const express = require('express');
const router = express.Router();
const bookController = require('../controllers/controller');

const books = bookController.books;


router.get('/add', (req, res) => {
    res.render('add');
  });
router.post('/add', bookController.addBook);


module.exports = router;