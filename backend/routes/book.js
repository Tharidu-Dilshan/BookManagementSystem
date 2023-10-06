const router = require("express").Router();
const Book = require("../models/book");

router.route("/add").post((req, res) => {
  const { bookName, authorName, ISBN, description } = req.body;

  const newBook = new Book({
    bookName,
    authorName,
    ISBN,
    description
  });

  newBook
    .save()
    .then(() => {
      res.json("Book Added");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error adding book");
    });
});

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error fetching books");
    });
});

router.route("/delete/:isbn").delete(async (req, res) => {
  const ISBN = req.params.isbn;

  try {
    const deletedBook = await Book.findOneAndDelete({ ISBN });
    if (!deletedBook) {
      res.status(404).send({ status: "Book not found" });
    } else {
      res.status(200).send({ status: "Book Deleted" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ status: "Error with deleting data", error: err.message });
  }
});

module.exports = router;
