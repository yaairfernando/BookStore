import React, { Component } from 'react';

import BooksList from './BooksList';
import BookForm from './BooksForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    return (
      <div>
        <BooksList />
        <BookForm />
      </div>
    );
  }
}
