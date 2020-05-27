import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions'

import Book from '../components/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  handleRemoveBook = (book) => {
    // console.log("REMOVE BOOK FROM HANDLE REMOVE BOOK, ", book);
    this.props.removeBook(book);
  }

  render() {
    const { props: { books } } = this;
    const bookArr = [];
    Object.keys(books).forEach(book => {
      bookArr.push(<Book book={books[book]} handleRemoveBook={this.handleRemoveBook} key={`Book-${books[book].id}`} />);
    });
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
          {bookArr}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const MapStateToProps = state => ({
  books: state.books,
});
export default connect(MapStateToProps, { removeBook })(BooksList);
