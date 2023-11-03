const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBook,
} = require("../db");

const getAllBooksController = (req, res) => {
  const books = getAllBooks();
  res.send(books);
};

const getBooksController = (req, res, next) => {
  const book = getBook({ id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "Book not found",
    });
  }
  res.send(book);
};

const addBookController = (req, res) => {
  const book = addBook(req.xop);
  res.send(book);
};

const updateBookController = (req, res, next) => {
  const book = updateBook({ payload: req.xop, id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "Book not updated",
    });
  }
  res.send(book);
};

const deleteBookController = (req, res, next) => {
  const book = deleteBook({ id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "Book not found",
    });
  }
  res.send(book);
};

module.exports = {
  getAllBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
  getBooksController,
};
