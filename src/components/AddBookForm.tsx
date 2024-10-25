import React, { useState } from 'react';

type AddBookFormProps = {
  addBook: (title: string, author: string) => void;
};

const AddBookForm: React.FC<AddBookFormProps> = ({ addBook }) => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="書籍名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="著者名"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddBookForm;

