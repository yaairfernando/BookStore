import React, { Component } from 'react';

import BookList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    return (
      <div className="app">
        <BookList />
        <BookForm />
      </div>
    );
  }
}
