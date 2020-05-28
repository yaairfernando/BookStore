import React, { Component } from 'react';

import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BookList />
        <BookForm />
      </div>
    );
  }
}
