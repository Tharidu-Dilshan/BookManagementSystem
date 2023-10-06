import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BookForm = ({ newBook }) => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [ISBN, setISBN] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    newBook({ bookName, authorName, ISBN, description });
    setBookName('');
    setAuthorName('');
    setISBN('');
    setDescription('');
  };

  return (
    <div className='container'>
      <h1>Book Management System</h1>
    <div className="book-form">
      <div className='container'>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      </div>
    </div>
    </div>
  );
};
const BookList = ({ book, deleteBook }) => {
  return (
    <div >
      
      <table id='book'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((book) => (
            <tr key={book.ISBN}>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.ISBN}</td>
              <td>{book.description}</td>
              <td>
                <button onClick={() => deleteBook(book.ISBN)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/book/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, []);

  const newBook = (book) => {
    axios.post('http://localhost:8070/book/add', book)
      .then(() => {
        return axios.get('http://localhost:8070/book/');
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error adding a new book:', error);
      });
  };

  const deleteBook = (ISBN) => {
    axios.delete(`http://localhost:8070/book/delete/${ISBN}`)
      .then(() => {
        return axios.get('http://localhost:8070/book/');
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error deleting the book:', error);
      });
  };

  return (
    <div>
      <BookForm newBook={newBook} />
      <BookList book={book} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
