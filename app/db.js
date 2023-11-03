const { v4: uuidv4 } = require("uuid");
const { bookSchema } = require("./validations/movie.schema");

const books = [];

const getAllBooks = () => books;

const getBook = ({ id }) => {
  const idx = bookss.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  const book = books[idx];
  return book;
};

const addBook = ({ title, year }) => {
  const id = uuidv4();
  const m = {
    id,
    title,
    year,
  };
  books.push(m);
  return m;
};

const updateBook = ({ id, payload }) => {
  const idx = books.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  books[idx]["title"] = payload["title"];
  books[idx]["year"] = payload["year"];

  return books[idx];
};

const deleteBook = ({ id }) => {
  const idx = books.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  const book = books[idx];
  books.splice(idx, 1);
  return book;
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBook,
};
