import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ListOfBooks = args => {
  const { books: { state } } = args;
  const content = [];
  Object.keys(state).forEach(book => {
    content.push(
      <tr>
        <th>{state[book].id}</th>
        <th>{state[book].title}</th>
        <th>{state[book].content}</th>
      </tr>,
    );
  });

  return (
    content
  );
};

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.Books = props.booksList;
    this.test = '';
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
          <ListOfBooks books={this.Books} />
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  booksList: PropTypes.objectOf(PropTypes.object).isRequired,
};

const MapStateToProps = state => ({
  booksList: state.books,
});
export default connect(MapStateToProps)(BooksList);
