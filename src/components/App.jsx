import React from 'react';

import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

const App = () => (
  <div className="wrapper">
    <BookList />
    <BookForm className="formContainer" />
  </div>
);

export default App;
