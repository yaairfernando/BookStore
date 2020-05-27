import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

import Book from '../components/Book';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.test = '';

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { props: { removeBook } } = this;
    removeBook(book);
  }

  render() {
    const { props: { books } } = this;
    const book = books.map(b => <Book book={b} handleRemoveBook={this.handleRemoveBook} key={`Book-${b.id}`} />);
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {book}
        </tbody>
      </table>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const MapStateToProps = state => ({
  books: state.books,
});
export default connect(MapStateToProps, { removeBook })(BookList);
