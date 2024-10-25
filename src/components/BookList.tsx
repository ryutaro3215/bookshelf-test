import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

type BookListProps = {
  books: Book[];
  deleteBook: (id: number) => void;
};

const BookList: React.FC<BookListProps> = ({ books, deleteBook }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => deleteBook(book.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;

