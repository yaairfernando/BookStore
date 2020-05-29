import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

import Book from '../components/Book';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { props: { removeBook } } = this;
    removeBook(book);
  }

  render() {
    const { props: { books, category } } = this;
    const book = books.map(b => <Book book={b} handleRemoveBook={this.handleRemoveBook} key={`Book-${b.id}`} />);
    const filterdBooks = book.filter(e => {
      if (category !== 'All' && category !== '') {
        return e.props.book.category === category;
      }
      return book;
    });
    return (
      <div>
        <CategoryFilter />
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
            { filterdBooks }
          </tbody>
        </table>
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

const MapStateToProps = state => ({
  books: state.books,
  category: state.filter,
});
export default connect(MapStateToProps, { removeBook })(BookList);
