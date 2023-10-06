const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8070;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

// Event listener for successful MongoDB connection
connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

// Route for handling books
const bookRouter = require("./routes/book.js");
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
