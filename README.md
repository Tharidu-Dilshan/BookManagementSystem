
# Book Management System

This project implements a simple Book Management System that allows users to keep track of book information including title, author, and ISBN.

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- **Frontend:**
  - React

## Project Structure

The project consists of two main components:

1. **Backend (Node.js):**
   - Sets up a simple Express server.
   - Creates a MongoDB database to store book information (title, author, and ISBN).
   - Implements API endpoints for fetching all books, adding a new book, and deleting a book by its ISBN.

2. **Frontend (React):**
   - Provides a form component for users to input book details (title, author, and ISBN).
   - Displays the list of books below the form.
   - Fetches and displays the list of books from the backend when the page loads.
   - Implements features to add a new book through the form and delete a book by its ISBN.

## How to Run

Follow these steps to run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Tharidu-Dilshan/BookManagementSystem.git
   cd BookManagementSystem
2. **Run Code:**  
  Use npm run dev  for Backend and 
  Use npm start for Frontend
