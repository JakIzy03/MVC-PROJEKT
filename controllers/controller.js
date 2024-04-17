const Book = require('../models/book');

let books = [
  new Book('Pan Tadeusz', 'Adam Mickiewicz', 1834),
  new Book('Ferdydurke', 'Witold Gombrowicz', 1937),
  new Book('Quo Vadis', 'Henryk Sienkiewicz', 1896),
  new Book('Nad Niemnem', 'Eliza Orzeszkowa', 1888)
];

exports.models = {books};

exports.getBooks = (req, res) => {
  res.render('home', { books: books });
};



exports.addBook = (req, res) => {
  const { title, author, year } = req.body;
  const newBook = new Book(title, author, year);
  books.push(newBook);
  res.redirect('/');
};

exports.getEditBook = (req, res) => {
  const id = req.params.id;
  const book = books[id];
  res.render('edit', { book: book, bookIndex: id });
};

exports.editBook = (req, res) => {
    const id = req.params.id;
    const { title, author, year } = req.body;
    books[id].title = title;
    books[id].author = author;
    books[id].year = year;
    res.redirect('/');
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;
  books.splice(id, 1);
  res.redirect('/');
};
