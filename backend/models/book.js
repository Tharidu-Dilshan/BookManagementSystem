const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
