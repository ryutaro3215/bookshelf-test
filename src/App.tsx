import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

type Book = {
  id: number;
  title: string;
  author: string;
};

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addBook = (title: string, author: string) => {
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className='App'>
      <h1>Book Shelf</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};


export default App;


