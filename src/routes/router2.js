const express = require("express");

const router = express.Router();

const {
  // fungsi read pada controller todo dibuat alias
  read: getTodos,
  readOne: detailTodo,
  create: storeTodo,
  delete: deleteTodo,
} = require("../controller/database/todo");

// import controller yang sudah memiliki relasi
const {
  readProfile,
  readUser,
  getUserJobs,
} = require("../controller/database/userProfile");

// import controller many-to-many
const {
  getBooksAuthors,
  getAuthorsBooks,
} = require("../controller/database/bookAuthor");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodo);
router.post("/todo", storeTodo);
router.delete("/todo/:id", deleteTodo);

// buat router dari controller yang sudah berelasi
router.get("/users", readUser);
router.get("/profiles", readProfile);
router.get("/user-jobs", getUserJobs);

// buat router dari controller many-to-many
router.get("/books-authors", getBooksAuthors);
router.get("/authors-books", getAuthorsBooks);

module.exports = router;
