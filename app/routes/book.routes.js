const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.middleware");
const { bookSchema } = require("../validations/book.schema");

const {
  getAllBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
  getBooksController,
} = require("../controllers/book.controller");

// READ
router.get("/", getAllBooksController);
router.get("/:id", getBooksController);

// CREATE
router.post("/", validate(bookSchema), addBookController);

// UPDATE
router.put("/:id", validate(bookSchema), updateBookController);

// DELETE
router.delete("/:id", deleteBookController);

module.exports = router;
