import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = (book) => {
  return (
    <tr>
      <th>{book.book.id}</th>
      <th>{book.book.title}</th>
      <th>{book.book.category}</th>
    </tr>
  )
};

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  
  renderBooks(books) {
    return books.map((book) => {
      return <Book book={book} key={book.id} />
    })
  } 
  
  render() {
    const books = Object.values(this.props.books);

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
          {this.renderBooks(books)}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.object.isRequired
};

const MapStateToProps = state => {
  return {
    books: state.books
  }
}
export default connect(MapStateToProps)(BooksList);
