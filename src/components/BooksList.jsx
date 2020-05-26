import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = books => {
  const { book } = books;
  return (
    <tr>
      <th>{book.id}</th>
      <th>{book.title}</th>
      <th>{book.category}</th>
    </tr>
  );
};

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  renderBooks() {
    const { props: { books } } = this;
    const tempBook = Object.values(books);
    return tempBook.map(book => <Book book={book} key={book.id} />);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.renderBooks()}
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
export default connect(MapStateToProps)(BooksList);
