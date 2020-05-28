import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ handleRemoveBook, book }) => {
  const { id, title, category } = book;
  return (
    <tr>
      <th className="category">{id}</th>
      <th className="title">{title}</th>
      <th className="button">{category}</th>
      <th>
        <button onClick={() => handleRemoveBook(book)} type="button">Delete</button>
      </th>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
