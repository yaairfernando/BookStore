import React, { Component } from 'react';

import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

const App = () => {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
