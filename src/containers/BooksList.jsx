import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../components/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    const { props: { books } } = this;
    const bookList = books.map(b => <Book book={b} key={`Book-${b.title}`} />);
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
          {bookList}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const MapStateToProps = state => ({
  books: state.books,
});
export default connect(MapStateToProps)(BooksList);
