import React from 'react';

import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';
import Header from '../containers/Header';

const App = () => (
  <div className="wrapper">
    <Header />
    <BookList />
    <BookForm className="formContainer" />
  </div>
);

export default App;
