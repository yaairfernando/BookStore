import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Book = ({handleRemoveBook, book}) => {
  const { id, title, category } = book;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <th>
        <button onClick={() => handleRemoveBook(book)} type="button">Delete</button>
      </th>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;